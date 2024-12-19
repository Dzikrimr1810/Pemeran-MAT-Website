// 'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import ImgProject from "@/app/components/imgProject";
import { simplifiedProject } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Link from "next/link";

async function getData(slug: string): Promise<simplifiedProject | null> {
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: simplifiedProject | null = await getData(params.slug);

  // Validasi jika data tidak ditemukan
  if (!data) {
    return (
      <section className="w-full md:px-20 px-10">
        <p>Data not found</p>
      </section>
    );
  }

  console.log("Fetched data:", data);

  return (
    <section className="w-full md:px-32 px-10 text-breakWhite pt-28 mb-20">
        <div className="w-full mb-10 md:mb-6 text-center">
            <div className=" font-semibold text-[24px] md:mb-4">Project <span className="text-lightRed">Details</span></div>
            <div className="hidden md:block font-light text-white/70"><Link className="hover:text-lightRed" href="/">Home</Link> / <Link className="hover:text-lightRed" href="/catalogue">{data.categoryName} Category</Link> / <Link className="border-b text-breakWhite border-gray" href="">{params.slug.slice(0, 20) + '...'}</Link></div>        
        </div>
      <div className="flex md:flex-row flex-col w-full">
        <div className="md:w-1/2">
            {/* Pastikan ImgProject menerima props dengan benar */}
            <ImgProject images={data.imageUrl} nameProject={data.name} />
        </div>  
        <div className="text-breakWhite md:w-1/2 md:pl-10 pt-5 md:pt-0">
            <div className='flex text-[12px] gap-2 my-1 justify-start items-center'>
              <div className={`px-4 py-[2px] bg-gray rounded-full
                ${data.categoryName == "Denial" && "text-[#B70000]"}
                ${data.categoryName == "Anger" && "text-[#FF3300]"}
                ${data.categoryName == "Bargaining" && "text-[#00F2FF]"}
                ${data.categoryName == "Depression" && "text-[#0054D1]"}
                ${data.categoryName == "Acceptance" && "text-[#B70000]"}`}>{data.categoryName}</div>
              <div className='px-4 py-[2px] bg-gray rounded-full'>{data.typeproject}</div>
            </div>
            <h1 className="text-[32px] font-semibold mb-5 md:mb-10 lg:mb-16">{data.name}</h1>
            <div className="flex flex-col text-sm">
                <span className="font-semibold text-lightRed text-base">Create by:</span>
                {data.creatorName}
            </div>
            <div className="flex flex-col text-sm">
                <span className="font-semibold text-lightRed text-base">Instagram:</span>
                {data.creatorIg}
            </div>
            <div className="mt-3 border-t-[1px] border-lightRed pt-2 flex flex-col">
                <span className="font-semibold text-lightRed text-base pb-1">Description:</span>
                <ScrollArea className="text-justify h-[300px] w-full">
                {data.description}
                </ScrollArea>  
            </div>
        </div>  
      </div>
    </section>
  );
}
