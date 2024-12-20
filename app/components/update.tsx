

import Image from 'next/image'
import React from 'react'
import { client, urlFor } from '../lib/sanity'
import { updatesType } from '../interface'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export const dynamic = 'force-dynamic';
async function getData() {
  const query = `*[_type=="update"]{
  title,
    _updatedAt,
    description,
    image
}`
  const data = await client.fetch(query)
  return data
}

const Updates = async () => {

  const data: updatesType[] = await getData()
  console.log(data)

  return (
    <div className="text-breakWhite w-full md:px-20 px-10 my-20">
      <div className='w-full text-center text-xl text-lightRed font-bold uppercase mb-16'><span className='text-breakWhite'>Event</span> Updates</div>
      <ScrollArea className="text-breakWhite w-full">
        <div className="flex md:w-max w-full md:gap-0 gap-2 md:space-x-4 md:p-4">
          {data.map((items, index) => (
            <figure key={index} className="shrink-0 p-3 md:p-5 bg-gray border md:w-auto w-[300px] border-breakWhite rounded-xl">
              <div className='rounded-lg overflow-hidden h-[500px]'>
                <Image className='w-full h-full object-cover' alt={items.title} width={500} height={500} src={urlFor(items.image[0]).url()} />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground mb-2">
                <div className="font-semibold text-lg md:text-xl pt-2">
                  {items.title}
                </div>
                <div className='text-white/50 text-sm'>
                  {items._updatedAt}
                </div>
              </figcaption>
              <AlertDialog>
                <AlertDialogTrigger className='text-lightRed font-semibold px-3 py-1 border border-lightRed w-full rounded-md hover:bg-lightRed hover:text-breakWhite transition-all duration-300'>See more</AlertDialogTrigger>
                <AlertDialogContent className='text-breakWhite md:h-fit h-3/4 justify-between flex flex-col'>
                  <AlertDialogHeader className='hidden'>
                    <AlertDialogTitle className="sr-only">Detail Dialog</AlertDialogTitle>
                  </AlertDialogHeader>
                  <div className='flex md:flex-row flex-col h-full'>
                    <div className='rounded-lg overflow-hidden hidden md:flex w-full h-full'>
                      <Image className='' alt={items.title} width={500} height={500} src={urlFor(items.image[0]).url()} />
                    </div>
                    <div className='w-full md:pl-5 h-full justify-between flex flex-col'>
                      <div className="font-semibold text-foreground text-xl pt-2">{items.title}</div>
                      <div className='h-full bgsla600 flex justify-center items-end text-sm text-justify'>
                        <ScrollArea className='h-[250px] align-bottom'>
                        <div>{items.description}</div>
                        </ScrollArea> 
                      </div>                                           
                    </div>
                  </div>
                  <AlertDialogFooter className='text-breakWhite mb-5 flex flex-col h-12 w-full justify-between md:pt-5 md:border-t md:border-lightRed'>
                    <div className='text-white/50 w-full text-sm h-full flex md:items-start items-end justify-start text-end md:text-start'>{items._updatedAt}</div>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

export default Updates
