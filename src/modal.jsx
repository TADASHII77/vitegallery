import React from 'react';
import './modal.css';

const Modal = ({ image, closeModal }) => {
  if (!image) return null;

  return (
    <div className="modal-container"> 
      <div className="modal-overlay" onClick={closeModal}> 
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-image">
            <img src={image.src} alt={image.prompt} />
          </div>
          <div className="modal-details">
            <h2>{image.creator}</h2>
            <p>{image.prompt}</p>
          </div>
          <button className="modal-close" onClick={closeModal}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

