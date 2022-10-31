import React, { useState } from "react";
import "../css/subjects.css"
import subjectsData from "../data/subjectList.json";
import Subject from "./Subject";

//03. 교과목리스트 component
const SubjectList = () => {
    const [tracks, setTracks] = useState(["모바일소프트웨어", "웹공학"]);
    const [grade, setGrade] = useState([2,3]);
    let gradeCheck = 0;
    return (
        <div className="subjects-list-container">
            {
                grade.map((grade, idx) => (
                    subjectsData.map((subjects) => {
                        const trackCheck = tracks.reduce(
                            (reBool, track) =>
                                (subjects.tracks.reduce((bool, sub_tracks) => (sub_tracks.track == track) ? true : bool, false))
                                    ? true : reBool, false
                        )

                        if (trackCheck && grade == subjects.grade) {
                            if (gradeCheck != grade) {
                                gradeCheck = grade;
                                return (
                                    <>
                                        <h5 className="selected-grade">{grade}학년</h5>
                                        <hr />
                                        <Subject data={subjects}></Subject>
                                    </>
                                )
                            }
                            else
                                return <Subject data={subjects}></Subject>
                        }
                    })
                ))
            }
        </div>
    )
}

export default SubjectList;