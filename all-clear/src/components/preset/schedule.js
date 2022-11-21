import React, { useState } from "react";
import "../../css/schedule.css"
import subjectsData from "../../data/subjectList.json";
import ScheduleRow from "./scheduleRow";
import TableLabel from "../plan/tableLabel";

//01. 시간표
const Schedule = ({ presetClass, deleteClass = f => f, setPresetNum , x, y, width, height}) => {
    const colorList = ["#E1E7F5", "#B9DBEF", "#69B4DC", "#28659B", "#44878F", "#97D8CB", "#E6ECEC", "#A0C5CE", "#005F89", "#62CDD7"]
    let startTime = 9

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
            <table>
                <tr id="week">
                    <td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td>
                </tr>
                {[...Array(9)].map((e, i) => {
                    return ((i + 9 > 12) ? <ScheduleRow key={i} clock={i + 9 - 12} tdNum={5} /> : <ScheduleRow key={i} clock={i + 9} tdNum={5} />)
                }
                )}
            </table>
            {
                presetClass.map((preset, i) => {

                    let start_time = preset.start_time.split(":")
                    let end_time = preset.end_time.split(":")

                    let newY = ((((Number(start_time[0]) - startTime) * 2 + (Number(start_time[1]) / 30))) * height) + y

                    let newHeight = (((Number(end_time[0]) - Number(start_time[0])) * 2) +
                        (((Number(end_time[1]) > Number(start_time[1])) ? Number(end_time[1]) - Number(start_time[1]) :
                            Number(start_time[1]) - Number(end_time[1])) / 30)) * height

                    let customColor = colorList[i % colorList.length]

                    let newX = 0

                    switch (preset.dayOfWeek) {
                        case "월": newX = x + width * 0; break;
                        case "화": newX = x + width * 1; break;
                        case "수": newX = x + width * 2; break;
                        case "목": newX = x + width * 3; break;
                        case "금": newX = x + width * 4; break;
                    }

                    let subject = subjectsData.filter((data) => (data.subject_id === preset.subject_id))

                    return <div className="preset-subject" key={i} style={{ background: customColor, height: String(newHeight) + 'px', left: String(newX) + 'px', top: String(newY) + 'px' }}>
                        <div className="subject-name">{subject[0].name}</div>
                        <button className="delete-subject" onClick={() => deleteClass(subject[0].subject_id, preset.type)}>X</button>
                        <div className="subject-professor">{preset.type} 반 | {subject[0].professor.join(" , ")} </div>
                    </div>

                })
            }
        </div>
    )
}

export default Schedule;