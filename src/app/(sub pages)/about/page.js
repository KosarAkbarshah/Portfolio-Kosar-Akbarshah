import Image from "next/image";
import bg from "../../../../public/background/fantasy-mushroom-landscape.jpg";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";


const HatModel = dynamic(()=> import( "@/components/models/HatModel") , {ssr: false})
export default function Home() {
    return (
        <>

            <Image  priority sizes="100vw" src={bg} alt="background-image" className="w-full fixed h-screen top-0 left-0 object-cover object-center opacity-45" />



            <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">

                <RenderModel>
                    <HatModel />
                </RenderModel>
            </div>




            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center top-[65%] sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-[400] text-[50px] xs:text-[70px] lg:text-[80px] text-accent font-flavors tracking-wider">Kosar Akbarshah</h1>
                    <p className="font-light text-foreground text-xl font-fingerPaint tracking-wider">Meet the wizard behind this portfolio</p>
                </div>

            </div>


            <AboutDetails />
        </>
    );
}
