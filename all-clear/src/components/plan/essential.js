import React from "react";
import "../../css/essential.css"
import EssentialTable from "./essentialTable";

//01. 필수 검색 옵션 컴포넌트
const Essential=({tracks, setTracks})=>(
        <div className="essential-warp">
            <h4>01. 필수 검색 옵션</h4>
            <EssentialTable tracks={tracks} setTracks={setTracks}/>
        </div>
);
    

export default Essential;