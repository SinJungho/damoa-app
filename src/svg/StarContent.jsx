import React from "react";
import style from "../css/Rating.module.css";

export default function StarContent() {
  return (
    <svg
      className={style.starContent}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.56718 2.9156C9.7273 2.53062 10.2727 2.53062 10.4328 2.9156L12.2044 7.17514C12.2719 7.33744 12.4246 7.44833 12.5998 7.46238L17.1983 7.83104C17.6139 7.86436 17.7825 8.38304 17.4658 8.65429L13.9622 11.6555C13.8287 11.7699 13.7704 11.9493 13.8112 12.1203L14.8816 16.6076C14.9784 17.0132 14.5371 17.3338 14.1813 17.1164L10.2443 14.7117C10.0943 14.6201 9.90565 14.6201 9.75564 14.7117L5.81865 17.1164C5.46283 17.3338 5.02161 17.0132 5.11836 16.6076L6.18877 12.1203C6.22955 11.9493 6.17125 11.7699 6.03776 11.6555L2.53416 8.65429C2.2175 8.38304 2.38602 7.86436 2.80164 7.83104L7.40018 7.46238C7.5754 7.44833 7.72803 7.33744 7.79553 7.17514L9.56718 2.9156Z"
        stroke="#999999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
