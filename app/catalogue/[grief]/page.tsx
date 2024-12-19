import React from 'react';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';

// Menambahkan fungsi generateStaticParams
export async function generateStaticParams() {
  // Daftar kategori grief yang bisa diakses oleh rute dinamis
  const griefCategories = ['Denial', 'Anger', 'Bargaining', 'Depression', 'Acceptance'];

  return griefCategories.map(grief => ({
    grief, // params yang akan diproses oleh halaman ini
  }));
}

// Komponen Grief dengan async di dalamnya
const Grief = async ({ params }: { params: { grief: string } }) => {
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
