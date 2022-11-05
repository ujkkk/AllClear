import React, {useState, useEffect} from "react";
//import {useNavigate} from "react-router-dom";
import "../../css/gameScreen.css";
import sugangimg from "../../static/sugang.png"


// 수강신청 게임 tables
const GameScreen =() =>{
    return(
        <>
        <div style = {{height : "45px", marginTop : "60px", width : "1800px", marginLeft : "30px"}}>
            <table id = "header-css" style={{width : "1800px"}}>
                <td>
                    <img src = {sugangimg}/>
                </td>  
            </table> 
        </div>
                                                
        <hr></hr>
        <div style={{width : "1800px", height : "50px"}}>
            <table style={{marginLeft: "30px", width : "1840px"}}>
                <thead>
                    <tr>
                        <td id="sugang-td" style={{width : "250px"}}>
                            ■2022-2 수강신청 개설강좌
                        </td>
                        <td id="sugang-td" style={{width : "300px"}}>
                            트랙선택:
                            <select name="track" id="TrackSelect">
                                <option value="">트랙를 선택해 주세요</option>
                                <option value="mobile">모바일소프트웨어</option>
                                <option value="bigdata">빅데이터</option>
                                <option value="dicon">디지털콘텐츠</option>
                                <option value="web">웹</option>
                            </select>
                        </td>
                        <td id="sugang-td" style={{width : "360px"}}>
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
                        <td style={{backgroundColor : "white", width : "50px"}}>

                        </td>
                        <td id = "sugang-td">
                        ■2022-2 수강신청 신청내역
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
        <div style={{marginLeft:"30px", width : "1800px", height : "20px"}}>
            <table style={{width : "1840px"}}>
                <tbody>
                    <tr>
                        <td style={{fontSize : "14px", width : "400px", textAlign : "left", paddingLeft : "32px"}}>
                            [과목코드] 교과목명
                        </td>
                        <td style = {{textAlign: "center", width : "531px", fontSize : "14px"}}>
                            분반 | 이수 | 학점 | 주야 | 학년 | 담당교수 | 비고
                        </td>
                        <td style={{backgroundColor : "white", width : "50px"}}>

                        </td>
                        <td style={{width : "400px", fontSize : "14px", textAlign : "left", paddingLeft : "30px"}}>
                            번호 - [과목코드] 교과목명 
                        </td>
                        <td style={{fontSize : "14px", textAlign : "left", width : "500px"}}>
                            분반 | 이수 | 학점 | 담당교수 | 선택트랙
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table style={{marginLeft : "30px" ,width : "1840px", height : "650px"}}>
                <tbody>
                <td style={{width : "910px", overflow : "scroll"}}>

                </td>
                <td style={{width : "50px"}}>

                </td>
                <td style={{overflow : "scroll"}}>

                </td>
                </tbody>
            </table>
        </div>
        
        
        </>
    )
}

export default GameScreen;