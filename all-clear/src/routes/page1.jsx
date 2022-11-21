import React, { useState } from "react";

import SubjectList from "../components/plan/subjectList";
import Detail from "../components/plan/detail";
import Essential from "../components/plan/essential";
import Banners from "../components/banners";
import "../css/planComponent.css";
import { useOutletContext } from "react-router-dom";

export default function Page1() {

  const DETAIL_SEARCH = "02. 세부검색";
  // 트랙 정보
  const [tracks, setTracks] = useState([""]);
  // 세부검색 버튼 On/Off
  const [colorOn, setColorOn] = useState(false);
  // 학년 정보
  const [grade, setGrade] = useState([]);
  const [codes, setCode] = useState([]);
  // 검색 정보
  const [search, setSearch] = useState("");
  // 세부검색 학년, 구분 버튼이 초기에 전체만 뜰 수 있도록 선언한 상태
  const [gradeSwitch, setGradeSwitch] = useState(false);
  const [majorSwitch, setMajorSwitch] = useState(false);
  // 순수 함수를 구현하기 위해 선언한 함수들
  const changeSwitch = props => {
    setGradeSwitch(props);
    setMajorSwitch(props);
  }
  const changeGradeSwitch = props => setGradeSwitch(props);
  const changeMajorSwitch = props => setMajorSwitch(props);
  const changeTracks = arr => setTracks(arr);
  const changeGrade = arr => setGrade(arr);
  const changeCode = arr => setCode(arr);
  const changeColorState = (state) => setColorOn(state);
  const changeSearch = props => setSearch(props)
  const resetDetailButton = () => {
    changeGrade([]); changeCode([]); changeSearch("");
  }
  // Outlet컴포넌트의 context를 가져오는 훅
  const { likeClasses, changeLikeClasses } = useOutletContext();
  return (
    <>
      <Banners height={"1350px"} />
      <div id="page-container">
        <h3>개설 교과목 검색</h3>
        <Essential tracks={tracks} resetDetail={resetDetailButton} changeTracks={changeTracks} changeSwitch={changeSwitch} changeColorState={changeColorState} />
        <Detail title={DETAIL_SEARCH} grade={grade} codes={codes} colorOn={colorOn} gradeSwitch={gradeSwitch} majorSwitch={majorSwitch}
          changeGrade={changeGrade} changeCode={changeCode} changeSearch={changeSearch} changeGradeSwitch={changeGradeSwitch} changeMajorSwitch={changeMajorSwitch}></Detail>
          <SubjectList tracks={tracks} grade={grade} codes={codes} search={search} likeClasses={likeClasses} changeLikeClasses={changeLikeClasses} />
      </div>
    </>
  );
}