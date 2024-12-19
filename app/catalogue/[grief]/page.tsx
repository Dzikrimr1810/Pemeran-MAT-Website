import React from 'react'
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';

interface GriefProps {
  params: { grief: string };
}

const Grief = async ({ params }: GriefProps) => {
  // Validasi params.grief untuk menghindari error jika parameter tidak ada
  if (!params || !params.grief) {
    return <div>Invalid or missing grief parameter.</div>;
  }

  return (
    <section className='text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col'>
      <div className='w-full text-[24px] font-semibold text-center'>
        Project <span className='text-lightRed'>Categories</span>
      </div>
      <Categories />
      {/* Pastikan parameter grief dikirim ke ProjectGrief */}
      <ProjectGrief params={params} />
    </section>
  );
}

export default Grief;
