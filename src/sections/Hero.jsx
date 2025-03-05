/* eslint-disable no-unused-vars */
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'

function Hero() {
  const x = useControls("HackerRoom", {
    rotationX:{
      value:2.5,
      min:-10,
      max:10
    },
    rotationY:{
      value:2.5,
      min:-10,
      max:10
    },
    rotationZ:{
      value:2.5,
      min:-10,
      max:10
    },
  })
  return (
    <section className='min-h-screen w-full flex flex-col relative'>

        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>

        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans '>Hi, I am Hamid <span className='waving-hand'>👋</span> </p>
        <p className='hero_tag text-white-800' >Building Products & Brands</p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            <Leva/>
          <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <HackerRoom scale={[x.rotationX,x.rotationY,x.rotationZ]} position={[0,0,0]} rotation={[0,-Math.PI/2 , 0]}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense> 
          </Canvas>
        </div>
    </section>
  )
}

export default Hero