import React from "react";
import SubjectInfo from "./subjectInfo"
import classDivisionData from "../../data/classDivision.json";
import subjectsData from "../../data/subjectList.json";
const ApplyClasses = ({ preset, selectedNum, gameSetInfo, addClass = f => f , sec}) => {


    //preset은 잘 받아 오는데 selectedNUm이 안된다.
    var selectedPreset = []
    if (selectedNum == 0)
        selectedPreset = [];
    else if (selectedNum == 1)
        selectedPreset = preset.preset1;
    else if (selectedNum == 2)
        selectedPreset = preset.preset2;
    else if (selectedNum == 3)
        selectedPreset = preset.preset3;

    return (
        <>
            {
                selectedPreset.map((subject) => {
                    return subjectsData.map((sub, idx) => {
                        if (subject.subject_id === sub.subject_id) {
                            return classDivisionData.map((classSub) => {
                                if (classSub.subject_id === sub.subject_id) {
                                    return classSub.class.map((data, i) => {
                                        if (subject.type === data.type)
                                            return <SubjectInfo key={String(idx) + String(i)} classData={data} subjectsData={sub} addClass={addClass} gameSetInfo={gameSetInfo} sec={sec} />
                                    })
                                }

                            })
                        }
                    })
                })
            }
            {/* {selectedPreset.map((subject) => <SubjectInfo subject={subject} addClass={addClass} />)} */}
        </>

    )
}


export default ApplyClasses;