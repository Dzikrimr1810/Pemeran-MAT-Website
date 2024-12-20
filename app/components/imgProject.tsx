"use client"

import Image from "next/image"
import { urlFor } from "../lib/sanity";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
 
export const dynamic = 'force-dynamic';

interface imagesType {
    images: string[];
    nameProject: string;
}

export default function ImgProject ({images , nameProject} : imagesType) {

    const [bigImage, setBigImage] = useState(0)
    function handleImageClick(index : number) {
        const indexImage = index
        setBigImage(indexImage)
    }

    console.log(images[0])
    return (
        <div className="flex md:h-screen flex-col w-full" >
            <div className="aspect-square md:h-2/4 lg:h-2/3 object-cover overflow-hidden bg-red-950/40 border border-gray rounded-lg mb-3">
                <Image 
                    alt={nameProject}
                    width={700}
                    height={700}
                    src={urlFor(images[bigImage]).url()}
                    className="w-full h-full object-contain object-center"/>
            </div>
            <Carousel className="w-full md:h-[170px] h-[100px] flex items-center overflow-hidden">
                <CarouselContent className="w-full h-full flex justify-start gap-1 md:gap-3">
                        {images.map((items,index)=>(
                            <CarouselItem key={index} className="overflow-hidden basis-1/3 relative" onClick={()=>handleImageClick(index)}>                            
                            <div className={`w-full h-full absolute ${bigImage == index && "opacity-100 bg-gradient-to-t from-lightRed to-transparent"}`} />
                            <Image className="object-cover h-full" alt={nameProject} width={700} height={700} src={urlFor(items).url()}/>
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}