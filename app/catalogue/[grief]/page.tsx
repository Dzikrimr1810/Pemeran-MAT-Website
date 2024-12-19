import React from 'react';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';

// Komponen Grief dengan async di dalamnya
const Grief = async ({ params }: { params: { grief: string } }) => {
  // Anda bisa menggunakan fetch di sini untuk mendapatkan data jika diperlukan.
  // Contoh:
  // const data = await fetchDataFunction(params.grief);

  return (
    <section className="text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col">
      <div className="w-full text-[24px] font-semibold text-center">
        Project <span className="text-lightRed">Categories</span>
      </div>
      <Categories />
      <ProjectGrief params={params} />
    </section>
  );
};

export default Grief;
