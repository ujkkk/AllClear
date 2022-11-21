import React from "react";
import "../../css/modal.css"

function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>       
                <span id="game-info-title">게임 설명</span>
                <button id="modalCloseBtn" onClick={closeModal}>
                ✖
                </button>  
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;
