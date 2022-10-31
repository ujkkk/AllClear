import React, { useState } from "react";

import SubjectList from "../components/subjectList";
import Detail from "../components/detail";
import Search from "../components/search";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
  const [tracks, setTracks] = useState(["모바일소프트웨어", "웹공학", ""]);
  const [grade, setGrade] = useState([2, 3]);
  const [codes, setCode] = useState(["전필", "전선"]);
  const [search, setSearch] = useState("");
  return (
    <>
      <Search />
      <Detail title={DETAIL_SEARCH}></Detail>
      <SubjectList tracks={tracks} grade={grade} codes={codes} search={search}></SubjectList>
    </>
  );
}