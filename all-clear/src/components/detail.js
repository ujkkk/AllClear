
import React, {useState, useEffect} from "react";
import "../css/detail.css"
import detailData from "../data/detail.json";

const Detail =() =>{


    return (
        <div className="datail_warp">
            <h2>02. 세부검색</h2>
            <table  cellPadding="5" cellSpacing="0" border="1" align="center">
                <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
                </colgroup>
                <tbody>
                    <tr>
                        <th>학년</th>
                        <td className="my_detail_right" id="grade">
                            <label style={{border:"2px solid gray"}}>1학년</label>
                            <label style={{border:"2px solid gray"}}>2학년</label>
                            <label style={{border:"2px solid gray"}}>3학년</label>
                            <label style={{border:"2px solid gray"}}>4학년</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Detail;