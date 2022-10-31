import React from "react";

import SubjectList from "../components/subjectList";
import Search from "../components/search";
import Detail from "../components/Detail";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
    return (
      <>
        <Search/>
        <Detail title={DETAIL_SEARCH}></Detail>
        <SubjectList></SubjectList>
      </>
    );
  }