import React, { useEffect } from "react";

import "../../css/gameScreen.css";
import subjectList from "../../data/subjectList.json"
// 수강신청게임 장바구니 및 교과목 신청 목록
const SubjectInfo=({subject})=>{

    var subjectData = subjectList.filter((data) => data.subject_id == subject.subject_id)
   return(
    <div style={{ width:"800px", height:"130px", border: "1px solid black", fontFamily : "Nanum-Gothic"}}>
        <table>
            <tbody>
                <tr>
                    <td style={{width : "390px"}}>
                        {subjectData[0].code} {subjectData[0].name}
                    </td>
                    
                    <td style={{width : "25px"}}>
                        {subject.type} |
                    </td>
                    <td style={{width : "45px"}}>
                        {"전선"} |
                    </td>
                    <td style={{width : "55px"}}>
                        {"3학점"} |
                    </td>
                    <td style={{width : "45px"}}>
                        {"주간"} |
                    </td>
                    <td style={{width : "55px"}}> 
                        {subjectData.map(elements => {return elements.grade})} |
                    </td>
                    <td style={{width : "60px"}}>
                        {subjectData[0].professor.join(", ")}
                    </td>

                    <button style={{marginTop : "8px",marginLeft : "60px" ,backgroundColor : "#2AAA45",
                     border : "none", height: "33px", color:"white", borderRadius:"5px"}}>
                        신청
                    </button>
                </tr>
            </tbody>
        </table>
    </div>
    );
};
export default SubjectInfo;
/* { {gameData.map(subject =>{return console.log(`${subject.code} - ${subject.name}`) }) } } */