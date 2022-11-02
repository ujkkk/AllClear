import React from "react";
import "../css/search.css"
import EssentialTable from "./essentialTable";


const Essential=({tracks, setTracks})=>(
        <div className="search_warp">
            <h2>01. 필수 검색 옵션</h2>
            <EssentialTable tracks={tracks} setTracks={setTracks}/>
        </div>
);
    

export default Essential;