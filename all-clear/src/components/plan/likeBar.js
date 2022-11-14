import React, { useEffect, useReducer, useState } from "react";
import ClassComponent from "./classComponent";

const LikeBar=({changeLikeClasses, subject_id=0,classes=[]})=>{
    

    const [likes, setLikes] = useState(Array.from({length : 10}, ()=>false));
    
    //다른 과목을 클릭하면 LikeBar 초기화
    useEffect(()=>{
        setLikes(Array.from({length : 10}, ()=>false))
    },[classes])

    //하트 클릭에 따라 데이터 추가
    useEffect(() =>{
        var newClasses = likes.map((like,i) => (like == true)? changeLikeClasses(subject_id, classes[i].type): false)
        var obj = {subject_id, newClasses}
          
    }, [likes])

    const toggleLike = (e, index) =>{
        //이벤트 핸들링 막기 - 부모와 자식 이벤트 겹치는 경우 부모 이벤트도 실행되는 현상 없애기
        e.stopPropagation() 
        const newLikes = likes.map((like, i) => index == i ? !like : like);
        setLikes(newLikes);
        
    }

    // 하트 클릭에 따라 id 와 분반 정보를 preSet용 배열에 삽입
    // 누른 class 정보 필요

    return (
        <div > 
        <span>"</span>
       { classes.map((aClass, i) =>  
        <ClassComponent key={i} aClass={aClass} like ={likes[i]}  onSelect={(e) =>toggleLike(e,i,)} />)
       }
        </div>
    );
}
export default LikeBar;