import React from "react";

import Detail from "../components/detail";
import SubjectList from "../components/SubjectList";
import Search from "../components/search";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
    return (
      <>
        <div id="required-selection">required-selection</div>
        <Detail title={DETAIL_SEARCH}></Detail>
        <SubjectList></SubjectList>
      </>
    );
  }