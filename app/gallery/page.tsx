import Image from "next/image"
import { client, urlFor } from "../lib/sanity"
import { galleryType } from "../interface"

async function setData () {
    const query = `*[_type=="gallery"]{
        name,
        "image": image[].asset._ref
    }`

    const data = await client.fetch(query)
    return data
}
export const dynamic = 'force-dynamic';
export default async function Gallery () {
    const data : galleryType[] = await setData()

    return (
        <section className="pt-28 overflow-clip md:w-full w-screen md:px-20 text-breakWhite">
            <div>
            </div>
            <div>
                {data.map((items, index) => (
                    <div key={index} className="relative flex flex-col">
                        <div className="absolute top-5 w-full z-20">
                            <div className="w-full text-center text-[24px] font-bold text-breakWhite"><span className="text-lightRed">{items.name}</span> Recap</div>
                        </div>
                        <div className="relative w-full z-10">
                            <div className="absolute w-full h-2/5 bg-gradient-to-b from-background to-transparent"/>
                           <div className="grid grid-cols-4 grid-rows-2 bg-slate-600">
                            {items.image.map((imgUrl, imgIndex) => {
                                const url = urlFor(imgUrl).url()
                                return (
                                    <div key={imgIndex} className={`
                                    ${imgIndex == 0 && "col-span-1 object-center row-span-1'"}
                                    ${imgIndex == 1 && "col-span-2 object-center row-span-1'"}
                                    ${imgIndex == 2 && "col-span-1 object-center row-span-1'"}
                                    ${imgIndex == 3 && "col-span-1 object-center row-span-2'"}
                                    ${imgIndex == 4 && "col-span-1 object-center row-span-1'"}
                                    ${imgIndex == 5 && "col-span-2 object-center row-span-1'"}
                                   overflow-hidden`}>
                                    <Image 
                                        key={imgIndex}
                                        src={url} 
                                        alt={`Image for ${items.name}`} 
                                        width={400} 
                                        height={400} 
                                        className={`w-full h-full object-cover aspect-square`}
                                    />
                                    </div>
                                )
                            })}
                        </div>  
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>
    )
}
