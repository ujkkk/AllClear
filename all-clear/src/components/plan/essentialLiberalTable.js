import React from "react";
import "../../css/essential.css"


//세부 검색 옵션 테이블 컴포넌트
const EssentialLiberalTable = ({ tracks, setTracks }) => {
    return (
        <table id="search" cellPadding="5" cellSpacing="0" border="1" >
            <colgroup>
                <col width={"15%"}></col>
                <col width={"85%"}></col>
            </colgroup>
            <tbody>
                <tr>
                    <th>교양</th>
                    <td>

                    </td>
                </tr>
                <tr>
                    <th>선택</th>
                    <td>

                    </td>
                </tr>
                <tr>
                    <th>뭐들가지</th>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>)
}
export default EssentialLiberalTable;