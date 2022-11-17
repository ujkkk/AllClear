import React from "react";
import "../../css/schedule.css"
import subjectsData from "../../data/subjectList.json";
import ScheduleRow from "./scheduleRow";

//01. 시간표
const Schedule = ({presetClass}) => {

    let startTime = 9
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
            {
                presetClass.map((preset, i) => {
                    let width = 180
                    let height = 25
                    let x = 250
                    let y = 173
                    
                    let start_time = preset.start_time.split(":")
                    
                    let end_time = preset.end_time.split(":")

                    y =  ((((Number(start_time[0])-startTime)*2 + (Number(start_time[1])/30))) * height) + y

                    height = (((Number(end_time[0])-Number(start_time[0])) * 2) + 
                        (((Number(end_time[1])>Number(start_time[1]))?Number(end_time[1])-Number(start_time[1]):
                        Number(start_time[1])-Number(end_time[1]))/30)) * height

                    let customColor = '#'+Math.round(Math.random() * 0xffffff).toString(16);

                    switch(preset.dayOfWeek){
                        case "월":  x = x+width*0; break;
                        case "화":  x = x+width*1; break;
                        case "수":  x = x+width*2; break;
                        case "목":  x = x+width*3; break;
                        case "금":  x = x+width*4; break;
                    }

                    let subject = subjectsData.filter((data)=> (data.subject_id === preset.subject_id))

                    return <div className="preset-subject" key={i} style={{background:customColor, height:String(height)+'px', left:String(x)+'px', top:String(y)+'px'}}>
                        <div className="subject-name">{subject[0].name}</div>
                        <div className="subject-professor">{subject[0].professor.join(" | ")} - {preset.type}</div>
                        </div>

                })
            }
        </div>
    )
}

export default Schedule;