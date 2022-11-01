import React, { useState } from "react";
import "../css/search.css"
import CollegeButton from "./collegeButton";
import MajorButton from "./majorButton";
import TrackButton from "./trackButton";
import searchData from "../data/search.json"

const SearchTable=({tracks, setTracks,setSearch})=>{
    const [majorItem,setMajor]=useState([]);
    const changeMajorItem=(props)=>{
        setMajor(props);
        setTrack([]); //다른 단과대를 누를 때를 대비
        setTracks(["전체"]);
    }

    const [trackItem,setTrack]=useState([]);
    const changeTrackItem=(props)=>{
        setTrack(props);
    }
    return (<table id="search" cellPadding="5" cellSpacing="0" border="1" align="center">
            <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
            </colgroup>
            <tr>
                <th>단과대</th>
                <td>
                    <CollegeButton searchData={searchData} changeMajorItem={changeMajorItem}/>
                </td>
            </tr>
            <tr>
                <th>학부</th>
                <td>
                    <MajorButton majorItem={majorItem} changeTrackItem={changeTrackItem} setSearch={setSearch}/>
                </td>
            </tr>
            <tr>
                <th>트랙</th>
                <td>
                    <TrackButton tracks={tracks} trackItem={trackItem} setTracks={setTracks}/>
                </td>
            </tr>
        </table>)
}
export default SearchTable;