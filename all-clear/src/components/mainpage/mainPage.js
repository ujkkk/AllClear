import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../css/slide.css";
import "../../css/mainPage.css"

import imgUrl1 from "../../static/mainPage5.png"
import imgUrl2 from "../../static/mainPage4.png"
import imgUrl3 from "../../static/mainPage6.png"

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imgUrls = [imgUrl1,imgUrl2,imgUrl3]
  useEffect(()=>{
    const timer = setInterval(()=>{
        setActiveIndex(activeIndex => activeIndex+1)
    },6000)
    return ()=> clearInterval(timer)
    
  },[])

  return (
    <>
    {/* 배경 깜밖임 제거를 위해 만든 div태그 -> 메모리에 미리 이미지를 로딩하여 적재하는 방법 사용 */}
    <div style= {{ backgroundImage: `url(${imgUrls[0]})`,width:"0%",height:"0%"}}></div>
    <div style= {{backgroundImage: `url(${imgUrls[1]})`,width:"0%",height:"0%"}}></div>
    <div style= {{backgroundImage: `url(${imgUrls[2]})`,width:"0%",height:"0%"}}></div>
   <div id="main-page-wrap" style = {{ backgroundImage: `url(${imgUrls[activeIndex%3]})`,width : "100%", height:"100%"}}>
        {/* backgroundImage: `url(${imgUrl})` */}
        {/*,backgroundColor:activeIndex%2==0? "red":"blue",  */}
        <div id="main-page-contents">
            <p id="main-page-slogan">완벽한 수강 신청을 위한 웹 서비스</p>
            <p id="main-page-logo">“  All-Clear  ”</p>
            <div class="main-page-division"></div>
            <div id="main-page-info">
            All-Clear 는 ' 한성대학교 학생들의 완벽한 수강신청 '을 목적으로하는 서비스입니다. 한성대학교 종합정보시스템의 교과목 및 수업 계획서
            조회 페이지를 리뉴얼 하여 보다 편리하게 전공 선택 및 전공 필수 과목을 확인하고, 시간표 프리셋 기능을 통해 다양한 경우의 수를 
            고려한 시간표를 계획해볼 수 있습니다.  adsfqewfefqweadgwgwadcfaws efwqfrdDSfasfadsfew~.
            </div>
            <div class="main-page-division"></div>
            <nav id ="main-page-nav">
                <Link to="./page1">교과목 검색{" "}|</Link> 
                <Link to="./page2">교과목 preset{" "}|</Link> 
                <Link to="./page3">수강신청 연습{" "}</Link>
            </nav> 
        </div>
   </div>
   </>
  );
};

export default MainPage;