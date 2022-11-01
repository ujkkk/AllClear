import React, { useState } from "react";
import Banners from "../components/banners";
import StarRating from "../components/StarRating";

export default function Page2() {
  return (
    <>
    <Banners />
    <div id="page-container">
    <StarRating totalStars={5}/>
    </div>
    </>
  );
}