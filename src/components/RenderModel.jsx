
"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { Environment } from '@react-three/drei'


const RenderModel = ({ children, className }) => {
    return (
        <Canvas

            className={clsx("w-screen h-screen z-[-2] relative ", className)}>
            {/* ////to loead model asynchronously */}
            <Suspense fallback={null}>
                {children}
            </Suspense>
            <Environment preset="dawn"></Environment>
        </Canvas>
    )
}

export default RenderModel
