import React from "react";
import "../../css/classPlan.css"

//03. 교과목리스트 component
const ClassComponent = ({type}) => {

    return (
        //누르면 클래스 이름을 바꿔서 다른 css 적용
        <>
        {/* <h3>classComponent</h3> */}
        <label className="class-component-label"
            style={{border:"2px solid gray"}}>{type}</label>
        </>
    )
}

export default ClassComponent;