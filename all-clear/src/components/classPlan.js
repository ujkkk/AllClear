
import React, {useState, useEffect} from "react";
import "../css/classPlan.css"


const ClassPlan =({id}) =>{

    return (
        <div style={{width:"680px", position:"absolute"}}>
            <table border={1}   style={{ width:"100%"}}>
                <tbody  width={"100%"}>
                    <tr ><td colSpan={4}><h3>수업 계획서</h3></td></tr>  
                    <tr >
                        <td colSpan={1}>
                            <div className="print-head">과목명</div>
                            <div className="print-body">알고리즘</div>
                        </td>
                        <td colSpan={3}>
                            <div className="print-head">이수구분</div>
                            <div className="print-body">전공선택</div>
                        </td>
                    </tr>  
                    <tr >
                        <td colSpan={1}>
                            <div className="print-head">수업시간 및 강의실</div>
                            <div className="print-body">목 1시~2시/공학관 201</div>
                        </td>
                        <td colSpan={3}>
                            <div className="print-head">수강대상</div>
                            <div className="print-body">3학년</div>
                        </td>
                    </tr>                         
                </tbody>
            </table>
        </div>
    )
}

export default ClassPlan;