import React, { useState, useEffect } from "react";
import gameData from "../../data/game.json";
import "../../css/gameScreen.css";
import { useNavigate } from "react-router-dom";
import sugangimg from "../../static/sugang.png"
import SubjectInfo from "./subjectInfo";
import "../../css/gameSchedule.css"
import GameTableRow from "./gameTableRow"; // 타이머 쓰려고 가져옴
import { useOutletContext } from "react-router-dom";
import Schedule from "../preset/schedule";
import { ToastContainer, toast } from 'react-toastify';
import ApplyClasses from "./applyClasses";
import Timer from "./timer";
import ApplyImmediately from "./applyImmediately";
import GameScheduleList from "./gameScheduleList";
import classDivisionData from "../../data/classDivision.json";

// 수강신청게임 화면 
const GameScreen = () => {

    const navigate = useNavigate()
    const { preset } = useOutletContext();
    const { gameSetInfo, chageGameSetInfo } = useOutletContext();
    const [sec, setSec] = useState(gameSetInfo.runTime);
    //console.log(gameSetInfo)

    const changeSec = (time) => { 
        if(time <=0){
            setSec(0)
        }
        else setSec(time) 
    }

    const [gameSchedule, setGameSchedule] = useState([]);

    const notify = (text) => {
        toast.warn(text, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }
    useEffect(() => {
        changeSec(sec)
    }, [sec])
    const alertAddClass1 = (addClass) => {

        if (sec > 0) {
            console.log("########## sec "+sec)
            var preTime = new Date()
            var delConfirm = window.confirm(`${addClass.name}(${addClass.code})을 수강 신청하시겠습니까?`);
            if (delConfirm) {
                var changeTime = new Date() - preTime;
                setSec(sec-changeTime*1000)
                scheduleAddClass(addClass)
            }
        }
    }

    const alertAddClass2 = (addClass) => {
        if (sec > 0) {
            console.log("########## sec "+sec)
            var delConfirm = window.confirm(`직접 입력 과목(${addClass.code})을 수강 신청하시겠습니까?`);
            if (delConfirm) {
                scheduleAddClass(addClass)
            }
        }
    }

    const alartDeleteClass = (deleteClass) => {
        var delConfirm = window.confirm(`${deleteClass.name}(${deleteClass.code})을 수강 취소하시겠습니까?`);
        if (delConfirm) {
            DeleteClass(deleteClass.subject_id, deleteClass.type)
        }
    }

    const checkPresetTime = (check1, check2) => {
        let startTime1 = check1.start_time.replace(":", "")
        let endTime1 = check1.end_time.replace(":", "")

        let startTime2 = check2.start_time.replace(":", "")
        let endTime2 = check2.end_time.replace(":", "")

        if (startTime1 >= endTime2 || endTime1 <= startTime2)
            return true
        else
            return false
    }

    const scheduleAddClass = (addClass) => {
        let overlap = false

        gameSchedule.map((pre) => {
            if (pre.name == addClass.name) {
                overlap = true
                //notify(" 프레셋에 존재합니다")
                window.confirm("이미 신청된 강좌입니다")
                //alert("해당 과목이 preset에 존재합니다")
                return
            }
            else if (pre.dayOfWeek === addClass.dayOfWeek && !checkPresetTime(pre, addClass)) {
                overlap = true
                //notify("겹치는 시간이 존재합니다")
                window.confirm("해당 시간에 다른 강좌가 존재합니다")
                //alert("해당 과목 시간에 과목이 preset에 존재합니다")
                return

            }
            // if(sec <= 0){

            // }
        })
        if (overlap === false) {
            setGameSchedule([...gameSchedule, addClass]);
        }
        overlap = false

        console.log(addClass);
        console.log(gameSchedule);
    }

    const DeleteClass = (subject_id, type) => {

        setGameSchedule(gameSchedule.filter((sub) => {
            //console.log(`${preset.subject_id} !== ${subject_id} ||| ${preset.type} !== ${type}`)
            return (sub.subject_id !== subject_id || sub.subject_id === subject_id && sub.type !== type)
        }))
    }


    //const [gameData, setGameData] = useState(gameData)

    console.log(preset);



    return (
        <>
            <div style={{ height: "45px", marginTop: "60px", width: "1200px", marginLeft: "30px" }}>
                <table style={{ width: "820px", float: "left" }}>
                    <td style={{ width: "820px" }}>
                        <img src={sugangimg} />
                    </td>
                </table>
                <table style={{ width: "100px", height: "30px", float: "left" }}>
                    <td>
                        <Timer sec={sec} changeSec={changeSec}></Timer>

                    </td>
                </table>
                <table style={{ float: "right", width: "200px" }}>
                    <button onClick={() => {
                        navigate("/page3")
                    }}>
                        홈으로
                    </button>
                </table>
            </div>
            <hr></hr>

            <div style={{ width: "2500px", height: "800px", position: "absolute" }}>
                <div style={{ width: "803px", height: "967px", float: "left", marginLeft: "30px", border: "2px solid #0475DC" }}>
                    <table style={{ width: "800px" }}>
                        <tbody>
                            <tr id="sugang-td">
                                <td style={{ paddingLeft: "30px" }}>
                                    <span style={{ color: "#85CFF0", fontSize: "8px" }}>■ </span>2022-2 수강신청 개설강좌
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    트랙선택:
                                    <select name="track" id="TrackSelect" style={{ width: "120px", textOverflow: "clip" }}>
                                        <option value="">트랙선택</option>
                                        <option value="mobile">[V021]모바일소프트웨어</option>
                                        <option value="web">[V024]웹</option>
                                    </select>
                                </td>
                                <td style={{ textAlign: "right" }}>
                                    <select name="mytrack" id="SelectMyTrack" style={{ width: "70px", textOverflow: "clip" }}>
                                        <option value="">전공(트랙)</option>
                                        <option value="mobile">[V021]모바일소프트웨어</option>
                                        <option value="bigdata">[V022]빅데이터</option>
                                        <option value="dicon">[V023]디지털콘텐츠</option>
                                        <option value="web">[V024]웹</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="mytrack" id="SelectMyTrack" style={{ width: "120px", textOverflow: "clip" }}>
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
                    <table style={{ width: "800px", marginTop: "5px" }}>
                        <tbody>
                            <tr id="sugang-middle-td" style={{ height: "40px" }}>
                                <td style={{ width: "400px", paddingLeft: "30px" }}>
                                    [과목코드] 교과목명
                                </td>
                                <td style={{ width: "400px", textAlign: "left" }}>
                                    분반 | 이수 | 학점 | 주야 | 학년 | 담당교수 | 비고
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ width: "800px" }}>
                        <tbody>
                            <td style={{ overflow: "scroll", overflowX: "hidden", width: "800px", height: "660px" }}>
                                <div style={{ width: "800px", height: "860px" }}>
                                    <ApplyClasses preset={preset} addClass={alertAddClass1} gameSetInfo={gameSetInfo} sec={sec}>  </ApplyClasses>
                                </div>
                            </td>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginLeft: "50px", width: "1300px", height: "967px", float: "left", overflow: "scroll", overflowX: "hidden", border: "2px solid #0475DC" }}>
                    <table style={{ width: "1300px" }}>
                        <tbody>
                            <tr id="sugang-td">
                                <td style={{ paddingLeft: "30px", width: "300px" }}>
                                    <span style={{ color: "#85CFF0", fontSize: "8px" }}>■ </span>2022-2 수강신청 신청내역
                                </td>
                                <td>
                                    <ApplyImmediately addClass={alertAddClass2} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ marginTop: "3px", width: "1300px" }}>
                        <tbody>
                            <tr id="sugang-middle-td" style={{ height: "40px" }}>
                                <td style={{ paddingLeft: "30px", weight: "300px" }}>
                                    번호 - [과목코드] 교과목명
                                </td>
                                <td style={{ paddingLeft: "60px", weight: "300px" }}>
                                    분반 | 이수 | 학점 | 담당교수 | 선택트랙
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style={{ width: "1300px", backgroundColor: "white", fontFamily: "Nanum Gothic" }}>
                        <td style={{ width: "1300px" }}>
                            <GameScheduleList gameSchedule={gameSchedule} checkdeleteClass={alartDeleteClass} />
                        </td>
                    </table>
                    <table border="1" style={{ width: "1300px", backgroundColor: "white", height: "60px", fontFamily: "Nanum Gothic" }}>
                        <td style={{ width: "1300px" }}>
                            해당 자료가 존재하지 않습니다.
                        </td>
                    </table>
                    <table style={{ width: "1300px", height: "50" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "55px" }}></th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <div id="game-schedule" style={{ fontFamily: "Nanum-Gothic" }}>
                                    <Schedule presetClass={gameSchedule} deleteOption={false} x={70} y={29} width={190} height={25} tdNum={6} trNum={15} />
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="game-schedule-alart" >
                <ToastContainer />
            </div>

        </>
    )
}

export default GameScreen;

// 한성이가 프리셋 바로 줌, 나는 프리셋 번호 얻어서 프리셋 객체에서 해당 번호만 가져오면 됨