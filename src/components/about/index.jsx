"use client";
import React, { Children } from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment🪄
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Greetings, traveler! You’ve stumbled into the arcane realm of
            front-end sorcery, where I wield the mystical arts of code to
            conjure seamless user experiences. As a front-end developer, I
            harness the powers of React, JavaScript, Tailwind CSS, Next.js,
            TypeScript and Material UI to craft enchanting web applications that
            captivate and engage. With my spellbook of HTML, CSS, and
            JavaScript, I breathe life into static pages, making them dynamic
            and interactive. My React potions ensure smooth performance, while
            Tailwind incantations bring forth sleek and responsive designs. If
            you seek a digital wizard to weave elegant, high-performance
            interfaces, step into my domain—let’s create magic together!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent "}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            200+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <div className=""></div>

          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base"> years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/??username=KosarAkbarshah&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="kosarakbarshah"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-[400px]"
            src="https://github-readme-stats.vercel.app/api?username=KosarAkbarshah&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="kosarakbarshah"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,wasm,react,tailwind,redux,sass,bootstrap,docker,figma,git,github,linux,npm,php,postman,py,swift,threejs,vercel,vite,vscode,webpack,wordpress,yarn,pnpm,nextjs,mysql,jquery"
            alt="kosarakbarshah"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=KosarAkbarshah&theme=highcontrast&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=KosarAkbarshah&repo=Gemini-Clone&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="kosarakbarshah"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
