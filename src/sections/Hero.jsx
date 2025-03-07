/* eslint-disable no-unused-vars */
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'

function Hero() {
  const x = useControls("HackerRoom", {
    positionX:{
      value:2.5,
      min:-10,
      max:10
    },
    positionY:{
      value:2.5,
      min:-10,
      max:10
    },
    positionZ:{
      value:2.5,
      min:-10,
      max:10
    },
    rotationX:{
      value:0,
      min:-10,
      max:10
    },
    rotationY:{
      value:0,
      min:-10,
      max:10
    },
    rotationZ:{
      value:0,
      min:-10,
      max:10
    },
    scale:{
      value:1,
      min:0.1,
      max:10
    }
  })
  const isSmall = useMediaQuery({maxWidth:480})
  const isMobile = useMediaQuery({maxWidth:768})
  const isTalet = useMediaQuery({minWidth:768, maxWidth:1024})

  const sizes = calculateSizes(isSmall,isMobile,isTalet)
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
            <HackerRoom
             rotation={[0.2,-3.2,0]}
             position={[-0.5,-9.8,1.9]}
             scale={isMobile?0.09:0.1}
           
             />
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
          </Suspense> 
          </Canvas>
        </div>
    </section>
  )
}

export default Hero