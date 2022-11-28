import React from "react";
import "../../css/modal.css"
import {TbNumber1, TbNumber2, TbNumber3} from "react-icons/tb"
import { Link } from "react-router-dom";

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
                  <div className = "info-list" style = {{marginBottom:"25px"}}><span><TbNumber1></TbNumber1>. 장바구니 유무를 선택해주세요!</span><div className = "info-content"> <span style={{color:"blue"}}>"장바구니 있음"</span>의 경우,<Link to=".././page2"> <span style={{color:"#EA0F0F",backgroundColor: "#FBDF07"}}>시간표 프리셋 페이지</span></Link>에서 담은 정보로 연습이 가능합니다. 프리셋 페이지에서 꼭 과목을 담아주세요!!</div></div>
                  <div className = "info-list" style = {{marginBottom:"25px"}}><span><TbNumber2></TbNumber2>. 타이머를 설정해주세요!</span><div className = "info-content"> 설정한 타이머 시간내에 모든 과목을 신청해보세요! 타이머에 맞춰 수강 가능 정원이 줄어듭니다. <span style={{color:"blue"}}>신청 버튼 클릭, Enter 1번</span>으로 신청됩니다!</div></div>
                  <div className = "info-list" style = {{marginBottom:"25px"}}><span><TbNumber3></TbNumber3>. 게임시작 버튼 Click!</span><div className = "info-content">수강신청 <span style={{color:"blue"}}>알림음 종료 후</span>, 페이지가 전환됩니다. 실제 한성대학교 수강신청과 같은 환경을 경험해보세요!</div></div>
      </div>
    </div>
  );
}
 
export default Modal;
