import React from "react";
import SubjectList from "../components/SubjectList";
import Detail from "../components/Detail";

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