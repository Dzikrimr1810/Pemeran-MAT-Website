import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

import Image from 'next/image';
import { navBar } from '../data';
import Link from 'next/link';


export default function Footer () {

const sosialMedia =[
    {name: "Instagram", icon:FaInstagram, link: "https://www.instagram.com/mat.dekave"},
    {name: "X", icon:FaXTwitter, link: "https://www.instagram.com/mat.dekave"},
    {name: "Tiktok", icon:FaTiktok, link: "https://www.instagram.com/mat.dekave"},
    
]

    return (
        <div className='px-10 self-end py-5 w-full bg-breakWhite gap-10 justify-between flex md:flex-row flex-col'>
            <div className=' '>
                <Image src="/image/navbar/logo-mat2.png" width={150} height={150} alt='Logo MAT' 
                className='w'/>
            </div>
            <div className='w-[400px] flex justify-between flex-col h-full gap-5'>
                <div className='gap-4'>
                    <div className='font-bold text-[20px]'>
                        Section
                    </div>
                    <div className=' grid grid-cols-2'>
                    {navBar.map((item,index)=>
                        (
                            <Link className='hover:font-medium hover:text-lightRed pr-7' key={index} href={item.href}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex items-centerr gap-5'>
                    {sosialMedia.map((item,index) =>(
                        <Link key={index} href={item.link} className='hover:text-lightRed hover:bg-breakWhite hover:border-lightRed hover:border-[1px] flex justify-center items-center rounded-full text-breakWhite w-[32px] ease-in-out duration-300 h-[32px] bg-lightRed'><item.icon/></Link>
                    ))}
                </div>
            </div>
            <div className='md:w-[500px]'>
                <div className='text-[28px] font-light text-lightRed'>
                    {`"Growth begins when we <span className='font-bold'>embrace loss and find strength</span> in healing."`}
                </div>
                <p className='font-bold pt-5 text-sm'>
                Copyright © 2024 Dzikri Muhammad Ramadhan. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}