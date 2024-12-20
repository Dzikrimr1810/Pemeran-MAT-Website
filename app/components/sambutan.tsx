import Image from 'next/image'
import React from 'react'

const Sambutan = () => {
  return (
    <div className='text-white w-full md:px-20 px-10 md:my-20 my-32
    '>
        <div className='w-full text-center text-xl text-lightRed font-bold uppercase md:mb-5'><span className='text-breakWhite'>Sambutan</span> Ketua</div>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-start md:items-start'>
            <Image className='w-[600px] md:w-[700px] h-[470px] -translate-y-16 md:translate-y-0 object-bottom object-cover' alt='Ketua Pelaksana MAT' width={700} height={700} src="/image/hero/kades.png"/>
            <div className='flex flex-col md:w-1/3 md:pt-32'>
                <div className='font-light'>
                    <span className='font-bold'>HALO SEMUA, SAYA KADES!</span><br />
                    selaku Ketua Pelaksana
                </div>
                <div className='text-justify mt-5 leading-loose'>
                Selamat datang di Pameran Akhir Tahun DKV UNS, program tahunan mahasiswa DKV tahun ke-2 yang menampilkan karya kreatif dengan tema berbeda setiap tahun. Semoga pameran ini menjadi ruang apresiasi seni dan inspirasi bagi semua pengunjung. Selamat menikmati!
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Sambutan