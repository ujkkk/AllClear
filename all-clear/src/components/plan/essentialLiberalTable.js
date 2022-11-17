import React,{useState} from "react";
import "../../css/essential.css"
import CollegeButton from "./collegeButton";
import liberalData from "../../data/liberalArts.json";
import TrackButton from "./trackButton";

//교양 테이블

const EssentialLiberalTable=({tracks,changeColorState, changeSwitch, changeTracks})=>{
    
    const [fieldItem,setField]=useState([])
    //구분 선택시 호출
    const changeFieldItem=(props)=>{ //props는 구분 배열
        setField(props); 
        changeColorState(true);
        changeTracks(props);
        changeSwitch(false);
    }
    return (
        <table id="search" cellPadding="5" cellSpacing="0" border="1" >
            <colgroup>
                <col width={"15%"}></col>
                <col width={"85%"}></col>
            </colgroup>
            <tbody>
            <tr>
                <th>구분</th>
                <td>
                    <CollegeButton essentialData={liberalData} changeMajorItem={changeFieldItem}/>
                </td>
            </tr>
            <tr>
                <th>분야</th>
                <td>
                    <TrackButton tracks={tracks} trackItem={fieldItem} changeTracks={changeTracks}/>
                </td>
            </tr>
            </tbody>
        </table>)
}
export default EssentialLiberalTable;