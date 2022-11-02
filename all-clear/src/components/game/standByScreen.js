import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/standBy.css";
import Button from 'react-bootstrap/Button';
import tag from '../../static/tag.png'
import commentImg from '../../static/commentImg.png'


const StanByScreen = ({ title }) => {
    const navigate = useNavigate()
    const randomTimeData = [2000, 3000, 5000] // 화면 버퍼링 시간ms data (2초,3초,5초)
    const setRandomTime = (index) => { // 확률조작 (30%,40%,30%)
        if (index < 30) { return index = 0; }
        else if (index < 70) { return index = 1; }
        else { return index = 2; }
    }
    return (
        <div className="standBy-wrap">
            <img src={tag}></img>

            <p style={{fontSize:"18px",fontWeight:400}}><strong style= {{fontWeight:"",fontSize:"22px"}}>수강신청</strong>‑ (※공지: 수강신청은 <span style= {{ color: "red",fontSize:"18px",fontWeight:400}}>크롬브라우저</span>에 최적화되어 있습니다. IE의 캐시기능 때문에 종종 오류가 발생하고 있습니다.)</p>
            <div id="div-comment" class="col-12 col-md-6 divBb border border-secondary text-left">
                <Button id="start-btn" onClick={() => {
                    let index = Math.floor(Math.random() * 100) // 1~100
                    index = setRandomTime(index); // 확률에 따라 수정
                    setTimeout(function () {
                        navigate("/page3")
                    }, randomTimeData[index])
                }}>수강신청 Go ~~</Button>
                <img style={{ float: "right", width: "210px", height: "98px", margin: 0 }} src={commentImg}></img>
            </div>

            <div class="precaution-div">
            <div class = "col-12">
                <div class="alert alert-danger" role="alert">
                     <b>수강신청 시간은 11시 ~ 19시까지 입니다. <span style={{color:"#666666"}}>홈페이지 학사공지</span>를 참고하세요.</b>
                </div>
            </div>

            <div class = "col-12">
                <div class="alert alert-warning" role="alert" style = {{color:"#07A08A"}}>
                    <b>트랙제 수강신청 안내영상 바로가기 : <span style={{color:"#666666"}}>CLICK!!!</span></b>

                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                  <b>수강신청 초기 화면은 장바구니입니다. 수강신청하는데 참고하시기 바랍니다!</b>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">

                    <div class="card-header text-white bg-danger"><b>수강신청을 위한 웹브라우저 설정(필수)</b></div>
                    <div class = "card-body unnamed1">
                    <p>
					<font color="red">가. 수강신청 시 웹브라우저 팝업 차단 끄기 (or 예외 적용)</font><br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 인터넷 익스플로러 : 도구 -&gt; 팝업 차단 -&gt; 팝업 차단 끄기 or 팝업 차단 설정(예외)<br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 도구 -&gt; 인터넷옵션 -&gt; 검색기록(설정) -&gt; 저장된 페이지의 새버전 확인(웹페이지를 열때마다) 설정<br></br>			
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 구글 크롬 : 최신버전 업데이트(사용권장)<br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 애플 사파리 : 최신버전 업데이트<br></br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 모바일 : 최신버전 업데이트<br></br>
                    </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">

                    <div class="card-header text-white bg-info"><b>수강신청 시스템 제한사항</b></div>
                    <div class = "card-body unnamed1">
                    <p>
						가. 종합정보시스템 중복로그인 불가<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 종합정보시스템 중복로그인 시 이전 로그인은 자동 로그아웃 됩니다.<br></br>
						나. 시스템 과부하발생 시 IP차단 조치<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">- 동일 과목에 대한 수강신청을 반복적으로 지속 할 경우 해당 접속 IP 혹은 학번이 일정기간(1시간) 자동차단 됩니다. 차단기간 내 해제 불가하오니 주의하시기 바랍니다.<br></br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 매크로 사용 조작오류 등으로 수강내역이 삭제될 수 있습니다(복구불가). 주의바랍니다.</font></p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">

                    <div class="card-header text-white bg-info"><b>사이버(Cyber)강좌 안내</b></div>
                    <div class = "card-body unnamed1">
                    <p>가. 학점제한 - 한 학기당 교내·외 사이버강좌의 총수강학점이 6학점을 초과 할 수 없음</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">

                    <div class="card-header text-white bg-info"><b>한양사이버 및 KCU 수강신청 안내(필독)</b></div>
                    <div class = "card-body unnamed1">
                    <p>
                        가. 핸드폰/메일 입력시에만 수강가능<br></br>
                        나. 입력방법 : 종합정보시스템의 학적→학생정보입력</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-primary" role="alert">
                    <b>
                        <span class="unnamed1">

                            <font style = {{color:"#07A08A"}}>
                                수강신청 이월학점 조회 :  
                                <a href style = {{color:"#666666"}}> CLICK!!!</a>
                            </font>
                        </span>
                    </b>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3">

                    <div class="card-header text-white bg-info"><b>수강신청내역 점검</b></div>
                    <div class = "card-body unnamed1">
                    <p>
                        가. 수강신청내역 확정 기준일 : 1학기(4월 1일 기준), 2학기(10월 1일 기준)<br></br>
                        나. 수강신청내역 확정 기준일을 전후하여 수강신청내역을 꼭 확인하시기 바랍니다.</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    <b>
                        <span class="unnamed1">수강신청 관련문의 : 02-760-4219 (학사운영팀) / 각 트랙 및 학과(부) 연락처보기(클릭)</span>
                    </b>
                </div>
            </div>
        </div>
    </div>     
    )
}

export default StanByScreen;