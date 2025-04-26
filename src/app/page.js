'use client';
import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import RenderModel from "@/components/RenderModel";
import MagicBookModel from "@/components/models/MagicBook";
import Navigation from "@/components/Navigation";
import { useMediaQuery } from "react-responsive";



export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">

      <Image priority sizes="100vw"
       src={bg} alt="background-image" fill className="w-full h-screen object-cover object-center opacity-30" />

      <div className="w-full  h-screen">
        {/* Navigation and 3D Models */}
        <Navigation />
        <RenderModel>
          
          <MagicBookModel  scale={isMobile ? .57 : 1} />
        </RenderModel>
      </div>
    </main>
  );
}
