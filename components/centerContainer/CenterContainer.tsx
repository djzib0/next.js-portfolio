'use client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import ZoomModal from '../zoomModal/ZoomModal'

const CenterContainer = () => {

  const [isModalOn, setIsModalOn] = useState(false);

  const toggleModalOn = () => {
    setIsModalOn(prevState => !prevState);
  }


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

        <div className='hotspot-computer debug' onClick={toggleModalOn}></div>
        <div className='hotspot-picture debug' onClick={sayHello}></div>
        <div className='hotspot-folders debug' onClick={sayHello}></div>
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
      {isModalOn && 
        <ZoomModal 
          handleClose={toggleModalOn} 
          modalTitle='My stack'
          imgUrl='img/screen_zoom.png'
          desc='You see a computer screen with a stack.'
        />
      }
    </>
  )
}

export default CenterContainer
