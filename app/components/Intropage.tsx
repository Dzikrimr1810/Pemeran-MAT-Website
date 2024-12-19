"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Intropage() {
    const path = usePathname()
    console.log(path)
  useEffect(() => {
    const element = document.getElementById("message");

    if (element) {
      // Tambahkan class hidden setelah 3 detik
      setTimeout(() => {
        element.classList.add("hidden"); // Tailwind class untuk menyembunyikan elemen
      }, 3500);
    } else {
      console.error("Element with id 'message' not found.");
    }
  }, []); // Empty dependency array to ensure it runs only once on mount

  return (
    <motion.div
      id="message"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0, // Menjadi tidak terlihat
        x: 0, // Bergerak ke posisi 0 (ke kanan)
      }}
      transition={{
        duration: 1, // Durasi transisi (dalam detik)
        ease: "easeOut", // Transisi halus
        delay: 2.5,
      }}
      className={`${path == "/" ? "flex" : "hidden"} z-50 fixed w-full h-full bg-gradient-to-t from-red-950 to-background`}
    >
      <div className="w-full md:flex-row flex-col h-full font-thin text-breakWhite flex justify-center items-center">
        <div className="mb-5 md:mb-0 md:mr-20 mr-0 text-center md:text-start">
          <span className="font-semibold md:text-xl">DKV UNS 2023</span>
          <br />
          Proudly Presents
        </div>
        <div>
          <Image
            className="w-[100px] md:w-[150px] object-cover"
            alt="logo MAT"
            width={500}
            height={500}
            src="/image/navbar/logo mat.png"
          />
        </div>
      </div>
    </motion.div>
  );
}
