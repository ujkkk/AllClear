import React, { useEffect } from "react";
import DetailRowComponent from "./detailRowObject";

//02 새부사항 테이블의 학년 줄
const DetailGrade = ({ rowTitle, rowData = [],grade, changeGrade}) => {
    useEffect(()=>{
        if(grade.length===rowData.length-1){
            changeGrade(rowData.map(data=>data));
        }
    },[grade,rowData,changeGrade]);
    const setGradeData=(prop)=>{
        if(prop=="전체"){
            changeGrade(rowData.map(data=>data));
            return;
        }
        if((grade.indexOf(prop)!==-1)&&grade.indexOf("전체")!==-1){
            changeGrade(grade.filter((data)=>data===prop))
            return;
        }
        (grade.indexOf(prop)!==-1)?
        changeGrade(grade.filter(item=>prop!==item)):
        changeGrade([...grade,...rowData.filter(data=>data===prop)])
            
    }
    return (
        <tr style={{ border: "1px solid gray" }}>
            <th>{rowTitle}</th>
            <td className="my-detail-right">
                {                  
                    rowData.map((data, idx) => <DetailRowComponent color={grade.filter(item=>item===data).join()===data} title={data} key={idx} setData={setGradeData} />)
                }
            </td>
        </tr>
    )
}

export default DetailGrade;