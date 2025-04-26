"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion, stagger } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  ///dynamiclly calculating angles by deviding circle
  const angleIncrement = 360 / BtnList.length;

  ////for responsive
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center ">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              // framer motion animation
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                ///coverting angle in to radiant by multiplying index value, diffrent vlues for diffrent btns
                const anglerad = (index * angleIncrement * Math.PI) / 180;
                ////calculation of radius based on screen size
                // const radius = 'calc(20vw - 1rem)';
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                ///calcultion of x and y
                const x = `calc(${radius}*${Math.cos(anglerad)})`;
                const y = `calc(${radius}*${Math.sin(anglerad)})`;
                // console.log(index, anglerad, radius, x, y);

                ///using index as a key
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;

                // <button key={index} className='absolute' style={{

                //     transform: `translate(${x},${y})`

                // }}>{btn.label}</button>
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                // framer motion animation
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start xs:items-center space-y-4 justify-center relative  group"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  ///coverting angle in to radiant by multiplying index value, diffrent vlues for diffrent btns

                  ///using index as a key
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;

                  // <button key={index} className='absolute' style={{

                  //     transform: `translate(${x},${y})`

                  // }}>{btn.label}</button>
                })}
              </motion.div>

              <motion.div
                // framer motion animation
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center space-y-4 justify-center relative  group"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    ///using index as a key
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );

                    // <button key={index} className='absolute' style={{

                    //     transform: `translate(${x},${y})`

                    // }}>{btn.label}</button>
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
