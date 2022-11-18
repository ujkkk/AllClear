import React, { useEffect } from "react";


// 수강신청게임 장바구니 및 교과목 신청 목록
const SubjectInfo=({subject})=>{

   return(
    <div style={{ width:"800px", height:"130px", border: "1px solid black", fontFamily : "Nanum-Gothic"}}>
        <table>
            <tbody>
                <tr>
                    <td style={{width : "390px"}}>
                        {subject.code} {subject.name}
                    </td>
                    
                    <td style={{width : "25px"}}>
                        {subject.class.map(elements => {return elements.type})} |
                    </td>
                    <td style={{width : "45px"}}>
                        {subject.class.map(elements => {return elements.major_type})} |
                    </td>
                    <td style={{width : "55px"}}>
                        {subject.class.map(elements => {return elements.credit})} |
                    </td>
                    <td style={{width : "45px"}}>
                        {subject.class.map(elements => {return elements.dayAndNight})} |
                    </td>
                    <td style={{width : "55px"}}> 
                        {subject.class.map(elements => {return elements.year})} |
                    </td>
                    <td style={{width : "60px"}}>
                        {subject.professor} |
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