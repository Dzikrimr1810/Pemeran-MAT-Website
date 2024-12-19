"use client"
import { BiSolidCategoryAlt } from "react-icons/bi";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const data = [
    {categoryName: 'Denial'},
    {categoryName: 'Anger'},
    {categoryName: 'Bargaining'},
    {categoryName: 'Depression'},
    {categoryName: 'Acceptance'}
]


const Categories = () => {

const pathName = usePathname()
console.log(pathName)
  return (     
    <div className='w-full'>
      <ScrollArea className="w-full hidden md:flex">
        <div className='flex justify-between scroll-none items-center md:gap-5 gap-2 my-7 h-fit'>
        {data.map((items,index) => (
          <div key={index} className='w-full h-fit bg-breakWhite rounded-lg'>
            <Link href={`/catalogue/${items.categoryName}`} className={`w-full h-fit flex px-[1px] py-[1px] duration-2000 justify-center items-center hover:bg-none ${pathName == `/catalogue/${items.categoryName}` && "bg-none"} hover:bg-breakWhite transition bg-gradient-to-b from-lightRed to-gray rounded-lg`}>
              <div className='w-full p-2 rounded-lg h-fit md:text-base text-sm flex justify-center bg-background hover:border-breakWhite'>
                {items.categoryName}
              </div>
            </Link>
          </div>
        ))}  
      </div>
      <ScrollBar className='opacity-0' orientation="horizontal" />
      </ScrollArea>
      <div className='flex md:hidden my-5'>
        <Popover>
        <PopoverTrigger className='w-full flex justify-end'>
          <div className='pl-4 py-2 items-center w-fit h-fit md:text-base text-sm flex border-gray justify-center border-b bg-background hover:border-gray'>
            Project Category <BiSolidCategoryAlt className="ml-2" />
          </div>
        </PopoverTrigger>
        <PopoverContent className='bg-background border border-gray'>
        <div className='flex justify-between text-breakWhite flex-col scroll-none items-center md:gap-5 gap-2 md:my-7 h-fit'>
        {data.map((items,index) => (
          <div key={index} className='w-full h-fit rounded-lg'>
            <Link href={`/catalogue/${items.categoryName}`} className={`w-full h-fit flex px-[1px] py-[1px] duration-2000 justify-center items-center hover:bg-none ${pathName == `/catalogue/${items.categoryName}` && "bg-none text-lightRed"} transition rounded-lg`}>
              <div className='w-full p-2 rounded-lg h-fit md:text-base text-sm flex justify-center bg-background hover:border-breakWhite'>
                {items.categoryName}
              </div>
            </Link>
          </div>
        ))}  
      </div>
        </PopoverContent>
      </Popover>
      </div>
      

    </div>
      
  )
}

export default Categories