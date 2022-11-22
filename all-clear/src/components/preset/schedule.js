import React, { useState } from "react";
import "../../css/schedule.css"
import subjectsData from "../../data/subjectList.json";
import ScheduleRow from "./scheduleRow";

//01. 시간표
const Schedule = ({ presetClass, deleteClass = f => f, deleteOption, x, y, width, height, tdNum, trNum }) => {
    const colorList = ["#E1E7F5", "#B9DBEF", "#69B4DC", "#28659B", "#44878F", "#97D8CB", "#E6ECEC", "#A0C5CE", "#005F89", "#62CDD7"]
    let startTime = 9

    const getTime = (presetTime) => {
        let time = presetTime.split(":")

        if(Number(time[0])===12){
            return `오후 ${presetTime}`;
        }
        else if(Number(time[0])>12){
            return `오후 ${Number(time[0]) - 12}:${time[1]}`
        }
        else{
            return `오전 ${presetTime}`;
        }
    }

    return (
        <>
            <table>
                <tr id="week">
                    {(tdNum == 5) ? <><td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td></> : <><td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td></>}
                </tr>
                {[...Array(trNum)].map((e, i) => {
                    return ((i + 9 > 12) ? <ScheduleRow key={i} clock={`오후 ${i+9-12}`} tdNum={tdNum} /> : <ScheduleRow key={i} clock={`오전 ${i+9}`} tdNum={tdNum} />)
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


                            console.log("@@@@@@@@@@@ "+newHeight);

                    let customColor = colorList[i % colorList.length]

                    let newX = 0

                    switch (preset.dayOfWeek) {
                        case "월": newX = x + width * 0; break;
                        case "화": newX = x + width * 1; break;
                        case "수": newX = x + width * 2; break;
                        case "목": newX = x + width * 3; break;
                        case "금": newX = x + width * 4; break;
                        case "토": newX = x + width * 5; break;
                    }

                    let subject = subjectsData.filter((data) => (data.subject_id === preset.subject_id))
                    if (deleteOption) {
                        return <div className="preset-subject" key={i} style={{ background: customColor, height: String(newHeight) + 'px', left: String(newX) + 'px', top: String(newY) + 'px' }}>
                            <div className="subject-name">{subject[0].name}</div>
                            <button className="delete-subject" onClick={() => deleteClass(subject[0].subject_id, preset.type)}>X</button>
                            <div className="subject-professor">{preset.type} 반 | {subject[0].professor.join(" , ")} </div>
                        </div>
                    }
                    else {
                        return <div className="game-subject" key={i} style={{ background: customColor, height: String(newHeight) + 'px', left: String(newX) + 'px', top: String(newY) + 'px' }}>
                            <div className="subject-time">{getTime(preset.start_time)} - {getTime(preset.end_time)}</div>
                            <div className="subject-name">{`${subject[0].name} (${preset.type})`}</div>
                            <div className="subject-professor">{subject[0].professor.join(", ")} </div>
                        </div>
                    }

                })
            }
        </>
    )
}

export default Schedule;