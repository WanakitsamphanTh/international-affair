import { CollectionSlug, getPayload } from "payload";
import config from "@payload-config";

export async function fetchData(collectionName: CollectionSlug){
  const payload = await getPayload({config});
  const response = await payload.find({
    collection: collectionName,
  });

  return response.docs[0];
}

export async function fetchAllPosts(language: string){
  const payload = await getPayload({config});
  const response = await payload.find({
    collection: "posts",
    where: {
      tags: {
        equals: language
      }
    }
  });

  return response.docs;
}

export async function fetchOnePost(slug: string) {
  const payload = await getPayload({config});

  const where: any = {};

  const response = await payload.find({
    collection: "posts",
    where: {
      slug: {equals: slug},
    },
    limit: 1,
  });

  return response.docs[0] ?? null;
}

export function formatDateEn(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}