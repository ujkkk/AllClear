import React from "react";
import { useState, useEffect } from "react";
//import gameTableRowData from "../../data/gameTableRow.json";
import GameTableRow from "./gameTableRow";

const TableRowRating = ({hiddenRow, setHiddenRow, setGameSettingInfo}) =>{
    const gameTableRowData = ["장바구니", "프리셋", "타이머", "이름"]
    return (
        <>
            {
                gameTableRowData.map( (data,idx) =>(
                    
                    <GameTableRow id = {idx} title = {data} hiddenRow = {hiddenRow} setHiddenRow = {setHiddenRow} setGameSetInfo = {setGameSettingInfo} style={{lineHeight:"1.2"}}></GameTableRow> 
                ))
            }
        </>
    )
}

export default TableRowRating;