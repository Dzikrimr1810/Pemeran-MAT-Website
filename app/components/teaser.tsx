import Image from "next/image";
import Link from "next/link";

export default function Teaser () {
    return(
        <div className="w-full bg-gradient-to-r from-darkRed via-transparent to-darkRed relative h-[250px] md:h-[320px] overflow-hidden flex justify-center items-center">            
            <div className="z-40">
                <Link href="https://www.instagram.com/reel/DCoy6YkygiW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                    <Image 
                    alt="teaser mat"
                    src="/image/hero/Rectangle 18.svg"
                    width={700}
                    height={700}
                    className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-blend-overlay hover:opacity-80 duration-300 opacity-50"/> 
                </Link>
            </div>
            <Image 
            alt="teaser mat"
            src="/image/hero/handHome.png"
            width={700}
            height={700}
            className=" w-full absolute z-30 h-full object-cover flex justify-center items-center"/> 
        </div>
    )
}