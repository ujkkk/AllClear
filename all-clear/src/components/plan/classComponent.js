import React, { useState } from "react";
import "../../css/classPlan.css";
import {AiTwotoneHeart, AiOutlineHeart} from 'react-icons/ai'
//03. 교과목리스트 component
const ClassComponent = ({aClass, onSelect, like}) => {
    console.log(like)
    return (
        //누르면 클래스 이름을 바꿔서 다른 css 적용
        <>
        {/* <h3>classComponent</h3> */}
        <label className="class-component-label"
            style={{border:"2px solid gray"}}>
                { like? <AiTwotoneHeart size="25px" color="red" onClick={(onSelect)}/>
                :<AiOutlineHeart size="25px" onClick={onSelect}/>}
               <span style={{fontSize:"15px"}}>{` ${aClass.type}반 ${aClass.dayOfWeek} ${aClass.start_time}-${aClass.end_time} `}</span>
            </label>
        </>
    )
}

export default ClassComponent;