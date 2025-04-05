import { getPayload } from "payload";
import config from "@payload-config";

export async function fetchSchoolListHero() {
  const payload = await getPayload({config});
  const response = await payload.find({
    collection: "school-list",
  });

  return response.docs[0];
}

export async function fetchSchoolListTable(){
  const payload = await getPayload({config});
  const response = await payload.find({
    collection: "school-list",
  });

  return response.docs[0].Agreements;
}