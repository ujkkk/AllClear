import React from "react";
import "../../css/gameScheduleList.css"
import classDivisionData from "../../data/classDivision.json";
import subjectsData from "../../data/subjectList.json";

//03. 교과목리스트 component
const ApplyImmediately = ({addClass}) => {

/*
onClick={() => addClass({
                            subject_id: subjectsData.subject_id, type: classData.type, name: subjectsData.name,
                            dayOfWeek: classData.dayOfWeek, start_time: classData.start_time, end_time: classData.end_time
                        })}
*/

    const checkAddClass = () => {

        const code = document.getElementById('input-code').value;
        const type = document.getElementById('input-type').value;

        console.log("############# "+code+" : "+type);

        subjectsData.map((sub)=>{
            if(sub.code === code){
                classDivisionData.map((classSub)=> {
                    if(classSub.subject_id === sub.subject_id){
                        classSub.class.map((data)=>{
                            if(data.type === type){
                                addClass({subject_id: sub.subject_id, type: type, name: sub.name, 
                                    professor: sub.professor, code: sub.code,
                                    dayOfWeek: data.dayOfWeek, start_time: data.start_time, end_time: data.end_time })
                            }
                        })
                    }
                })
            }
        })
    }

    return (
        <>
            <input type={"type"} id={"input-code"} size={"6"} placeholder={"과목코드"} style={{ textAlign: "center", fontSize: "18px", padding: "6px", textAlign: "left", width: "200px" }} />
            <input type={"type"} id={"input-type"} size={"6"} placeholder={"분반"} style={{ fontSize: "18px", padding: "6px", textAlign: "left", width: "200px" }} />
            <button id="btncss" type={"button"} onClick={() => checkAddClass()} style={{ marginLeft: "5px" }}>
                <span>바로신청</span>
            </button>
        </>
    )
}

export default ApplyImmediately;