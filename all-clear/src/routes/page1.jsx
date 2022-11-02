import React, { useState } from "react";

import SubjectList from "../components/subjectList";
import Detail from "../components/detail";
import Essential from "../components/essential";
import Banners from "../components/banners";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
  const [tracks, setTracks] = useState([]);
  const [grade, setGrade] = useState([2, 3]);
  const [codes, setCode] = useState(["전필", "전선"]);
  const [search, setSearch] = useState("");
  console.log(tracks);
  return (
    <>
      <Banners />
      <div id="page-container">
        <Essential tracks={tracks} setTracks={setTracks}/>
        <Detail title={DETAIL_SEARCH}></Detail>
        <SubjectList tracks={tracks} grade={grade} codes={codes} search={search} />
      </div>
    </>
  );
}