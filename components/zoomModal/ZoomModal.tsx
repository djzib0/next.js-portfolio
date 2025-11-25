import React from 'react';

const ZoomModal = (
  {
    handleClose,
    modalTitle,
    imgUrl,
    desc
  } 
  : {
    handleClose?: () => void;
    modalTitle: string;
    imgUrl: string;
    desc: string;
  }
) => {
  return (
    <div className="scumm-modal-backdrop">
      <div className="scumm-modal">
        <h2 className="scumm-modal-title">{modalTitle}</h2>
        <p className="scumm-modal-text">{desc}</p>
        <div className='scumm-modal-content-container'>
          
        </div>
        <button className="scumm-modal-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  )
}

export default ZoomModal