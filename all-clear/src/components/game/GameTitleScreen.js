import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../../css/game-title-screen.css";
import gameTitleBGM from "../../static/game-title-bgm.mp3"
import gameStartBGM from "../../static/game-start-bgm.mp3";


const GameTitleScreen =({title}) =>{
    const navigate = useNavigate()
    var gameTitleAudio = null
    var gameStartAudio = new Audio(gameStartBGM)
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
                <header>
                    <p id="game-title">{title}</p>
                </header>
                <section id="game-setting-section">
                    <table cellPadding={5} cellSpacing={0} border={1} align={"center"} width={"50%"}>
                        <colgroup>
                            <col width={"15%"}></col>
                            <col width={"85%"}></col>
                        </colgroup>
                        <tbody>
                                                    
                        </tbody>
                    </table>
                </section>
                <nav id = "game-title-screen-nav">
                    <button>게임 설명</button>
                <button onClick ={()=>{
                    gameTitleAudio = null;
                    gameStartAudio.play();
                    setTimeout(function(){
                        navigate("/stand-by")
                },7700)}}>게임 시작</button>
                </nav>
        </div>
    )
}

export default GameTitleScreen;