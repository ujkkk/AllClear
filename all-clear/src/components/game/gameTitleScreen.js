import React, {useState, useEffect} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";
import TableRowRating from "./tableRowRating";

import gameTitleBGM from "../../static/gameTitleBgm.mp3";
import gameStartBGM from "../../static/gameStartBgm.mp3";

import {BsBellFill} from "react-icons/bs" 
import {AiFillHome} from "react-icons/ai"
import {TfiBackRight} from "react-icons/tfi"
import bugi from '../../static/bugiIcon2.png';

import { ToastContainer, toast } from 'react-toastify'; //Alert library

import 'react-toastify/dist/ReactToastify.css';
import "../../css/gameTitleScreen.css";
import Modal from "./modal"


const GameTitleScreen =({title}) =>{

    /* Section1. Basic Setting */
    const [hiddenRow, setHiddenRow] = useState(1); // 장바구니 없음 클릭 시 안보이는 행
    const {gameSetInfo,changeGameSetInfo} = useOutletContext(); // 게임 screen 패널로 넘겨줄 데이터: 장바구니 유무, 프리셋 번호, 게임 시간, 이름
    const editGameSetInfo = (data = null) => { //useState 간접 변경
        changeGameSetInfo({...gameSetInfo, ...data})
    }
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    const navigate = useNavigate() // 페이지 이동 위한 변수
    const notify = () => { // 이름 입력 안했을 시, 경고창 정의
        toast.error('이름을 입력해주세요!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }

    let timeOutId = null;
    let isClicked = false;

    let gameStartAudio = new Audio(gameStartBGM) // 게임 시작 버튼 눌렀을 때 시작되는 브금
    
    useEffect( // 처음 랜더링 된 후 한 번만(마운트) 호출됨
        () => {
            
            if (gameStartAudio == null){
                gameStartAudio = new Audio(gameStartBGM)
            }
     
         
            return () => { // clean up : 화면이 사라지면 BGM 종료
                console.log("clean up 함수 호출")

                    if(gameStartAudio != null){

                        clearTimeout(timeOutId)
                        gameStartAudio.pause()
                        gameStartAudio = null
                    }
                  
                
                changeGameSetInfo({ // gameSetting 초기화
                    useCart:false,
                    preset:0,
                    runTime:2.4,
                    name:""
                })
            }
        },[] );

    useEffect(
        ()=>{
            console.log("edit Game Set info 값 변경 확인")
            console.log(gameSetInfo)
        },[gameSetInfo])

    return (
        <>
        <p id="home-btn" onClick = {()=>navigate("/")}><AiFillHome size="42"></AiFillHome></p>
        <div class="game-title-screen-wrap">
            <section id = "setting-contents-section">
                <header>
                    <p id="game-title">{title+" "}<BsBellFill id ="bell"></BsBellFill></p>
                </header>
                <section id="game-setting-section">
                    <div id ="game-table-title" style={{width:"100%"}}>게임 설정</div>
                    <table style = {{ lineHeight:"1.2",fontSize:"35px",marginLeft:"40px"}} align={"left"} width={"80%"} height = {"380px"}> 
                        <colgroup>
                            <col width={"150px"}></col> 
                        </colgroup> 
                        <tbody>
                            <TableRowRating hiddenRow = {hiddenRow} setHiddenRow = {setHiddenRow} setGameSettingInfo = {editGameSetInfo}/>
                        </tbody>
                    </table>    
                     <img src = {bugi} width = {"8%"} style = {{marginTop:"250px",marginRight:"54px",transform:"scale(3.5)"}}></img>         
                </section>
                {modalOpen && <Modal closeModal={() => setModalOpen(!modalOpen)}></Modal>}
                <nav id = "game-title-screen-nav">
                    <button onClick={() => setModalOpen(!modalOpen)}>게임 설명</button>
                <button onClick ={()=>{ 
                   
                   if (gameSetInfo.name != ""){
                     
                        console.log("useCart => "+gameSetInfo["useCart"]);
                        
                        gameStartAudio.play();
                        timeOutId = setTimeout(function(){ gameStartAudio.pause(); gameStartAudio = null; navigate("/standBy")},7700)
                    }
                    else {
                        notify() // 이름 입력하라는 경고창
                    
                    }
                }}>게임 시작</button>
                </nav>
                <ToastContainer />
            </section>
        </div>
        </>
    )
}

export default GameTitleScreen;