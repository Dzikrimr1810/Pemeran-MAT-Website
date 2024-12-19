import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/app/lib/sanity';
import { simplifiedCatalogue } from '@/app/interface';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';


const  Grief = async ({params} : {params : {grief : string}}) => {

return (
  <section className='text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col'>
    <div className='w-full text-[24px] font-semibold text-center'>Project <span className='text-lightRed'>Categories</span></div>
    <Categories />
    <ProjectGrief params={params}/>
  </section>
)
}

export default Grief