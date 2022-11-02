import React from "react";
import "../css/search.css"
import SearchTable from "./searchTable";


const Search=({tracks, setTracks,setSearch})=>(
        <div className="search_warp">
            <h2>01. 필수 검색 옵션</h2>
            <SearchTable tracks={tracks} setTracks={setTracks} setSearch={setSearch}/>
        </div>
);
    

export default Search;