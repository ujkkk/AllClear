
import React, {useState, useEffect} from "react";
import "../css/detail.css"
import detailData from "../data/detail.json";
import DetailRow from "./DetailRow";
import DetailRowSearch from "./DetailRowSearch";

//02. 세부사항 component
const Detail =({title}) =>{

    
    return (
        <div className="datail_warp">
            <h2>{title}</h2>
            <table cellPadding={5} cellSpacing={0} border={1} align={"center"} width={"50%"}>
                <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
                </colgroup>
                <tbody>
                    <DetailRow rowTitle="학년" rowData={detailData.grade}/> 
                    <DetailRow rowTitle="구분" rowData={detailData.major_sortation}/> 
                    <DetailRow rowTitle="시간대" rowData={detailData.time}/>
                    <DetailRowSearch rowTitle="강의명" />                                   
                </tbody>
            </table>
        </div>
    )
}

export default Detail;