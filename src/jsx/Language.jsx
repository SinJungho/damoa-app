import React from "react";
import style from "../css/Language.module.css";

export default function Language() {
  return (
    <div className={style.language}>
      <div className={style.language__content}>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M8.75 17.5L13.125 8.125L17.5 17.5M10 15H16.25M2.5 4.68447C4.13797 4.48022 5.8067 4.375 7.5 4.375M7.5 4.375C8.43401 4.375 9.36054 4.40701 10.2786 4.47M7.5 4.375V2.5M10.2786 4.47C9.31361 8.88151 6.40723 12.5668 2.5 14.5852M10.2786 4.47C11.0249 4.5212 11.7655 4.59288 12.5 4.68447M8.67606 11.7635C7.32129 10.3849 6.23087 8.74575 5.48694 6.92805"
            stroke="#999999"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>언어</p>
      </div>
      <div className={style[`language__btn-group`]}>
        <button>한국어</button>
        <button>영어</button>
        <button>중국어</button>
        <button>일본어</button>
        <button>기타</button>
      </div>
    </div>
  );
}
