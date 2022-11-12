import React from "react";
import subjectsData from "../../data/subjectList.json";
import LikeClass from "./likeClass";

//03. 관심과목 리스트 component
const LikeClassList = ({likeSub}) => {
    const newLikeSub = 
        likeSub.filter((likeSub, i)=>(
            subjectsData.filter((sub, i)=>{
                return sub.subject_id==likeSub.subject_id
            })))
    
    return (
        <div id="lick-class-warp">
        <h4>02. 관심 과목</h4> 
        {newLikeSub.map((like)=><LikeClass likeSub={like}  />)}
        </div>
        )
}

export default LikeClassList;