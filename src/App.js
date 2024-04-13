import React, { useState } from "react";
import Date from "./jsx/Date";
import Language from "./jsx/Language";
import Rating from "./jsx/Rating";
import app from "./css/App.module.css";
import Genre from "./jsx/Genre";
import HotContent from "./jsx/HotContent";

function App() {
  return (
    <div className={app.bg}>
      <p className={app.title}>어떤 작품을 찾아볼까요?</p>
      {/*
       * date
       */}
      <Date />
      {/*
       * language
       */}
      <Language />
      {/*
       *별점
       */}
      <Rating />
      {/*
       *장르
       */}
      <Genre />
      {/* *지금 인기 있는 컨텐츠 */}
      <HotContent />
    </div>
  );
}

export default App;
