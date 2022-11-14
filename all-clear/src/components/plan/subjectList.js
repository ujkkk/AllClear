import React, {useState} from "react";
import "../../css/subjects.css"
import subjectsData from "../../data/subjectList.json";
import Subject from "./subject";
import DivisionData from "../../data/classDivision.json"
import LikeBar from "./likeBar";
//03. 교과목리스트 component
const SubjectList = ({tracks, grade, codes, search,likeClasses,changeLikeClasses}) => {

    let gradeCheck = 0;

    const [classes, setClasses] = useState([])
    const [selectedId, setSelectedId] = useState(1)
    //like bar의 class 정보 바꾸는  함수
    const onLike = (subject)=>{
            DivisionData.map(object => {
                // jon데이터의 subject id가 같다면 해당 과목의 클래스 정보들 setClasses
                if (object.subject_id == subject.subject_id) {
                    setClasses([...object.class]);  
                    setSelectedId(subject.subject_id)   
                }

            })
    }
    return (
        <div className="subjects-warp">
            <h4>03. 과목 선택</h4>
            {
                grade.map((grade) => (
                    subjectsData.map((subject, idx) => {
                        const trackCheck = subject.tracks.reduce(
                            (bool, subTrack) =>
                                (tracks.reduce((trackBool, track) => (subTrack.track == track) ? true : trackBool, false) &&
                                    codes.reduce((codeBool, code) => (subTrack.code == code) ? true : codeBool, false)) ? true : bool, false)

                        if (trackCheck && grade == subject.grade && subject.name.includes(search.trim())) {
                            if (gradeCheck != grade) {
                                gradeCheck = grade;
                                return (
                                    <>
                                        <h5 className="selected-grade">{grade}</h5>
                                        <hr />
                                        <Subject key={idx} data={subject} onLike={onLike}></Subject>
                                         
                                    </>
                                )
                            }
                            else
                                return <Subject  key={idx} data={subject}  onLike={onLike} ></Subject>
                        }
                    })
                ))
            }
            <LikeBar changeLikeClasses={changeLikeClasses} subject_id={selectedId} classes={classes} />   
        </div>
    )
}

export default SubjectList;