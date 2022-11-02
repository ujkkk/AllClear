import React, { useState, useEffect } from "react";
import "../../css/essential.css"
import CollegeButton from "./collegeButton";
import MajorButton from "./majorButton";
import TrackButton from "./trackButton";
import searchData from "../../data/search.json"

//세부 검색 옵션 테이블 컴포넌트
const EssentialTable=({tracks, setTracks})=>{
    const [majorItem,setMajor]=useState([]); //선택할 학부를 담을 상태변수
    
    //단과대 선택 시 호출 
    const changeMajorItem=(props)=>{ //props는 학부 배열
        setMajor(props); 
        setTrack([]); //다른 단과대를 누를 때를 대비
        setTracks([""]); //다른 단과대를 누르면 subject에서 사용하는 트랙 배열을 초기화
    }
    //tracks 배열이 0일 때 다시 전체 상황으로
    useEffect(()=>{
        if(tracks.length===0){
            setTracks(trackItem.map(data=>data));
        }
    },[tracks]);

    const [trackItem,setTrack]=useState([]); //선택할 트랙을 담을 상태변수
    
    //학부 선택시 호출 
    const changeTrackItem=(props)=>{ //props는 트랙 배열
        setTrack(props);
        setTracks(props);
    }
    return (
    <table id="search" cellPadding="5" cellSpacing="0" border="1" >
            <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
            </colgroup>
            <tbody>
            <tr>
                <th>단과대</th>
                <td>
                    <CollegeButton essentialData={searchData} changeMajorItem={changeMajorItem}/>
                </td>
            </tr>
            <tr>
                <th>학부</th>
                <td>
                    <MajorButton majorItem={majorItem} changeTrackItem={changeTrackItem}/>
                </td>
            </tr>
            <tr>
                <th>트랙</th>
                <td>
                    <TrackButton tracks={tracks} trackItem={trackItem} setTracks={setTracks}/>
                </td>
            </tr>
            </tbody>
        </table>)
}
export default EssentialTable;