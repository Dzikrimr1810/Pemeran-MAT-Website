
import React from 'react'
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';
import { simplifiedCatalogue } from '@/app/interface';
import getDataGrief from './datagrief';



const  Grief = async ({params} : {params : {grief : string}}) => {

  const data: simplifiedCatalogue[] = await getDataGrief(params.grief)
console.log(params.grief , "itu dia")
return (
  <section className='text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col'>
    <div className='w-full text-[24px] font-semibold text-center'>Project <span className='text-lightRed'>Categories</span></div>
    <Categories />
    <ProjectGrief data={data}/>
  </section>
)
}

export default Grief