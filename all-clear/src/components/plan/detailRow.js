import React, { useState, useEffect } from "react";
import DetailRowComponent from "./detailRowObject";

//02 새부사항 테이블의 한 줄
const DetailRow = ({ rowTitle, rowData = [], grade, setGrade }) => {
    const setGradeData=(prop)=>{
        if(grade.includes(prop.split("학년")[0])){
            setGrade(grade.filter((data)=>data!==prop.split("학년")[0]))
            return;
        }
        setGrade([...grade,rowData.filter((data)=>data===prop).join().split("학년")[0]])
    }
    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map((data, idx) => <DetailRowComponent title={data} key={idx} setData={setGradeData} />)
                }
            </td>
        </tr>
    )
}

export default DetailRow