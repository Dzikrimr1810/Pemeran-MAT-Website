import React from 'react'
import Categories from '../components/categories';
import Projects from '../components/projects';

export const dynamic = "force-dynamic"
const Catalogue = async () => {
  return (
    <section className='text-breakWhite w-full pt-28 mb-20 px-10 md:px-24 flex flex-col'>
      <div className='w-full text-[24px] font-semibold text-center'>Project <span className='text-lightRed'>Categories</span></div>
      <Categories/>
      <Projects/>
    </section>
  )
}

export default Catalogue