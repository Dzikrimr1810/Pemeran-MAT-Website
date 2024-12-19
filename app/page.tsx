import Image from "next/image";
import About from "./components/about";
import Hero from "./components/hero";
import Teaser from "./components/teaser";
import Sambutan from "./components/sambutan";
import Pengunjung from "./components/pengunjung";
import Updates from "./components/update";

export default function Home() {

  return (
  <section className="text-breakWhite w-full relative overflow-clip">
    <Image className="bg-gradient-to-l from-black to-transparent opacity-70 md:opacity-100 -z-50 absolute md:flex h-screen md:h-fit object-cover overflow-clip w-full" alt="hero Image Pameran absolute" width={1600} height={1400} src="/image/hero/FrameHero.png" />
    <Hero />
    <About />
    <Teaser />
    <Sambutan />
    <Pengunjung />
    <Updates />
  </section>
  );
}
