import React, { useState } from "react";
import Date from "./jsx/Date";
import Language from "./jsx/Language";
import Rating from "./jsx/Rating";
import app from "./module-css/App.module.css";
// import date from "./module-css/Date.module.css";

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
      {/* 별점 */}
      <Rating></Rating>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexGrow: 0,
          flexShrink: 0,
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch",
            flexGrow: 0,
            flexShrink: 0,
            position: "relative",
            gap: 2,
          }}
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              flexGrow: 0,
              flexShrink: 0,
              width: 20,
              height: 20,
              position: "relative",
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z"
              stroke="#999999"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p
            style={{
              flexGrow: 1,
              width: 314,
              fontSize: 16,
              fontWeight: 500,
              textAlign: "left",
              color: "#999",
            }}
          >
            장르
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexGrow: 0,
            flexShrink: 0,
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              범죄
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              코미디
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              드라마
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              모험
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              키즈
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexGrow: 0,
            flexShrink: 0,
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              액션
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              판타지
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              에니메이션
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 0,
              flexShrink: 0,
              position: "relative",
              gap: 10,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 6,
              paddingBottom: 6,
              borderRadius: 6,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 500,
                textAlign: "left",
                color: "#fff",
              }}
            >
              스릴러
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          alignSelf: "stretch",
          flexGrow: 0,
          flexShrink: 0,
          position: "relative",
          gap: 10,
        }}
      >
        <p
          style={{
            alignSelf: "stretch",
            flexGrow: 0,
            flexShrink: 0,
            width: 336,
            fontSize: 16,
            fontWeight: 500,
            textAlign: "left",
            color: "#999",
          }}
        >
          지금 인기 있는 컨텐츠
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexGrow: 0,
            flexShrink: 0,
            width: 336,
            gap: 15,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              width: 336,
              position: "relative",
              gap: 20,
              padding: 12,
              borderRadius: 8,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              1
            </p>
            <img
              src="image.png"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: "47.13px",
                height: 50,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                height: 45,
                width: 167,
                position: "relative",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                파묘
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                한국 영화
              </p>
            </div>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: 24,
                height: 24,
                position: "relative",
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_88_325)">
                <path
                  d="M16.4188 6H23.276V12.8571"
                  stroke="#F24E1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.2759 6L13.5902 15.6857C13.43 15.8428 13.2146 15.9307 12.9902 15.9307C12.7659 15.9307 12.5505 15.8428 12.3902 15.6857L8.44738 11.7429C8.28715 11.5858 8.07174 11.4978 7.84738 11.4978C7.62302 11.4978 7.4076 11.5858 7.24738 11.7429L0.990234 18"
                  stroke="#F24E1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_88_325">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.133057)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              width: 336,
              position: "relative",
              gap: 20,
              padding: 12,
              borderRadius: 8,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              2
            </p>
            <img
              src="image.png"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: "47.13px",
                height: 50,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                height: 45,
                width: 167,
                position: "relative",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                웡카
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                외국 영화
              </p>
            </div>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: 24,
                height: 24,
                position: "relative",
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_88_335)">
                <path
                  d="M7.84729 18L0.990147 18L0.990148 11.1429"
                  stroke="#492BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.990164 18L10.6759 8.31429C10.8361 8.15723 11.0515 8.06926 11.2759 8.06926C11.5002 8.06926 11.7157 8.15723 11.8759 8.31429L15.8187 12.2571C15.979 12.4142 16.1944 12.5022 16.4187 12.5022C16.6431 12.5022 16.8585 12.4142 17.0187 12.2571L23.2759 6"
                  stroke="#492BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_88_335">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(24.1331 24) rotate(-180)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              width: 336,
              position: "relative",
              gap: 20,
              padding: 12,
              borderRadius: 8,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              3
            </p>
            <img
              src="image.png"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: "47.13px",
                height: 50,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                height: 45,
                width: 167,
                position: "relative",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                쿵푸 팬더
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                외국 애니메이션
              </p>
            </div>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: 24,
                height: 24,
                position: "relative",
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_88_359)">
                <path
                  d="M16.4188 6H23.276V12.8571"
                  stroke="#F24E1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.2759 6L13.5902 15.6857C13.43 15.8428 13.2146 15.9307 12.9902 15.9307C12.7659 15.9307 12.5505 15.8428 12.3902 15.6857L8.44738 11.7429C8.28715 11.5858 8.07174 11.4978 7.84738 11.4978C7.62302 11.4978 7.4076 11.5858 7.24738 11.7429L0.990234 18"
                  stroke="#F24E1E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_88_359">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.133057)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              width: 336,
              position: "relative",
              gap: 20,
              padding: 12,
              borderRadius: 8,
              background: "#141414",
              borderWidth: 1,
              borderColor: "#262626",
            }}
          >
            <p
              style={{
                flexGrow: 0,
                flexShrink: 0,
                fontSize: 20,
                fontWeight: 600,
                textAlign: "left",
                color: "#fff",
              }}
            >
              4
            </p>
            <img
              src="image.png"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: "47.13px",
                height: 50,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                flexGrow: 0,
                flexShrink: 0,
                height: 45,
                width: 167,
                position: "relative",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 16,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                삼체
              </p>
              <p
                style={{
                  alignSelf: "stretch",
                  flexGrow: 0,
                  flexShrink: 0,
                  width: 167,
                  fontSize: 14,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#999",
                }}
              >
                드라마, SF
              </p>
            </div>
            <svg
              width={25}
              height={24}
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                flexGrow: 0,
                flexShrink: 0,
                width: 24,
                height: 24,
                position: "relative",
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_88_355)">
                <path
                  d="M7.84729 18L0.990147 18L0.990148 11.1429"
                  stroke="#492BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.990164 18L10.6759 8.31429C10.8361 8.15723 11.0515 8.06926 11.2759 8.06926C11.5002 8.06926 11.7157 8.15723 11.8759 8.31429L15.8187 12.2571C15.979 12.4142 16.1944 12.5022 16.4187 12.5022C16.6431 12.5022 16.8585 12.4142 17.0187 12.2571L23.2759 6"
                  stroke="#492BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clippath id="clip0_88_355">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(24.1331 24) rotate(-180)"
                  />
                </clippath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
