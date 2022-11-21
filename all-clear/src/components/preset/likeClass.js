import React, { useState } from "react";
import "../../css/likeSubject.css"
import classData from "../../data/classDivision.json";
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai'

//03. 관심과목
const LikeClass = ({ likeSub, addClass = f => f , likeType, onSelect}) => {

    const newLikeSub = classData.filter((data) => (
        likeSub.subject_id === data.subject_id
    ))

    const classType = newLikeSub[0].class.filter((data) => (
        likeSub.type === data.type
    ))

    return (
        // <Link to={`/datailPlan/${data.subject_id}`} target='_blank' width='300' height='300' style={{color:"black"}}>

        <div className="like-subject" onClick={() => addClass({
            subject_id: newLikeSub[0].subject_id, type: classType[0].type,
            dayOfWeek: classType[0].dayOfWeek, start_time: classType[0].start_time, end_time: classType[0].end_time
        })}>
            <div className="subject-name" >{newLikeSub[0].name}</div>
            <div className="preset-like-button">
                {likeType ? <AiTwotoneHeart size="25px" color="red"  onClick={(onSelect)} />
                    : <AiOutlineHeart size="25px"  onClick={(onSelect)} />}
            </div>
            <div className="subject-type">{classType[0].type}{"반 | "}
                {
                    newLikeSub[0].professor.join(" , ")
                }
            </div>
            <div className="subject-time">{classType[0].dayOfWeek} {classType[0].start_time} ~ {classType[0].end_time}</div>
        </div>

    )
}

export default LikeClass;