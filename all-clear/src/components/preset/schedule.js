import React from "react";
import "../../css/schedule.css"
import ScheduleRow from "./scheduleRow";

//01. 시간표
const Schedule = ({likeSub}) => {
    return (
        <div id="schedule">
            <h4>01. 시간표</h4>

            <table>
                <tr id="week">
                    <td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td>
                </tr>
                {[...Array(9)].map((e, i)=>{ 
                    return ((i+9>12) ? <ScheduleRow key={i} clock={i+9-12} />:<ScheduleRow key={i} clock={i+9} />)
                }
                )}
            </table>
        </div>
    )
}

export default Schedule;