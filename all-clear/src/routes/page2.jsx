import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Banners from "../components/banners";
import LikeClassList from "../components/preset/likeClassList";
import Schedule from "../components/preset/schedule";
import SearchClassList from "../components/preset/searchClassList";

export default function Page2() {
  const [likeSub, setLikeSub] = useState([{subject_id: 1,type: "8"},{subject_id: 1, type: "C"}]);
  const {likeClasses,changeLikeClasses}=useOutletContext();
console.log(likeClasses);
  return (
    <>
    <Banners />
    <div id="page-container">
        <h3>시간표 Preset</h3>
        <Schedule likeSub={likeSub}/>
        <LikeClassList likeSub={likeSub}/>
        <SearchClassList />
      </div>
    </>
  );
}