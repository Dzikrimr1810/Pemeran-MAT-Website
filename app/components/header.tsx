'use client'

import Image from "next/image"
import Link from "next/link.js"
import { useState } from "react"
import { navBar } from '../data';

export const navKiri = navBar.slice(0,2)
export const navKanan = navBar.slice(2,4)

export default function Header () {

    const [androindNavbar, setAndroindnavbar] = useState(false)

    const toggleNavbar = () => {
        setAndroindnavbar(!androindNavbar)
    }

    return (
     <div className="text-white md:w-full w-screen z-40 fixed bg-black/50 backdrop-blur-md border-b-[1px] border-[#FF3300] flex items-center justify-center">
        <div className="flex justify-between w-full p-5 md:hidden">
        <Link href={'/'}><Image alt="Logo-Mat" src={"/image/navbar/logo mat.png"} width={80} height={80} className="flex md:hidden"/></Link>
        <button type="button" className={`${androindNavbar && "hidden"} md:hidden flex flex-col align-middle justify-center gap-2`} onClick={toggleNavbar}>
            <div className="w-[28px] h-[2px] bg-white"></div>
            <div className="w-[28px] h-[2px] bg-white"></div>
        </button>
        </div>
        {/* navbar android */}
        <div className={`md:hidden flex-col h-screen justify-start items-end right-0 bg-gradient-to-l from-black to-transparent duration-2000 flex absolute font-light ${androindNavbar? 'opacity-100 delay-100 ease-in-out translate-x-0 top-0 block w-[300px]' : 'hidden opacity-20 w-0'}`}>
        <button type="button" className={`md:hidden p-5 flex flex-col mb-7 relative align-middle justify-center mr-3 gap-2`} onClick={toggleNavbar}>
            <div className={`${androindNavbar ? " rotate-45 w-[28px] absolute right-5 flex top-8  align-middle justify-center" : "duration-1000 ease-in-out rotate-0 "}  w-[28px] h-[2px] bg-lightRed`}></div>
            <div className={`${androindNavbar ? " -rotate-45 w-[28px] absolute right-5 flex top-8 align-middle justify-center" : "duration-1000 ease-in-out rotate-0 "} w-[28px] h-[2px] bg-lightRed`}></div>
        </button>
        {navKiri.map((item,index)=>(
            <Link href={item.href} key={index} className="hover:text-lightRed mr-3 hover:font-medium hover:mr-4 ease-in-out duration-100 p-5"> {item.name}</Link>
        ))}
        <Link className="md:flex hidden p-5" href={'/'}>
        <Image alt="Logo-Mat" src={"/image/navbar/logo mat.png"} width={100} height={100} className="md:flex hidden"/>
        </Link>
        <Image alt="Logo-Mat" src={"/image/navbar/logo mat.png"} width={100} height={100} className="md:flex hidden p-5"/>
        {navKanan.map((item,index)=>(
            <Link href={item.href} key={index} className="hover:text-lightRed mr-3 hover:font-medium hover:mr-4 ease-in-out duration-100 p-5"> {item.name}</Link>
        ))}
        </div>

        {/* navbar pc*/}
        <div className={`hidden items-center w-full md:flex justify-center font-light h-[80px] p-10 `}>
        {navKiri.map((item,index)=>(
            <Link href={item.href} key={index} className="hover:font-medium hover:text-lightRed duration-500 ease-in-out p-5"> {item.name}</Link>
        ))}
        <Link href={"/"}><Image alt="Logo-Mat" src={"/image/navbar/logo mat.png"} width={100} height={100} className="w-[115px] object-fill md:flex hidden p-5"/></Link>
        
        {navKanan.map((item,index)=>(
        <Link href={item.href} key={index} className="hover:font-medium hover:text-lightRed duration-500 ease-in-out p-5"> {item.name}</Link>
        ))}
        </div>
     </div>
    )
};