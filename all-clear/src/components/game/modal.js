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
                <p id="game-slogan">누구보다 빠르게 <span style={{color:"#FBDF07"}}>"All-Clear" </span></p>
                <div id="modal-division"></div>
                <div id="game-info-contents">
                <div class="game-info-btn">1</div>
                <div class="game-info-btn">2</div>
                <div class="game-info-btn">3</div>
                </div>
        {/* {props.children} */}
       
      </div>
    </div>
  );
}
 
export default Modal;
