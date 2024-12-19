import React from 'react'
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';

// Fungsi untuk mengambil data dari server
async function fetchGriefData(grief: string) {
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
  return data;
}

// Komponen Grief
const Grief = ({ params, data }: { params: { grief: string }; data: any[] }) => {
  return (
    <section className='text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col'>
      <div className='w-full text-[24px] font-semibold text-center'>
        Project <span className='text-lightRed'>Categories</span>
      </div>
      <Categories />
      <ProjectGrief params={params} data={data} />
    </section>
  );
};

// Mengambil data dari server dan meneruskan ke komponen
export async function getServerSideProps({ params }: { params: { grief: string } }) {
  const data = await fetchGriefData(params.grief);

  return {
    props: {
      params,
      data,
    },
  };
}

export default Grief;
