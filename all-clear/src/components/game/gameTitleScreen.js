import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../../css/gameTitleScreen.css";
import gameTitleBGM from "../../static/gameTitleBgm.mp3";
import gameStartBGM from "../../static/gameStartBgm.mp3";
import TableRowRating from "./tableRowRating";
import bugi from '../../static/bugiIcon2.png'
import {BsBellFill} from "react-icons/bs"

const GameTitleScreen =({title}) =>{
    const navigate = useNavigate()
    var gameTitleAudio = null
    var gameStartAudio = null
    const [hiddenRow, setHiddenRow] = useState(1);
    useEffect(
        () => {
            if (gameTitleAudio == null){
                gameTitleAudio  = new Audio(gameTitleBGM)
                gameTitleAudio.play()
            }
            if (gameStartAudio == null){
                gameStartAudio = new Audio(gameStartBGM)
            }
            return () => {
                if (gameTitleAudio != null)
                    gameTitleAudio.pause()
                if (gameStartAudio != null)
                    gameStartAudio.pause()
            }
        },
        [] );
    return (
        <div class="game-title-screen-wrap" onClick= {()=>{
            // if (gameStartAudio == null){
            //     gameStartAudio  = new Audio(gameStartBGM)
            // }
            // if (gameTitleAudio == null){
            //     gameTitleAudio = new Audio(gameTitleBGM)
            //     gameTitleAudio.play()
            // }
            // else
            //     gameTitleAudio.pause()
            
        }}>
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
                            <TableRowRating hiddenRow = {hiddenRow} setHiddenRow = {setHiddenRow} />
                        </tbody>
                    </table>    
                     <img src = {bugi}  width = {"8%"} style = {{marginTop:"250px",marginRight:"54px",transform:"scale(3.5)"}}></img>         
                </section>
                <nav id = "game-title-screen-nav">
                    <button>게임 설명</button>
                <button onClick ={()=>{ 
                    gameTitleAudio.pause();
                    gameTitleAudio = null;
                    gameStartAudio.play();
                    setTimeout(function(){ gameStartAudio.pause(); gameStartAudio = null; navigate("/standBy")},7700)
                }}>
                게임 시작</button>
                </nav>
            </section>
        </div>
    )
}

export default GameTitleScreen;