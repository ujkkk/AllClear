import React, {useState, useEffect} from "react";

//테이블 버튼 요소
const DetailRowComponent = ({title}) =>{

    const [checkd , setCheck] = useState(false);


    return (
        //누르면 클래스 이름을 바꿔서 다른 css 적용
        <label className={"detail-label" + (checkd? "-active": "")} onClick={() => setCheck(checkd => !checkd)} 
            style={{border:"2px solid gray"}}>{title}</label>
    )

}

export default DetailRowComponent;