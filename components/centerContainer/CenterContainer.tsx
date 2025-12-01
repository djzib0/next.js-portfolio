'use client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ComputerZoomModal from '../computerZoomModal/ComputerZoomModal'
import FrameZoomModal from '../frameZoomModal/FrameZoomModal'

const CenterContainer = () => {

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const sayHello = () => {
    console.log("hello")
  }

  // Preload and decode images to prevent first-hover flicker
  useEffect(() => {
    const images = [
      '/img/bg-desk.png',
      '/img/bg-desk-select-computer.png',
      '/img/bg-desk-select-picture.png',
      '/img/bg-desk-select-folders.png',
    ]

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      if (img.decode) img.decode().catch(() => {}) // force decode
    })
  }, [])

  return (
    <>
      <div className='background-image m-auto'>
        <Head>
          <link rel="preload" as="image" href="/img/bg-desk.png" />
          <link rel="preload" as="image" href="/img/bg-desk-select-computer.png" />
          <link rel="preload" as="image" href="/img/bg-desk-select-picture.png" />
          <link rel="preload" as="image" href="/img/bg-desk-select-folders.png" />
        </Head>

        <div className='hotspot-computer' onClick={() => setActiveModal("computer")}></div>
        <div className='hotspot-picture' onClick={() => setActiveModal("picture")}></div>
        <div className='hotspot-folders' onClick={sayHello}></div>
        <div className='hotspot-computer-desc'>
          <p className='text-start2P'>My stack</p>
        </div>
        <div className='hotspot-picture-desc'>
          <p className='text-start2P'>About me</p>
        </div>
        <div className='hotspot-folders-desc'>
          <p className='text-start2P'>Projects</p>
        </div>
      </div>
      {activeModal === 'computer' &&
        <ComputerZoomModal 
          handleClose={() => setActiveModal(null)} 
        />
      }
      {activeModal === 'picture' &&
        <FrameZoomModal 
          handleClose={() => setActiveModal(null)} 
        />
      }
    </>
  )
}

export default CenterContainer
