
import React from "react";
import "../../css/detail.css"
import detailData from "../../data/detail.json";
import DetailGrade from "./detailGrade";
import DetailMajor from "./detailMajor";
import DetailTime from "./detailTime";
import DetailRowSearch from "./detailRowSearch";

//02. 세부사항 component
const Detail =({title, grade, codes, search,changeGrade,setCode,setSearch}) =>{

    
    return (
        <div className="datail-warp">
            <h4>{title}</h4>
            <table cellPadding={5} cellSpacing={0} border={1} width={"50%"}>
                <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
                </colgroup>
                <tbody>
                    <DetailGrade rowTitle="학년" rowData={detailData.grade} grade={grade} changeGrade={changeGrade}/> 
                    <DetailMajor rowTitle="구분" rowData={detailData.major_sortation} setCode={setCode}/> 
                    <DetailTime rowTitle="시간대" rowData={detailData.time} />
                    <DetailRowSearch rowTitle="강의명" setSearch={setSearch}/>                                   
                </tbody>
            </table>
        </div>
    )
}

export default Detail;