import { CollectionSlug, getPayload } from "payload";
import config from "@payload-config";

export async function fetchData(collectionName: CollectionSlug){
  const payload = await getPayload({config});
  const response = await payload.find({
    collection: collectionName,
  });

  return response.docs[0];
}