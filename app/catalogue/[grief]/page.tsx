import React from 'react';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';
import { simplifiedCatalogue } from '@/app/interface';
import getDataGrief from './datagrief';

export const dynamic = 'force-dynamic';

// Definisikan tipe untuk props
interface GriefProps {
  params: Promise<{
    grief: string;
  }>;
}

const Grief = async ({ params }: GriefProps) => {
  // Resolve params jika itu adalah Promise
  const resolvedParams = await params;

  // Gunakan resolvedParams.grief
  const data: simplifiedCatalogue[] = await getDataGrief(resolvedParams.grief);

  console.log(resolvedParams, 'params resolved');

  return (
    <section className="text-breakWhite overflow-clip md:w-full w-screen mb-20 md:px-20 px-5 pt-24 md:pt-28 flex flex-col">
      <div className="w-full text-[24px] font-semibold text-center">
        Project <span className="text-lightRed">Catalogue</span>
      </div>
      <Categories />
      <ProjectGrief data={data} />
    </section>
  );
};

export default Grief;
