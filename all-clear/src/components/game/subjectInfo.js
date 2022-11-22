import React, { useEffect } from "react";


// 수강신청게임 장바구니 및 교과목 신청 목록
const SubjectInfo = ({ classData, subjectsData, addClass = f => f }) => {

    return (
        <div style={{ width: "800px", height: "130px", border: "1px solid black", fontFamily: "Nanum-Gothic" }}>
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: "390px" }}>
                            {`[V023005]`} {/*{subject.code} */} {subjectsData.name}
                            
                        </td>

                        <td style={{ width: "25px" }}>
                            {classData.type} |
                        </td>
                        <td style={{ width: "45px" }}>
                            {/*subject.class.map(elements => { return elements.major_type })*/ `전선`} |
                        </td>
                        <td style={{ width: "55px" }}>
                            {/*subject.class.map(elements => { return elements.credit })*/ `3학점`} |
                        </td>
                        <td style={{ width: "45px" }}>
                            {/*subject.class.map(elements => { return elements.dayAndNight })*/ `주간`} |
                        </td>
                        <td style={{ width: "55px" }}>
                            {/*subject.class.map(elements => { return elements.year })*/ subjectsData.grade} |
                        </td>
                        <td style={{ width: "60px" }}>
                            {subjectsData.professor.join(", ")} |
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
        </div>
    );
};
export default SubjectInfo;
/* { {gameData.map(subject =>{return console.log(`${subject.code} - ${subject.name}`) }) } } */