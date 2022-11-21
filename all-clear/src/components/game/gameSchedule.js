import React from "react";
import ScheduleRow from "../preset/scheduleRow";

const GameSchedule = () => {

    return (
        <table>
        <tr id="week" style={{ fontWeight: "bold" }}>
            <td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td>
        </tr>
        {[...Array(9)].map((e, i) => {
            return ((i + 9 > 12) ? <ScheduleRow key={i} clock={`오후${i + 9 - 12}`} tdNum={6} /> : <ScheduleRow key={i} clock={`오전${i + 9}`} tdNum={6} />)
        }
        )}
    </table>
    
)}

export default GameSchedule;