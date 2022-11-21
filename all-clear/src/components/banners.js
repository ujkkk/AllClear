import React from "react";
import { Link } from "react-router-dom";
import "../css/banners.css";

import bugiIcon from '../static/bugiIcon.png'
import planIcon from '../static/planIcon.png'
import presetIcon from '../static/presetIcon.png'
import gameIcon from '../static/gameIcon.png'
import homeIcon from '../static/homeIcon.png'

const Banners = ({height}) => (
  <div id="banners"  style={{height:height}}>
    <img id="bugi-icon" src={bugiIcon} />
    <nav>
      <Link className="option" to="/page1"><img className="option-icon" src={planIcon} /><br/>교과목 검색</Link> <br />
      <br/>
      <Link className="option" to="/page2"><img className="option-icon" src={presetIcon} /><br/>교과목 preset</Link> <br />
      <br/>
      <Link className="option" to="/page3"><img className="option-icon" src={gameIcon} /><br/>수강신청 연습</Link> <br />
      <br/>
      <Link className="option" to="/"><img className="option-icon" src={homeIcon} /><br/>홈으로</Link> <br />
      <br/>
    </nav>
  </div>
);

export default Banners;