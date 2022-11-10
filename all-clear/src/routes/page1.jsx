import React, { useState } from "react";

import SubjectList from "../components/plan/subjectList";
import Detail from "../components/plan/detail";
import Essential from "../components/plan/essential";
import Banners from "../components/banners";
import "../css/planComponent.css";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
  const [tracks, setTracks] = useState([""]);
  const [colorOn,setColorOn]=useState(false);
  const [grade, setGrade] = useState([]);
  const [codes, setCode] = useState([]);
  const [search, setSearch] = useState("");
  const changeTracks=arr=>setTracks(arr);
  const changeGrade=arr=>setGrade(arr);
  const changeCode=arr=>setCode(arr);
  const changeColorState=(state)=>setColorOn(state);
  const changeSearch=props=>setSearch(props)
  return (
    <>
      <Banners />
      <div id="page-container">
        <h3>개설 교과목 검색</h3>
        <Essential tracks={tracks} changeTracks={changeTracks} changeColorState={changeColorState} changeGrade={changeGrade} changeCode={changeCode}/>
        <Detail title={DETAIL_SEARCH} grade={grade} codes={codes} colorOn={colorOn}
                  changeGrade={changeGrade} changeCode={changeCode} changeSearch={changeSearch}></Detail>
        <SubjectList tracks={tracks} grade={grade} codes={codes} search={search} />
      </div>
    </>
  );
}