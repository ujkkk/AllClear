import React, { useEffect, useReducer, useState } from "react";
import ClassComponent from "./classComponent";

const LikeBar=({changeLikeClasses, subject_id=0, name="", classes=[]})=>{
    

    const [likes, setLikes] = useState(Array.from({length : 10}, ()=>false));
    
    //다른 과목을 클릭하면 LikeBar 초기화
    useEffect(()=>{
        setLikes(Array.from({length : 10}, ()=>false))
    },[classes])


    const toggleLike = (e, index) =>{
        //이벤트 핸들링 막기 - 부모와 자식 이벤트 겹치는 경우 부모 이벤트도 실행되는 현상 없애기
        e.stopPropagation() 
        const newLikes = likes.map((like, i) => index == i ? !like : like);

        if(newLikes[index]){
            changeLikeClasses(subject_id, classes[index].type, 'add')
        }else{
            changeLikeClasses(subject_id, classes[index].type, 'remove')
        }
       // console.log(likes)
       setLikes(newLikes);
    }
    return (
        <div id ="likeDiv" > 
            <div id="likeDiv-inner">
            { classes.map((aClass, i) =>  
                <ClassComponent key={i} subject_id={subject_id} name={name} aClass={aClass} like ={likes[i]}  onSelect={(e) =>toggleLike(e,i,)} />)
            }
            </div>
        </div>
    );
}
export default LikeBar;