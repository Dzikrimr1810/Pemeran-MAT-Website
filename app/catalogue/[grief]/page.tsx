import React from 'react';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';
import { simplifiedCatalogue } from '@/app/interface';
import getDataGrief from './datagrief';

// Force dynamic rendering in Next.js
export const dynamic = "force-dynamic";

// Correcting the type for params (no Promise wrapping)
interface GriefProps {
  params: {
    grief: string; // No async handling required here
  };
}

const Grief = async ({ params }: GriefProps) => {
  // No need to await 'params.grief' as it is not a Promise
  const data: simplifiedCatalogue[] = await getDataGrief(params.grief);

  console.log(params, "itu");

  return (
    <section className="text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col">
      <div className="w-full text-[24px] font-semibold text-center">
        Project <span className="text-lightRed">Categories</span>
      </div>
      <Categories />
      <ProjectGrief data={data} />
    </section>
  );
};

export default Grief;
