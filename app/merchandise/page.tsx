import Image from "next/image"
const merchandiseData= [
        {name: "Baju Sablon", harga: 80000, details:"", notes: "", image: "/image/merchandise/Bajusablon-mat.png"},
        {name: "Gantungan Kunci", harga: 15000, details:"size: 6x6 CM", notes:"ini bukan ganci shaker yaa, bentuknya akrilik gepeng biasa tp dr gambarnya tampak 3D", image: "/image/merchandise/Gantungan-kunci-mat.png"},
        {name: "Kalender Poster", harga: 15000, details:"size: A3, bahan: art carton", notes: "", image: "/image/merchandise/Kalenderposter-mat.png"},
        {name: "Pin Button", harga: 5000, details:"size: 4,4 CM, texture: glossy", notes: "", image: "/image/merchandise/Pinbutton-mat.png"},
        {name: "Post Card", harga: 7000, details:"size: A6, bahan: art carton 310 gsm, texture: doff", notes: "", image: "/image/merchandise/Postcard-mat.png"},
        {name: "Sticker Pack", harga: 12000, details:"size: A6, bahan: vinyl, texture: holo broken glass", notes: "", image: "/image/merchandise/Sticker-pack-mat.png"},
        {name: "Tote Bag", harga: 39000, details:"bahan: canvas, size: 30x40 CM", notes: "", image: "/image/merchandise/Totebag-mat.png"},
    ];

export default function Merchandise (){

console.log({merchandiseData})
    return (
        <section className="md:px-36 px-10 pt-28 overflow-clip md:w-full w-screen">
            <div>
                <div className="w-full text-center justify-center items-center font-bold text-[24px] text-breakWhite">
                    Our <span className="text-lightRed"> Merchandise</span>
                </div>
                <div className="grid md:grid-cols-3 gap-5 grid-cols-2 mb-5">
                    {merchandiseData.map((items) => (
                        <div key={items.name} className={`${items.name=="Baju Sablon" && "col-start-1"} overflow-hidden md:p-[20px] p-2 border-breakWhite rounded-lg border-[1px]`}>
                            <div className="relative flex justify-center h-4/5 items-end">
                                <div className="absolute w-full h-1/3 bg-gradient-to-t from-background to-transparent"/>
                                <Image className="bg-[#E7EEEE] h-full w-auto object-cover" alt={items.name} width={500} height={500} src={items.image} />
                            </div>
                            <div className="-translate-y-8 md:translate-y-0 font-light text-breakWhite flex flex-col justify-center items-center">
                                <div className="font-bold text-[18px] md:text-[24px] text-center">{items.name}</div>
                                <div className="text-center text-[12px] text-gray-500">{items.details}</div>
                                <div className="text-lightRed">Rp<span className="text-lightRed text-[18px] md:text-[24px] font-bold">{items.harga}</span>,00</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}