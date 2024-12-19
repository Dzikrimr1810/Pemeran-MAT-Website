"use client"

import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero () {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const targetDate = new Date("2024-12-20T00:00:00").getTime(); // Tanggal target: 20 Desember 2024

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeDifference = targetDate - now;

            if (timeDifference > 0) {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown(`${days} : ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
            } else {
                const exhibitionStart = new Date("2024-12-20T00:00:00").getTime(); // Konversi ke timestamp
                const currentDate = new Date().getTime(); // Konversi ke timestamp
                const dayDifference = Math.floor((currentDate - exhibitionStart) / (1000 * 60 * 60 * 24)) + 1;
            
                if (dayDifference === 1) {
                    setCountdown("Day-1 Exhibition");
                } else if (dayDifference === 2) {
                    setCountdown("Day-2 Exhibition");
                } else if (dayDifference === 3) {
                    setCountdown("Day-3 Exhibition");
                } else {
                    setCountdown("Exhibition Ended");
                }
            }
        };

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
    }, []);

    return(
        <div className="w-full flex font-light flex-col md:justify-between md:flex-row max-w-screen md:h-screen px-10 pt-24 md:px-20">
            <motion.div 
            initial={{
                opacity: 0, // Awal transparan
                x: -50, // Awal dari kiri
              }}
              animate={{
                opacity: 1, // Menjadi terlihat
                x: 0, // Bergerak ke posisi 0 (ke kanan)
              }}
              transition={{
                duration: 1, // Durasi transisi (dalam detik)
                ease: "easeOut", 
                delay: 2.5// Transisi halus
              }}
            className="md:w-[400px] flex flex-col justify-between w-full">
                <div className="md:text-[74px] text-[48px] font-light leading-tight">A <span className="font-semibold">Journey</span> Through <span className="font-semibold text-lightRed">Loss</span> and <span className="font-semibold text-lightRed">Healing</span></div>
                <p className="text-justify md:pr-10 text-[16px] md:text-[12px] mt-44 md:mt-10 md:pt-0 md:pb-20">
                Grief is a personal journey through denial, anger, bargaining, sadness, and finally acceptance, where we find strength to carry memories and move forward with resilience. Through this exhibition, presented by the Visual Communication Design students of Universitas Sebelas Maret, class of 2023, we invite you to explore and reflect on this profound human experience.
                </p>
            </motion.div>
            <div className="md:w-[400px] w-full md:pt-0 justify-between flex flex-col md:items-end">
                <motion.div 
                initial={{
                    opacity: 0, // Awal transparan
                    x: -50,
                    y: 50 // Awal dari kiri
                  }}
                  animate={{
                    opacity: 1, // Menjadi terlihat
                    x: 0,
                    y: 0 // Bergerak ke posisi 0 (ke kanan)
                  }}
                  transition={{
                    duration: 1, // Durasi transisi (dalam detik)
                    ease: "easeOut",
                    delay: 2.5 // Transisi halus
                  }}
                className="flex w-full md:flex-col py-5  font-light">
                    <div>
                        <div className=" leading-tight md:text-end pt-5">December <br />
                        <span className="text-[36px] font-medium">20-22</span>th 2024
                    </div>
                    </div>
                    <div className="flex flex-col md:w-full w-2/3 justify-self-end items-end text-end md:items-end pt-2">
                        <div className="font-semibold">Kampus Mesen UNS</div>
                        <div className="text-[11px] md:text-end w-[240px]">Jl. Jend. Urip Sumoharjo No.112, Purwodiningratan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57129</div>
                    </div>
                </motion.div>
                <motion.div 
                initial={{
                    opacity: 0, // Awal transparan
                    x: -50,
                    y: -50 // Awal dari kiri
                  }}
                  animate={{
                    opacity: 1, // Menjadi terlihat
                    x: 0,
                    y: 0 // Bergerak ke posisi 0 (ke kanan)
                  }}
                  transition={{
                    duration: 1, // Durasi transisi (dalam detik)
                    ease: "easeOut",
                    delay: 2.5 // Transisi halus
                  }}
                className="md:pb-20 flex flex-col mt-20 md:mt-0 w-full md:w-[300px] md:justify-end md:items-end justify-center items-center">
                    <div className="md:text-end text-center md:text-[18px] text-[28px] mb-5">
                    Experience the journey through <span className="font-semibold">our exhibition!</span>
                    </div>
                    <div className="w-full py-2 md:py-0 flex md:flex-col md:items-end items-center md:justify-between justify-evenly">
                        <div className="px-8 md:py-2 md:my-3 text-[20px] w-fit flex justify-center items-center bg-white/30 rounded-lg text-breakWhite border-breakWhite border-[1px] font-light backdrop-blur-sm">
                            {countdown}
                        </div>
                        <Link href="/catalogue" className="px-5 md:px-0 flex group md:justify-between justify-center md:items-start items-center h-fit md:h-20 md:w-4/5 rounded-lg bg-breakWhite text-black">
                            <div className="md:px-5 md:pr-0 pr-2 md:py-2 py-1"><span className="font-semibold group-hover:text-lightRed duration-300 ease-in-out">Start</span> the Journey!</div>
                            <GoArrowRight className="text-[28px] md:text-[56px] md:self-end font-light flex items-center justify-center rotate-45 group-hover:rotate-0 group-hover:text-lightRed duration-300 ease-in-out"/>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
