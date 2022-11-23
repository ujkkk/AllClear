import { Link } from "react-router-dom";
import React from "react";
import Carousel, { CarouselItem } from "./components/mainpage/carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MainPage from "./components/mainpage/mainPage";
import testImge from "./static/mainPage4.png"
export default function App() {
  return (
    <div className="App">
     
      <MainPage></MainPage>
      {/* <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel> */}
    </div>
  );
}

/* <h1>HOME</h1>
      <nav>
        
        <Link to="./page1">교과목 검색</Link> |{" "}
        <Link to="./page2">교과목 preset</Link> |{" "}
        <Link to="./page3">수강신청 연습</Link>{" "}
      </nav> */
    