import React, { useState } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Image from 'next/image';



const stackData = {
  js: {
    icon: "here will be JS icon",
    text: "This is Javascript text.",
  },
  react: {
    icon: "here will be React icon",
    text: "This is React text.",
  }
}

const FrameZoomModal = (
  {
    handleClose,
  } 
  : {
    handleClose?: () => void;
  }
) => {

  return (
    <div className="scumm-modal-backdrop">
      <div className="scumm-modal">
        <h2 className="scumm-modal-title">About me</h2>
        <p className="scumm-modal-text">
          You look at the picture frame.
        </p>
        <p className="scumm-modal-text">
          Bald, bearded guy on the picture looks friendly and professional.
        </p>

        <div className='scumm-modal-content-container'>
          <div className='scumm-modal-content-container__left picture-bg'>
            
          </div>
          <div className='scumm-modal-content-container__right'>

          </div>
        </div>
        <button className="scumm-modal-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default FrameZoomModal