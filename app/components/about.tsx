"use client"

import Image from "next/image"

import { motion } from "framer-motion";

export default function About () {

    const katarsisData = [
        {Name:"Denial", Alt:"Denial Photo", Image:"/image/katarsis/katarsis-1.png", desc:"Tahap awal saat seseorang sulit menerima kenyataan kehilangan dan merasa hal itu tidak nyata."},
        {Name:"Anger", Alt:"Anger Photo", Image:"/image/katarsis/katarsis-2.png", desc:"Tahap munculnya kemarahan, sering kali ditujukan kepada diri sendiri, orang lain, atau situasi yang tak terkendali."},
        {Name:"Bargaining", Alt:"Bargaining Photo", Image:"/image/katarsis/katarsis-3.png", desc:"Tahap ketika seseorang mencoba bernegosiasi untuk menghindari rasa sakit kehilangan."},
        {Name:"Depression", Alt:"Depression Photo", Image:"/image/katarsis/katarsis-4.png", desc:"Tahap menyadari kenyataan kehilangan yang diikuti rasa sedih mendalam dan putus asa."},
        {Name:"Acceptance", Alt:"Acceptance Photo", Image:"/image/katarsis/katarsis-5.png", desc:"Tahap menerima kenyataan kehilangan, berdamai, dan melanjutkan hidup."},
    ];

    return(
        <div className="text-white font-light">
            <motion.div 
            className="flex md:flex-row mt-28 flex-col md:px-20 px-10 justify-between">                
                    {katarsisData.map((items,index)=>(
                        <motion.div 
                        initial={{
                            opacity: 0, // Awal transparan
                            x: -50,
                            y: -30 // Awal dari kiri
                          }}
                          animate={{
                            opacity: 1, // Menjadi terlihat
                            x: 0,
                            y:0 // Bergerak ke posisi 0 (ke kanan)
                          }}
                          transition={{
                            duration: 1, // Durasi transisi (dalam detik)
                            ease: "easeOut", // Transisi halus
                            delay: index * 0.1, // Delay berdasarkan index (100ms per index)
                          }}
                        key={index} className="flex flex-col w-full group md:w-[250px] duration-300 ease-in-out">
                            <div className="md:h-[280px] w-full flex flex-col justify-end items-center rounded-lg overflow-hidden">
                                <div className="md:h-[230px] h-[200px] border-breakWhite hover:border-lightRed hover:border-[2px] border-[1px] md:hover:h-full w-full self-end duration-300 ease-in-out relative overflow-hidden rounded-lg">
                                    <div className="absolute w-full h-full hidden md:flex justify-center items-center uppercase font-semibold bg-slate-800/30 hover:opacity-0 backdrop-blur-md rounded-lg duration-300 ease-in-out">{items.Name}</div>
                                    <Image 
                                    alt={items.Alt} 
                                    width={400} 
                                    height={400} 
                                    src={items.Image}
                                    className="rounded-lg h-full w-full object-cover object-center"/>
                                </div>
                            </div>
                            <div className="h-[80px] md:opacity-0 mb-5 md:mb-4 group-hover:opacity-100 md:-translate-y-6 group-hover:translate-y-0 duration-300 ease-in-out">
                                <div className="duration-300 ease-in-out delay-1000 w-full md:hidden md:group-hover:flex justify-center flex font-semibold text-lightRed py-1">{items.Name}</div>
                                <div className="duration-300 ease-in-out delay-1000 md:hidden group-hover:flex md:text-justify text-[12px] w-full text-center">{items.desc}</div>
                            </div>
                        </motion.div>
                    ))}                                    
            </motion.div>
            <div className=" bg-breakWhite text-black font-light w-full flex flex-col px-10 md:px-20 py-20">
                <div className="flex md:flex-row flex-col w-full justify-center items-center">
                    <div className="font-semibold text-2xl md:w-1/2 md:text-start text-center pb-5"><span className="text-lightRed font-bold">KATARSIS</span> <br />FROM US TO THE WORLD
                    </div>
                    <div className="md:w-1/2 md:text-start text-center">
                    Tema ini membahas tentang mental struggle yang seringkali dihadapi oleh generasi muda, dalam menghadapi situasi dunia sekarang ini.
                    </div>
                </div>
                <div className="flex w-full pt-20 md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 text-2xl md:text-start text-center pb-5">APA ITU <span className="text-lightRed font-bold"> MIMPI AKHIR TAHUN?</span></div>
                    <div className="md:w-1/2 md:text-start text-center">Mimpi akhir tahun, sesuai namanya pameran akhir tahun adalah pameran yang dilaksanakan di tiap akhir tahun. Pameran ini salah satu program tiap tahun yang diselenggarakan oleh mahasiswa DKV tahun ke 2. Pameran ini selalau membawa tema yang berbeda beda tiap tahunnya</div>
                </div>
            </div>
        </div>
    )
}