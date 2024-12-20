"use client"
import React from 'react';
import { testimonydata } from '../data';
import Image from 'next/image';
import { motion } from "framer-motion";

const testy1 = testimonydata.slice(0, 12);
const testy2 = testimonydata.slice(4, 12);
const testy3 = testimonydata.slice(6, 15);


const Pengunjung = () => {

  return (
    <div className="text-white w-full mt-10 md:px-44 px-10 my-20 text-[14px] font-extralight">
      <div className="w-full text-center pb-10 text-xl text-lightRed font-bold uppercase md:mb-5">
        <span className="text-breakWhite">Apa kata</span> Mereka?
      </div>        
      <div className="w-full h-screen overflow-hidden relative">
        <div className="absolute z-10 w-full h-full bg-gradient-to-t from-background via-transparent to-background" />
        <div className="grid md:grid-cols-3 grid-cols-2">
          {/* Animasi untuk testy1 */}
          <motion.div 
            className="md:flex hidden flex-col gap-4 px-1.5" 
            animate={{ translateY: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 40, // Kecepatan animasi sangat pelan
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {testy1.map((items, index) => (
              <div key={index} className="px-4 md:py-2 bg-[#463F3F] border-lightRed border-[1px] rounded-lg">
                <div className="py-2 w-full md:text-sm text-[10px] leading-snug">{items.testimony}</div>
                <div className="w-full flex justify-start py-2 border-t-[1px] border-slate-500 gap-2 items-center">
                  <Image className="md:w-8 md:h-8 h-6 w-6 rounded-full object-cover" alt="Testimonial MAT" width={200} height={200} src={items.image} />
                  <div className='md:text-sm text-[12px]'>{items.name}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Animasi untuk testy2 */}
          <motion.div 
            className="flex flex-col gap-4 px-1.5"
            animate={{ translateY: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 30, // Kecepatan animasi sangat pelan
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {testy2.map((items, index) => (
              <div key={index} className="px-4 md:py-2 bg-[#463F3F] border-lightRed border-[1px] rounded-lg">
                <div className="py-2 w-full md:text-sm text-[12px] leading-snug">{items.testimony}</div>
                <div className="w-full flex justify-start py-2 border-t-[1px] border-slate-500 gap-2 items-center">
                  <Image className="md:w-8 md:h-8 h-6 w-6 rounded-full object-cover" alt="Testimonial MAT" width={200} height={200} src={items.image} />
                  <div className='md:text-sm text-[12px]'>{items.name}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Animasi untuk testy3 */}
          <motion.div 
            className="md:flex flex-col gap-4 px-1.5"
            animate={{ translateY: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: 25, // Kecepatan animasi sangat pelan
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {testy3.map((items, index) => (
              <div key={index} className="px-4 md:mt-0 mt-4 md:py-2 bg-[#463F3F] border-lightRed border-[1px] rounded-lg">
                <div className="py-2 w-full md:text-sm text-[12px] leading-relaxed">{items.testimony}</div>
                <div className="w-full flex justify-start py-2 border-t-[1px] border-slate-500 gap-2 items-center">
                  <Image className="md:w-8 md:h-8 h-6 w-6 rounded-full object-cover" alt="Testimonial MAT" width={200} height={200} src={items.image} />
                  <div className='md:text-sm text-[12px]'>{items.name}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pengunjung;
