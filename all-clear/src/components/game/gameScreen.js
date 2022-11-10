import React, {useState, useEffect} from "react";
//import {useNavigate} from "react-router-dom";
import "../../css/gameScreen.css";
import sugangimg from "../../static/sugang.png"

// 수강신청게임 화면 찐
const GameScreen = () => {
    return (
        <>
        <div style = {{height : "45px", marginTop : "60px", width : "1840px", marginLeft : "30px"}}>
            <table  style={{width : "900px", float : "left"}}>
                <td>
                    <img src = {sugangimg}/>
                </td>  
            </table> 
            <table>
                <td>
                   timer area 
                </td>
            </table>
        </div>
        <hr></hr>
        <div style={{marginTop : "4px" ,marginRight : "30px", width : "900px", height : "800px", float : "right", overflow : "scroll", overflowX : "hidden"}}>
            <table style={{width : "900px"}}>
                <tbody>
                    <tr id = "sugang-td">
                        <td style={{paddingLeft : "30px", width : "400px"}}>
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
            <table style={{marginTop : "3px", width : "900px"}}>
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
            <table>
                <td>
                    신청한 과목 list
                </td>
            </table>
            <table>
                <td>
                    총 신청한 과목 수
                </td>
            </table>
            <table border="2" style={{width : "882px", borderColor : "#0475DC"}}>
                <tbody>
                    <tr>
                        <td style={{weight : "900px", height : "700px", backgroundColor : "white", overflow : "scroll", overflowX : "hidden"}}>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style = {{marginRight : "40px", width : "900px", height : "750px", float : "right"}}>
            <table style = {{width: "900px"}}>
                <tbody>
                    <tr id = "sugang-td">
                        <td style = {{paddingLeft : "30px"}}>
                            <span style={{color:"#85CFF0", fontSize:"8px"}}>■ </span>2022-2 수강신청 개설강좌
                        </td>
                        <td style = {{textAlign: "center"}}>
                            트랙선택:
                            <select name="track" id="TrackSelect">
                                <option value="">트랙를 선택해 주세요</option>
                                <option value="mobile">모바일소프트웨어</option>
                                <option value="bigdata">빅데이터</option>
                                <option value="dicon">디지털콘텐츠</option>
                                <option value="web">웹</option>
                            </select>
                        </td>
                        <td style={{textAlign : "right", paddingRight : "30px"}}>
                        <select name="mytrack" id="SelectMyTrack">
                                <option value="">전공(트랙)</option>
                                <option value="mobile">모바일</option>
                                <option value="web">웹</option>
                            </select>
                            <select name="mytrack" id="SelectMyTrack">
                                <option value="">[0000] 수강신청 장바구니</option>
                                <option value="mobile">[0001]모바일소프트웨어</option>
                                <option value="web">[0002]웹</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
            </table>
            <table style={{width : "900px", marginTop : "5px"}}>
                <tbody>
                    <tr id = "sugang-middle-td" style = {{height : "40px"}}>
                        <td style = {{width : "300px",  paddingLeft : "30px"}}>
                            [과목코드] 교과목명
                        </td>
                        <td style={{width : "500px", textAlign : "left"}}>
                            분반 | 이수 | 학점 | 주야 | 학년 | 담당교수 | 비고
                        </td>
                    </tr>
                </tbody>
            </table>    
            <table border="2" style={{width : "900px", borderColor : "#0475DC"}}>
                <tbody>
                    <tr>
                        <td style={{weight : "900px", height : "660px", backgroundColor : "white", overflow : "scroll", overflowX : "hidden"}}>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </>
    )
}

export default GameScreen;