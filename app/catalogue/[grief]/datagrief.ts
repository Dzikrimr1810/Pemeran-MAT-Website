import { client } from "@/app/lib/sanity";

export default async function getDataGrief(grief : string){
  const query = `*[_type=='project' && category->name == '${grief}'] {
    _id,
    _type,
    name,
    "creatorName": createdBy.name,
      "creatorIg": createdBy.ig,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    "typeproject": typeproject->typeproject,
    "imageUrl": image[0].asset->url
      }`;

const data = await client.fetch(query);
console.log(data)
return data
}