import Image from "next/image";
import bg from "../../../../public/background/homenew.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";
// import Staff from "@/components/models/staff";

const Staff = dynamic(()=> import("@/components/models/staff") , {ssr: false})

export default function Home() {
    return (
        <>

            <Image  priority sizes="100vw" src={bg} alt="background-image" className="w-full fixed h-screen top-0 left-0 object-cover object-center opacity-45 -z-20" />

            {/* /////passing the projectsData to the ProjectList component */}
            <ProjectList projects={projectsData} />

            <div className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-20 h-screen lg:z-0 -z-10">
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}
