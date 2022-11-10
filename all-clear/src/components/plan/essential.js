import React, { useState } from "react";
import "../../css/essential.css"
import TableLabel from "./tableLabel";
import EssentialTable from "./essentialTable";
import EssentialLiberalTable from "./essentialLiberalTable";
//01. 필수 검색 옵션 컴포넌트
const Essential=({tracks, changeTracks})=>{
    const [option,setOption]=useState(1);
    const marginValue=["50px","5px"];
    const optionContent=["교양","전공"];

    const optionChange=(index)=>setOption(index);
    return (<div className="essential-warp">
            <h4>01. 필수 검색 옵션</h4>{
            optionContent.map((data,i)=>(
                <TableLabel key={i} color={i===option? true : false} index={i} content={data} marginValue={marginValue[i]} onSelect={optionChange}/> 
            ))
            }
            {
                option===1?<EssentialTable tracks={tracks} changeTracks={changeTracks}/>: <EssentialLiberalTable/>
            }
           
        </div>
    );
}
    

export default Essential;