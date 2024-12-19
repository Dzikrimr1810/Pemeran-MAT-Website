"use client"

import React, { useState, useEffect } from 'react';
import Categories from '@/app/components/categories';
import ProjectGrief from '@/app/components/projectGrief';
import { simplifiedCatalogue } from '@/app/interface';
import getDataGrief from './datagrief';
import { useParams } from 'next/navigation'; // Import useParams

const Grief = () => {
  const { grief } = useParams(); // Mengambil parameter grief dari URL
  const [data, setData] = useState<simplifiedCatalogue[]>([]); // State untuk menyimpan data

  useEffect(() => {
    if (grief) {
      const griefParam = Array.isArray(grief) ? grief[0] : grief; // Pastikan grief adalah string
      const fetchData = async () => {
        const fetchedData = await getDataGrief(griefParam); // Ambil data berdasarkan grief
        setData(fetchedData); // Simpan data ke state
      };
      fetchData();
    }
  }, [grief]); // Efek ketika parameter grief berubah

  return (
    <section className='text-breakWhite pt-28 mb-20 px-10 md:px-24 flex flex-col'>
      <div className='w-full text-[24px] font-semibold text-center'>
        Project <span className='text-lightRed'>Categories</span>
      </div>
      <Categories />
      <ProjectGrief data={data} /> {/* Mengirimkan data ke ProjectGrief */}
    </section>
  );
};

export default Grief;
