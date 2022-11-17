import React, { useState } from "react";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Banners from "../components/banners";
import LikeClassList from "../components/preset/likeClassList";
import Schedule from "../components/preset/schedule";
import SearchClassList from "../components/preset/searchClassList";

export default function Page2() {
  const { likeClasses, changeLikeClasses } = useOutletContext();
  const [preset, setPreset] = useState({ preset1: [], preset2: [], preset3: [] });
  const [selectPreset, setSelectPreset] = useState([...preset.preset1]);
  const [presetNum, setPresetNum] = useState(0);

  const checkPresetTime = (check1, check2) => {
    let startTime1 = check1.start_time.replace(":", "")
    let endTime1 = check1.end_time.replace(":", "")

    let startTime2 = check2.start_time.replace(":", "")
    let endTime2 = check2.end_time.replace(":", "")

    if (startTime1 >= endTime2 || endTime1 <= startTime2)
      return true
    else
      return false
  }

  const presetAddClass = (addClass) => {
    let overlap = false
    let newPreset

    if (presetNum === 0) newPreset = preset.preset1
    else if (presetNum === 1) newPreset = preset.preset2
    else if (presetNum === 2) newPreset = preset.preset3

    newPreset.map((pre) => {
      if (pre.subject_id === addClass.subject_id && pre.type === addClass.type) {
        overlap = true
        alert("해당 과목이 preset에 존재합니다")
        return
      }
      else if (pre.dayOfWeek == addClass.dayOfWeek && !checkPresetTime(pre, addClass)) {
        overlap = true
        alert("해당 과목 시간에 과목이 preset에 존재합니다")
        return

      }
    })
    if (overlap == false) {
      if (presetNum === 0) {
        setPreset({ preset1: [...preset.preset1, addClass], preset2: [...preset.preset2], preset3: [...preset.preset3] });
        setSelectPreset([...preset.preset1, addClass]);
      }
      else if (presetNum === 1) {
        setPreset({ preset1: [...preset.preset1], preset2: [...preset.preset2, addClass], preset3: [...preset.preset3] });
        setSelectPreset([...preset.preset2, addClass]);
      }
      else if (presetNum === 2) {
        setPreset({ preset1: [...preset.preset1], preset2: [...preset.preset2], preset3: [...preset.preset3, addClass] });
        setSelectPreset([...preset.preset3, addClass]);
      }

    }
    overlap = false

    console.log(addClass);
    console.log(preset);
  }

  const presetDeleteClass = (subject_id, type) => {
    let newPreset

    if (presetNum === 0) newPreset = preset.preset1
    else if (presetNum === 1) newPreset = preset.preset2
    else if (presetNum === 2) newPreset = preset.preset3

    newPreset = newPreset.filter((preset) => {
      //console.log(`${preset.subject_id} !== ${subject_id} ||| ${preset.type} !== ${type}`)
      return (preset.subject_id !== subject_id || preset.subject_id === subject_id && preset.type !== type)
    })

    if (presetNum === 0) {
      setPreset({ preset1: [...newPreset], preset2: [...preset.preset2], preset3: [...preset.preset3] });
      setSelectPreset([...newPreset]);
    }
    else if (presetNum === 1) {
      setPreset({ preset1: [...preset.preset1], preset2: [...newPreset], preset3: [...preset.preset3] });
      setSelectPreset([...newPreset]);
    }
    else if (presetNum === 2) {
      setPreset({ preset1: [...preset.preset1], preset2: [...preset.preset2], preset3: [...newPreset] });
      setSelectPreset([...newPreset]);
    }
    console.log(preset);
  }

  useEffect(() => {
    if (presetNum === 0) {
      setSelectPreset([...preset.preset1]);
    }
    else if (presetNum === 1) {
      setSelectPreset([...preset.preset2]);
    }
    else if (presetNum === 2) {
      setSelectPreset([...preset.preset3]);
    }
  }, [presetNum])

  return (
    <>
      <Banners />
      <div id="page-container">
        <h3>시간표 Preset</h3>
        <Schedule presetClass={selectPreset} deleteClass={presetDeleteClass} setPresetNum={setPresetNum} />
        <LikeClassList likeSub={likeClasses} setPreset={presetAddClass} />
        <SearchClassList setPreset={presetAddClass} />
      </div>
    </>
  );
}