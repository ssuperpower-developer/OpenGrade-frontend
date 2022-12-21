import "../css/MainPage.css";
import MainBtn from "./MainBtn";
import { useEffect, useState } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

export default function MainPage() {
  const [isPressBtn, setIsPressBtn] = useState([true, false, false, false]);
  const handlePressBtn = (index) => {
    const newBtnList = Array(4).fill(false);
    newBtnList[index] = true;
    setIsPressBtn(newBtnList);
  };

  // const [nickName, setNickName] = useState();
  // const handleNickName = () => {
  //   setNickName(localStorage.getItem("nickName"));
  // };

  // useEffect(() => {
  //   handleNickName();
  // });

  const nickName = localStorage.getItem("nickName");

  // 차트 데이터
  const data = [
    {
      id: "전체성적",
      data: [
        {
          x: 68,
          y: 112,
        },
        {
          x: 37,
          y: 120,
        },
      ],
    },
    {
      id: "내 성적",
      data: [
        {
          x: 95,
          y: 39,
        },
      ],
    },
  ];

  return (
    <div>
      <div id="title">
        <span id="nickname">{nickName}</span>
        <span id="titleText">님의 순위결과 조회입니다.</span>
      </div>
      <div id="main">
        <div id="right">
          <ResponsiveScatterPlot
            data={data}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: "linear", min: 0, max: "auto" }}
            xFormat=">-.2f"
            yScale={{ type: "linear", min: 0, max: "auto" }}
            yFormat=">-.2f"
            blendMode="multiply"
            axisTop={null}
            axisRight={null}
            colors={{ scheme: "category10" }}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "weight",
              legendPosition: "middle",
              legendOffset: 46,
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "size",
              legendPosition: "middle",
              legendOffset: -60,
            }}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 130,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 12,
                itemsSpacing: 5,
                itemDirection: "left-to-right",
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div id="left">
          <div>
            <div className="mainTitle">성적 산출 등수</div>
            <MainBtn
              btnText={"소프트웨어학부"}
              index={0}
              handlePress={handlePressBtn}
              isSelected={isPressBtn}
            />
            <MainBtn
              btnText={"컴퓨터학부"}
              index={1}
              handlePress={handlePressBtn}
              isSelected={isPressBtn}
            />
          </div>
          <div>
            <div className="mainTitle">실지원 등수</div>
            <MainBtn
              btnText={"소프트웨어학부"}
              index={2}
              handlePress={handlePressBtn}
              isSelected={isPressBtn}
            />
            <MainBtn
              btnText={"컴퓨터학부"}
              index={3}
              handlePress={handlePressBtn}
              isSelected={isPressBtn}
            />
          </div>
          <div id="ranking">
            <span>전체 등수</span>
            <span>17등 / 150명</span>
          </div>
          <div id="rankingTextBox">
            <span>
              <span id="nicknameInBox">"{nickName}"</span>님의 순위는 전체
              융합특성화자유전공학부 150명 중 17등으로 예상됩니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
