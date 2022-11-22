import React, { useState } from "react";
import "../../css/schedule.css"
import TableLabel from "../plan/tableLabel";
import Schedule from "./schedule";

//01. 시간표
const Preset = ({ presetClass, deleteClass = f => f, setPresetNum}) => {

    const [option, setOption] = useState(0);
    const marginValue = ["50px", "5px", "5px"];
    const optionContent = ["3", "2", "1"];

    const optionChange = (index) => {
        setOption(index);
        setPresetNum(index);
    }

    return (
        <div id="schedule">
            <h4>01. 시간표</h4>
            {optionContent.map((data, i) => (
                <TableLabel key={2-i} color={2-i === option ? true : false} index={2-i} content={data} marginValue={marginValue[i]} onSelect={optionChange} />
            ))}   
            <Schedule presetClass={presetClass} deleteClass={deleteClass} deleteOption={true} x={250} y={176} width={180} height={25} tdNum={5} trNum={12} /> 
        </div>
    )
}

export default Preset;