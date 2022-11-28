import React from "react";
import { useState, useEffect,useRef} from "react";

const Timer = ({sec, changeSec}) =>{

  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  const initialTime = useRef(sec);
  // setInterval 이나 setTimeout과 같은 함수는 clear 시켜주지 않으면 메모리를 많이 소모하기 때문에 
  // useRef로 선언하여 clear 할 수 있도록 한다
  //또한 useEffect를 쓰면 리렌더링하면서 값을 초기화 시켜 변경한 값이 유지가 안되기 때문에 useRef를 쓴다
  const interval = useRef(null);


//0.1초마다 sec 값을 0.1초 줄여준다
  useEffect(() => {
        interval.current = setInterval(() => {
        initialTime.current -= 0.1;
        sec -= 0.1;
        //sec -= 0.1;
        changeSec((sec % 60).toFixed(1));
        }, 100)
        return () => clearInterval(interval.current);
    }, []);

    // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if ( sec <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);
    return (
        <>
           <h2 style={{color:"red" }}>{sec}</h2>
        </>
    )
}

export default Timer;