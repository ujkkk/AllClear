import React from "react";
import "../css/subjects.css"
import subjectsData from "../data/subjectList.json";
import Subject from "./subject";

//03. 교과목리스트 component
const SubjectList = ({tracks, grade, codes, search}) => {

    let gradeCheck = 0;
    return (
        <div className="subjects_warp">
            {
                grade.map((grade) => (
                    subjectsData.map((subject) => {
                        const trackCheck = subject.tracks.reduce(
                            (bool, sub_track) =>
                                (tracks.reduce((trackBool, track) => (sub_track.track == track) ? true : trackBool, false) &&
                                    codes.reduce((codeBool, code) => (sub_track.code == code) ? true : codeBool, false)) ? true : bool, false)

                        if (trackCheck && grade == subject.grade && subject.name.includes(search)) {
                            if (gradeCheck != grade) {
                                gradeCheck = grade;
                                return (
                                    <>
                                        <h5 className="selected-grade">{grade}학년</h5>
                                        <hr />
                                        <Subject data={subject}></Subject>
                                    </>
                                )
                            }
                            else
                                return <Subject data={subject}></Subject>
                        }
                    })
                ))
            }
        </div>
    )
}

export default SubjectList;