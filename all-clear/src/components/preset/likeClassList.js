import React,{useState} from "react";
import subjectsData from "../../data/subjectList.json";
import LikeClass from "./likeClass";

//03. 관심과목 리스트 component
const LikeClassList = ({likeSub, setPreset=f=>f, changeLikeClasses}) => {

    const [likes, setLikes] = useState(Array.from({length : 100}, ()=>true));

    const toggleLike = (e, index, like_obj) =>{
        //이벤트 핸들링 막기 - 부모와 자식 이벤트 겹치는 경우 부모 이벤트도 실행되는 현상 없애기
        e.stopPropagation() 
        const newLikes = likes.map((like, i) => index == i ? !like : like);

        if(newLikes[index]){
            changeLikeClasses(like_obj.subject_id, like_obj.type, 'add')
        }else{
            changeLikeClasses(like_obj.subject_id, like_obj.type, 'remove')
        }
       // console.log(likes)
       setLikes(newLikes);
    }

    const newLikeSub = 
        likeSub.filter((likeSub, i)=>(
            subjectsData.filter((sub, i)=>{
                return sub.subject_id==likeSub.subject_id
            })))
    
    return (
        <div id="lick-class-warp">
        <h4>02. 관심 과목</h4> 
        {newLikeSub.map((like, i)=><LikeClass key={i} likeSub={like} addClass={setPreset} likeType={true} onSelect={(e) =>toggleLike(e,i,like)}/>)}
        </div>
        )
}

export default LikeClassList;