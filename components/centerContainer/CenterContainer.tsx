'use client'
import React from 'react'

const CenterContainer = () => {


  const sayHello = () => {
    console.log("hello")
  }

  return (
    <div className='background-image m-auto'>
      {/* <div className="hotspot-computer debug"></div> */}
      <div className="hotspot-computer debug" onClick={sayHello}></div>
      <div className="hotspot-picture debug" onClick={sayHello}></div>
    </div>
  )
}

export default CenterContainer