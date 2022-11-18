
import React from "react";
import "../../css/detail.css"
import detailData from "../../data/detail.json";
import DetailColComponent from "./detailColComponent";
import DetailRowSearch from "./detailRowSearch";

//02. 세부사항 component
const Detail =({title, grade, codes, colorOn,gradeSwitch,majorSwitch,changeGrade,changeCode,changeSearch,changeGradeSwitch,changeMajorSwitch}) =>{

    
    return (
        <div className="datail-warp">
            <h4>{title}</h4>
            <table cellPadding={5} cellSpacing={0} border={1} width={"50%"}>
                <colgroup>
                    <col width={"15%"}></col>
                    <col width={"85%"}></col>
                </colgroup>
                <tbody>
                    <DetailColComponent rowTitle="학년" rowData={detailData.grade} colorOn={colorOn} buttonSwitch={gradeSwitch} changeSwitch={changeGradeSwitch} items={grade} changeItems={changeGrade}/> 
                    <DetailColComponent rowTitle="구분" rowData={detailData.major_sortation} colorOn={colorOn} buttonSwitch={majorSwitch} changeSwitch={changeMajorSwitch} items={codes} changeItems={changeCode}/> 
                    <DetailRowSearch rowTitle="강의명" changeSearch={changeSearch}/>                                   
                </tbody>
            </table>
        </div>
    )
}

export default Detail;