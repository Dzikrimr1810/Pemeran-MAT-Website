import React from 'react'
import { client } from '../lib/sanity';
import { simplifiedCatalogue } from '../interface';
import Image from 'next/image';
import Link from 'next/link';
async function getData(){
  const query = `*[_type=='project'] {
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


return data
}

export const dynamic = 'force-dynamic';

const Projects = async () => {
const data: simplifiedCatalogue[] = await getData()

  return (
      <div className='md:columns-4 columns-2'>
        {data.map((items,index)=>(
          <Link key={index} href={`/project/${items.slug}`} className='group'>
            <div className='w-full rounded-lg overflow-hidden mb-2 max-h-[350px] bg-slate-500'>
              <Image className='w-full object-center group-hover:scale-105 duration-300' alt={items.name} width={700} height={700} src={items.imageUrl}/>           
            </div>
            <div className='flex flex-col'>
              <div className='flex text-[9px] md:text-[9px] gap-2 my-1 justify-start items-center'>
                <div className={`px-4 py-[2px] bg-gray rounded-full flex justify-center items-center
                  ${items.categoryName == "Denial" && "text-[#B70000]"}
                  ${items.categoryName == "Anger" && "text-[#FF3300]"}
                  ${items.categoryName == "Bargaining" && "text-[#00F2FF]"}
                  ${items.categoryName == "Depression" && "text-[#0054D1]"}
                  ${items.categoryName == "Acceptance" && "text-[#B70000]"}
                  `}>{items.categoryName}</div>
                <div className='px-4 py-[2px] bg-gray rounded-full flex justify-center items-center'>{items.typeproject}</div>
              </div>
              <div className='text-[20px] font-semibold pb-2'>{items.name.length > 30 ? items.name.slice(0, 30) + '...' : items.name}</div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default Projects