import React, {useState, useEffect} from "react";
import {useNavigate, useOutletContext} from "react-router-dom";
import "../../css/gameTitleScreen.css";
import gameTitleBGM from "../../static/gameTitleBgm.mp3";
import gameStartBGM from "../../static/gameStartBgm.mp3";
import TableRowRating from "./tableRowRating";
import bugi from '../../static/bugiIcon2.png'
import {BsBellFill} from "react-icons/bs"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GameTitleScreen =({title}) =>{
    const navigate = useNavigate()
    const notify = () => {
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
    let isClicked = false;
    var gameTitleAudio = new Audio(gameTitleBGM) // 게임 창 들어가면 나오는 브금
    var gameStartAudio = new Audio(gameStartBGM) // 게임 시작 버튼 눌렀을 때 시작되는 브금
    const [hiddenRow, setHiddenRow] = useState(1);
    const {gameSetInfo,changeGameSetInfo} = useOutletContext();
    const editGameSetInfo = (data = null) => {
        changeGameSetInfo({...gameSetInfo, ...data})
    }
    useEffect(
        () => {
            
                //gameTitleAudio  = new Audio(gameTitleBGM)
                gameTitleAudio.play()
                //gameStartAudio = new Audio(gameStartBGM)
         
            return () => { //화면이 사라지면 브금 종료
                console.log("clean up 함수 호출")
                //if (gameTitleAudio != null) {
                    gameTitleAudio.pause()
                    gameTitleAudio = null
                    isClicked = false;
                // /}
                // if (gameStartAudio != null){
                    gameStartAudio.pause()
                    gameStartAudio = null
                //}
            }
        },
        [] );
        useEffect(
            ()=>{
                console.log("edit Game Set info 값 변경")
                console.log(gameSetInfo)
            },[gameSetInfo]
        )
    return (
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
                     <img src = {bugi}  width = {"8%"} style = {{marginTop:"250px",marginRight:"54px",transform:"scale(3.5)"}}></img>         
                </section>
                <nav id = "game-title-screen-nav">
                    <button>게임 설명</button>
                <button onClick ={()=>{ 
                   if (gameSetInfo.name !== "" && isClicked == false){
                        gameTitleAudio.pause();
                        gameStartAudio.play();
                        isClicked = true
                        console.log("useCart => "+gameSetInfo["useCart"]);
                        setTimeout(function(){ gameStartAudio.pause(); /*gameStartAudio = null;*/ navigate("/standBy")},7700)
                    }
                    else {
                        notify()
                        console.log("유효성 검사!!!!")
                    }
                }}>
                게임 시작</button>
                </nav>
                <ToastContainer />
            </section>
        </div>
    )
}

export default GameTitleScreen;