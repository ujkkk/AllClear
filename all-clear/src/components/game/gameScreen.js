import React, {useState, useEffect} from "react";
import gameData from "../../data/game.json";
import "../../css/gameScreen.css";
import { useNavigate } from "react-router-dom";
import sugangimg from "../../static/sugang.png"
import SubjectInfo from "./subjectInfo";

import "../../css/gameSchedule.css"
import ScheduleRow from "../preset/scheduleRow";
import GameTableRow from "./gameTableRow"; // 타이머 쓰려고 가져옴
import { useOutletContext } from "react-router-dom";


// 수강신청게임 화면 
const GameScreen = () => {


    //const [gameData, setGameData] = useState(gameData)
    const navigate = useNavigate()
   const {preset}=useOutletContext();
   console.log(preset);
   const{gameSetInfo, chageGameSetInfo}
    = useOutletContext();
    return (
        <>
        <div style = {{height : "45px", marginTop : "60px", width : "1200px", marginLeft : "30px"}}>
            <table style={{width : "820px", float : "left"}}>
                <td style={{width : "820px"}}>
                    <img src = {sugangimg}/>
                </td>  
            </table> 
            <table border="2" style={{width : "100px", float : "left"}}>
                <td>
                   time = 
                </td>   
            </table>
            <table  style={{float : "right", width : "200px"}}>
                <button onClick={()=>{
                    navigate("/page3")
                }}>
                    홈으로  
                </button>
            </table>
        </div>
        <hr></hr>

        <div style = {{width : "1700px", height : "800px", position : "absolute"}}>
            <div style = {{width : "803px", height : "760px", float : "left", marginLeft : "30px",border : "2px solid #0475DC"}}>
                <table style = {{width: "800px"}}>
                    <tbody>
                        <tr id = "sugang-td">
                            <td style = {{paddingLeft : "30px"}}>
                                <span style={{color:"#85CFF0", fontSize:"8px"}}>■ </span>2022-2 수강신청 개설강좌
                            </td>
                            <td style = {{textAlign: "center"}}>
                                트랙선택:
                                <select name="track" id="TrackSelect" style={{width : "120px" , textOverflow : "clip"}}>
                                    <option value="">트랙선택</option>
                                    <option value="mobile">[V021]모바일소프트웨어</option>
                                    <option value="web">[V024]웹</option>
                                </select>
                            </td>
                            <td style={{textAlign : "right"}}>
                            <select name="mytrack" id="SelectMyTrack" style={{width : "70px" , textOverflow : "clip"}}>
                                    <option value="">전공(트랙)</option>
                                    <option value="mobile">[V021]모바일소프트웨어</option>
                                    <option value="bigdata">[V022]빅데이터</option>
                                    <option value="dicon">[V023]디지털콘텐츠</option>
                                    <option value="web">[V024]웹</option>
                                </select>
                                </td>
                                <td>
                                <select name="mytrack" id="SelectMyTrack" style={{width : "120px" , textOverflow : "clip"}}>
                                    <option value="">[0000] 수강신청 장바구니</option>
                                    <option value="mobile">[V021]모바일소프트웨어</option>
                                    <option value="bigdata">[V022]빅데이터</option>
                                    <option value="dicon">[V023]디지털콘텐츠</option>
                                    <option value="web">[V024]웹</option>
                                    
                                </select>
                            </td>
                        </tr>
                        </tbody>
                </table>
                <table style={{width : "800px", marginTop : "5px"}}>
                    <tbody>
                        <tr id = "sugang-middle-td" style = {{height : "40px"}}>
                            <td style = {{width : "400px",  paddingLeft : "30px"}}>
                                [과목코드] 교과목명
                            </td>
                            <td style={{width : "400px", textAlign : "left"}}>
                                분반 | 이수 | 학점 | 주야 | 학년 | 담당교수 | 비고
                            </td>
                        </tr>
                    </tbody>
                </table>    
                <table style={{width : "800px"}}>
                    <tbody>
                        <td style={{overflow : "scroll", overflowX : "hidden", width:"800px", height:"660px"}}>
                            <div style={{ width:"800px", height:"660px"}}>

                                {gameData.map((subject) => <SubjectInfo  subject={subject}/>)}

                            </div>
                            
                         
                        </td>
                    </tbody>
                </table>
            </div>

            <div style={{marginLeft : "50px" , width : "800px", height : "770px", float : "left", overflow : "scroll", overflowX : "hidden", border : "2px solid #0475DC"}}>
                <table style={{width : "800px"}}>
                    <tbody>
                        <tr id = "sugang-td">
                            <td style={{paddingLeft : "30px", width : "300px"}}>
                                <span style={{color:"#85CFF0", fontSize:"8px"}}>■ </span>2022-2 수강신청 신청내역
                            </td>
                            <td>
                                <input type={"type"} className={"input-code"} size ={"6"} placeholder = {"과목코드"} style = {{textAlign : "center", fontSize : "18px", padding : "6px"}}/>
                                <input type={"type"} className={"input-class"} size ={"6"} placeholder = {"분반"} style = {{fontSize : "18px", padding : "6px"}} />
                                <button id = "btncss" type={"button"} className={"search"}>
                                    <span>바로신청</span>    
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{marginTop : "3px", width : "800px"}}>
                    <tbody>
                        <tr id = "sugang-middle-td" style={{height : "40px"}}>
                            <td style={{paddingLeft : "30px", weight : "300px"}}>
                                번호 - [과목코드] 교과목명
                            </td>
                            <td style= {{paddingLeft : "60px", weight : "300px"}}>
                                분반 | 이수 | 학점 | 담당교수 | 선택트랙
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{width : "800px", backgroundColor : "white", fontFamily : "Nanum Gothic"}}>
                    <td style={{width : "800px"}}>
                        신청한 과목 list
                    </td>  
                </table>
                <table border="1" style={{width : "800px",backgroundColor : "white", height : "60px",fontFamily : "Nanum Gothic" }}>
                    <td style={{width : "800px"}}>
                        해당 자료가 존재하지 않습니다.
                    </td>
                </table>
                <table style={{width : "800px", height : "50"}}>
                    <thead>
                        <tr>
                            <th style={{width: "55px"}}></th>
                         
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <div id = "game-schedule" style={{fontFamily : "Nanum-Gothic"}}>
                            {<table>
                                <tr id="week" style={{fontWeight : "bold"}}>
                                    <td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td>
                                </tr>
                                    {[...Array(9)].map((e, i)=>{ 
                                        return ((i+9>12) ? <ScheduleRow key={i} clock={`오후${i+9-12}`} />:<ScheduleRow  key={i} clock={`오전${i+9}`} />)
                                    }
                                     )}
                             </table>}
                            
                           
                            
                            </div>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
        
        
        </>
    )
}

export default GameScreen;

// 한성이가 프리셋 바로 줌, 나는 프리셋 번호 얻어서 프리셋 객체에서 해당 번호만 가져오면 됨