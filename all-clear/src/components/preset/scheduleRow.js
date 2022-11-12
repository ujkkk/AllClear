import React from "react";
import "../../css/schedule.css"

//03. 교과목리스트 component
const ScheduleRow = ({ clock }) => {
    return (
        <tr>
            <td>{clock}</td><td></td><td></td><td></td><td></td><td></td>
        </tr>
    )
}

export default ScheduleRow;