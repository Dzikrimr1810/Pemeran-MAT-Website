import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/app/lib/sanity';
import { simplifiedCatalogue } from '@/app/interface';
import Categories from '@/app/components/categories';

async function getData(grief : string){
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

const  ProjectGrief = async ({params} : {params : {grief : string}}) => {
const data: simplifiedCatalogue[] = await getData(params.grief)


console.log(params.grief)

return (
    <div className='md:columns-4 columns-2'>
      {data.map((items,index)=>(
        <Link key={index} href={`/project/${items.slug}`} className='group'>
          <div className='w-full rounded-lg overflow-hidden mb-2 max-h-[350px] bg-slate-500'>
            <Image priority className='w-full object-center group-hover:scale-105 duration-300' alt={items.name} width={700} height={700} src={items.imageUrl}/>           
          </div>
          <div className='flex flex-col'>
            <div className='flex text-[10px] gap-2 my-1 justify-start items-center'>
              <div className={`px-4 py-[2px] bg-gray rounded-full
                ${items.categoryName == "Denial" && "text-[#B70000]"}
                ${items.categoryName == "Anger" && "text-[#FF3300]"}
                ${items.categoryName == "Bargaining" && "text-[#00F2FF]"}
                ${items.categoryName == "Depression" && "text-[#0054D1]"}
                ${items.categoryName == "Acceptance" && "text-[#B70000]"}
                `}>{items.categoryName}</div>
              <div className='px-4 py-[2px] bg-gray rounded-full'>{items.typeproject}</div>
            </div>
            <div className='text-[20px] font-semibold'>{items.name.length > 30 ? items.name.slice(0, 30) + '...' : items.name}</div>
          </div>
        </Link>
      ))}
    </div>
)
}

export default ProjectGrief