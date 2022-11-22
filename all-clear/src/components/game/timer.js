import React from "react";
import { useState, useEffect,useRef} from "react";

const Timer = ({sec, changeSec}) =>{

    console.log(sec)
  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  const initialTime = useRef(sec);
  const interval = useRef(null);

//   const [sec, setSec] = useState(2.4);

  useEffect(() => {
        interval.current = setInterval(() => {
        initialTime.current -= 0.1;
        changeSec((initialTime.current % 60).toFixed(1));
        }, 100)
        return () => clearInterval(interval.current);
    }, []);

    // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if ( sec <= 0) {
        changeSec(0)
      clearInterval(interval.current);
    }
  }, [sec]);
    return (
        <>
           <span style={{fontSize:"30px", color:"red"}}>{sec}</span>
        </>
    )
}

export default Timer;