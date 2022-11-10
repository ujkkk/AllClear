import React, { useState } from "react";

import SubjectList from "../components/plan/subjectList";
import Detail from "../components/plan/detail";
import Essential from "../components/plan/essential";
import Banners from "../components/banners";
import "../css/planComponent.css";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
  const [tracks, setTracks] = useState([""]);
  const [grade, setGrade] = useState([]);
  const [codes, setCode] = useState(["전필", "전선"]);
  const [search, setSearch] = useState("");
  const changeTracks=arr=>setTracks(arr);
  return (
    <>
      <Banners />
      <div id="page-container">
        <h3>개설 교과목 검색</h3>
        <Essential tracks={tracks} changeTracks={changeTracks}/>
        <Detail title={DETAIL_SEARCH} grade={grade} codes={codes} search={search} 
                  setGrade={setGrade} setCode={setCode} setSearch={setSearch}></Detail>
        <SubjectList tracks={tracks} grade={grade} codes={codes} search={search} />
      </div>
    </>
  );
}