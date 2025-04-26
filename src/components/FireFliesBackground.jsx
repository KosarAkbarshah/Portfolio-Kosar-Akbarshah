"use client"
import React, { useEffect, useState } from 'react'


// function that randimly created fireflies
const createFireFlies = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    ////the flies will animate between 5 and 10 seconds
    animationDuration: `${Math.random() * 5 + 5}s`,
})
// function that randimly created fireflies


const FireFliesBackground = () => {

    const [fireflies, setFireflies] = useState([])


    useEffect(() => {

        const addFireflyPeriodically = () => {

            ///creating firefly function 
            const newFirefly = createFireFlies();
            setFireflies(currentFireflies =>
                [
                    ...currentFireflies.slice(-20),
                    newFirefly
                ]
            );
        };
        ///adding interval to keep running the fireflu fuinction
        const interval = setInterval(addFireflyPeriodically, 1000);
        return () => clearInterval(interval)
    }, [])


    return (
        <div className='fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden'>
            {fireflies.map((firefly) => {
                return (
                    <div key={firefly.id} className='absolute rounded-full  w-[15px] h-[15px] bg-firefly-radial' style={{
                        top: firefly.top,
                        left: firefly.left,
                        ///aniamtion is inside global.css bc it is not tailwind to go to tailwind.config
                        animation: `move ${firefly.animationDuration} infinite alternate`
                    }}></div>
                );
            })}

        </div>
    );
};

export default FireFliesBackground

