import { client } from "@/app/lib/sanity";


export default async function getDataProject(slug: string) {
  const query = `*[_type=='project' && slug.current == "${slug}"][0] {
    _id,
    _type,
    name,
    "creatorName": createdBy.name,
    "creatorIg": createdBy.ig,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    "typeproject": typeproject->typeproject,
    "imageUrl": image
  }`;
  try {
      const data = await client.fetch(query);
      return data || null; // Kembalikan null jika data tidak ditemukan
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; // Tangani error dan kembalikan null
    }
  }