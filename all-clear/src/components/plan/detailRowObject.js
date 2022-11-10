import React from "react";

//테이블 버튼 요소
const DetailRowComponent = ({color,colorOn,title, setData}) =>{
    const name=color&&colorOn?"-active":"";

    return (
        //누르면 클래스 이름을 바꿔서 다른 css 적용
        <label className={"detail-label" + name} onClick={() => {setData(title);}} 
            style={{border:"2px solid gray"}}>{title}</label>
    )

}

export default DetailRowComponent;