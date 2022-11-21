import React from "react";
import "../../css/schedule.css"

//03. 교과목리스트 component
const ScheduleRow = ({ clock, tdNum }) => {
   
    return (
        <tr>
            <td>{clock}</td>
            {[...Array(tdNum)].map((e, i) => {
                    return (<td></td>)})
            }
        </tr>
    )
}

export default ScheduleRow;