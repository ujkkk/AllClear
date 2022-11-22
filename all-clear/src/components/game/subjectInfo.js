import React, { useEffect } from "react";
import "../../css/gameScreen.css";
import subjectList from "../../data/subjectList.json"


// // 수강신청게임 장바구니 및 교과목 신청 목록
// const SubjectInfo=({subject, gameSetInfo, sec})=>{

//     var maxNum = 40;
//     var data = sec*(maxNum)/gameSetInfo.runTime
//     var subjectData = subjectList.filter((data) => data.subject_id == subject.subject_id)
//    return(
//     <div style={{ width:"800px", height:"130px", border: "1px solid black", fontFamily : "Nanum-Gothic"}}>
//         <table style={{marginLeft : "20px", width : "800px"}} >
//             <tbody>
//                 <tr>
//                     <td style={{width : "400px"}}>
//                         {subjectData[0].code} {subjectData[0].name}
//                     </td>
                    
//                     <td style={{width : "285px"}}>
                    
//                         {subject.type} | {"전선"} | {"3학점"} | {"주간"} | {subjectData.map(elements => {return elements.grade})} | {subjectData[0].professor.join(", ")}
                    
//                     </td>


// 수강신청게임 장바구니 및 교과목 신청 목록
const SubjectInfo = ({ classData, subjectsData, addClass = f => f ,gameSetInfo, sec}) => {
     var maxNum = 40;
     var data = sec*(maxNum)/gameSetInfo.runTime
     //var subjectData = subjectList.filter((data) => data.subject_id == subject.subject_id)
    return (
        <div style={{ width: "800px", height: "130px", border: "1px solid black", fontFamily: "Nanum-Gothic" }}>
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: "390px" }}>
                            {`[V023005]`} {/*{subject.code} */} {subjectsData.name}


                        </td>

                        <td style={{ width: "285px" }}>
                            {classData.type} | {"전선"} | {"3학점"} | {"주간"} | {subjectsData.grade} | {subjectsData.professor.join(", ")}
                        </td>




                        <button onClick={() => addClass({
                            subject_id: subjectsData.subject_id, type: classData.type, name: subjectsData.name,
                            dayOfWeek: classData.dayOfWeek, start_time: classData.start_time, end_time: classData.end_time
                        })} style={{
                            marginTop: "8px", marginLeft: "60px", backgroundColor: "#2AAA45",
                            border: "none", height: "33px", color: "white", borderRadius: "5px"
                        }}>
                            신청
                        </button>
                    </tr>
                </tbody>
            </table>
            <table border="1" style={{ marginLeft: "20px", float: "left", width: "300px", textAlign: "center" }}>
                <tbody>
                    <tr>
                        <td style={{ width: "50px" }}> 타과1</td>
                        <td style={{ width: "50px" }}> 타과2</td>
                        <td style={{ width: "50px" }}> 타과3</td>
                        <td style={{ width: "50px" }}> 타과4</td>
                        <td style={{ width: "50px" }}> 편입</td>
                        <td style={{ width: "50px" }}> 자과</td>

                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>{Math.round(data)}</td>
                    </tr>
                </tbody>
            </table>
            {/* <table style={{ float: "left", width: "95px" }}>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: "155px", fontSize: "13px", color: "#1CC8E8" }}>
                <tbody>
                    <tr>
                        <td>수업 장소</td>
                    </tr>
                </tbody>
            </table>
       
               
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>{Math.round(data)}</td>
                                
                </tr>
            </tbody>
        </table> */}
        <table style={{float : "left", width : "95px"}}>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <table style={{width : "155px",fontSize : "13px", color : "#1CC8E8"}}>
            <tbody>
                <tr>
                    <td>수업 장소</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
};
export default SubjectInfo;
/* { {gameData.map(subject =>{return console.log(`${subject.code} - ${subject.name}`) }) } } */