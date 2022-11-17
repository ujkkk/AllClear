import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Banners from "../components/banners";
import LikeClassList from "../components/preset/likeClassList";
import Schedule from "../components/preset/schedule";
import SearchClassList from "../components/preset/searchClassList";

export default function Page2() {
  const [likeSub, setLikeSub] = useState([{ subject_id: 1, type: "8" }, { subject_id: 1, type: "C" }]);
  const { likeClasses, changeLikeClasses } = useOutletContext();
  const [preset, setPreset] = useState([]);
  const [presetTime, setPresetTime] = useState([]);

  const checkPresetTime = (check1, check2) => {
    let startTime1 = check1.start_time.replace(":","")
    let endTime1 = check1.end_time.replace(":","")

    let startTime2 = check2.start_time.replace(":","")
    let endTime2 = check2.end_time.replace(":","")

    if(startTime1 >= endTime2 || endTime1 <= startTime2)
      return true
    else 
      return false
  }

  const presetAddClass = (addClass) => {
    let overlap = false
    preset.map((pre) => {
      if (pre.subject_id === addClass.subject_id && pre.type === addClass.type) {
        overlap = true
        alert("해당 과목이 preset에 존재합니다")
        return
      }
      else if(pre.dayOfWeek == addClass.dayOfWeek && !checkPresetTime(pre, addClass)) {
        overlap = true
        alert("해당 과목 시간에 과목이 preset에 존재합니다")
        return
        
      }
    })
    if (overlap == false) {
      setPreset([...preset, addClass])
    }
    overlap = false

    console.log(addClass);
    console.log(preset);
  }

  return (
    <>
      <Banners />
      <div id="page-container">
        <h3>시간표 Preset</h3>
        <Schedule presetClass={preset} />
        <LikeClassList likeSub={likeSub} setPreset={presetAddClass} />
        <SearchClassList setPreset={presetAddClass} />
      </div>
    </>
  );
}