import React from 'react'
import Categories from '../components/categories';
import Projects from '../components/projects';

export const dynamic = "force-dynamic"
const Catalogue = async () => {
  return (
    <section className='text-breakWhite overflow-clip md:w-full w-screen mb-20 md:px-20 px-5 pt-24 md:pt-28 flex flex-col'>
      <div className='w-full text-[24px] font-semibold text-center'>Project <span className='text-lightRed'>Catalogue</span></div>
      <Categories/>
      <Projects/>
    </section>
  )
}

export default Catalogue