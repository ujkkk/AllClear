import React from "react";
import Search from "../components/search";

import Detail from "../components/Detail";
export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
    return (
      <React.Fragment>
        <Search/>
        <div id="required-selection">required-selection</div>
        <Detail title={DETAIL_SEARCH}></Detail>
        <div id="subjects-list">subjects-list</div>
      </React.Fragment>
    );
  }