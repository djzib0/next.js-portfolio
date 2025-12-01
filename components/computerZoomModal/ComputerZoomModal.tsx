import React, { useState } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";



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

const ComputerZoomModal = (
  {
    handleClose,
  } 
  : {
    handleClose?: () => void;
  }
) => {


  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  const selectStackData = (stackName: string) => {
    setSelectedStack(stackName);
  }



  return (
    <div className="scumm-modal-backdrop">
      <div className="scumm-modal">
        <h2 className="scumm-modal-title">My stack</h2>
        <p className="scumm-modal-text">
          You see a computer screen with a stack.
        </p>
        <p className="scumm-modal-text">
          {`(Click icon on the screen to see details)`}
        </p>
        <div className='scumm-modal-content-container'>
          <div className='scumm-modal-content-container__left'>
            <IoLogoJavascript 
              onClick={() => selectStackData("js")}
              className={`${selectedStack === "js" && 'stack-icon__selected'} stack-icon `}
            />
            <FaReact 
            onClick={() => selectStackData("react")}
            className={`${selectedStack === "react" && 'stack-icon__selected'} stack-icon`}
            />
          </div>
          <div className='scumm-modal-content-container__right'>
            {selectedStack === "js" && stackData.js.text}
            {selectedStack === "react" && stackData.react.text}
          </div>
        </div>
        <button className="scumm-modal-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default ComputerZoomModal