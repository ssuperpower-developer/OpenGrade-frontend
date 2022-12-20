import "../css/MainPage.css";
import MainBtn from "./MainBtn";
import { useState } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

export default function MainPage() {
  //   const btnList = ["1", "2", "3", "4"];
  const [isPressBtn, setIsPressBtn] = useState([true, false, false, false]);
  const handlePressBtn = (index) => {
    const newBtnList = Array(4).fill(false);
    newBtnList[index] = true;
    setIsPressBtn(newBtnList);
  };

  // 차트 데이터
  const data = [
    {
      id: "바보들",
      data: [
        {
          x: 68,
          y: 112,
        },
        {
          x: 95,
          y: 39,
        },
        {
          x: 4,
          y: 87,
        },
        {
          x: 17,
          y: 21,
        },
        {
          x: 71,
          y: 5,
        },
        {
          x: 20,
          y: 115,
        },
        {
          x: 61,
          y: 23,
        },
        {
          x: 31,
          y: 100,
        },
        {
          x: 49,
          y: 97,
        },
        {
          x: 45,
          y: 47,
        },
        {
          x: 94,
          y: 84,
        },
        {
          x: 23,
          y: 47,
        },
        {
          x: 39,
          y: 45,
        },
        {
          x: 27,
          y: 24,
        },
        {
          x: 16,
          y: 4,
        },
        {
          x: 21,
          y: 52,
        },
        {
          x: 53,
          y: 83,
        },
        {
          x: 69,
          y: 97,
        },
        {
          x: 1,
          y: 3,
        },
        {
          x: 16,
          y: 36,
        },
        {
          x: 11,
          y: 20,
        },
        {
          x: 96,
          y: 110,
        },
        {
          x: 41,
          y: 118,
        },
        {
          x: 20,
          y: 84,
        },
        {
          x: 30,
          y: 71,
        },
        {
          x: 45,
          y: 93,
        },
        {
          x: 76,
          y: 98,
        },
        {
          x: 75,
          y: 12,
        },
        {
          x: 26,
          y: 105,
        },
        {
          x: 56,
          y: 104,
        },
        {
          x: 76,
          y: 47,
        },
        {
          x: 98,
          y: 25,
        },
        {
          x: 64,
          y: 76,
        },
        {
          x: 8,
          y: 36,
        },
        {
          x: 78,
          y: 43,
        },
        {
          x: 26,
          y: 102,
        },
        {
          x: 78,
          y: 13,
        },
        {
          x: 64,
          y: 103,
        },
        {
          x: 61,
          y: 112,
        },
        {
          x: 54,
          y: 57,
        },
        {
          x: 38,
          y: 113,
        },
        {
          x: 75,
          y: 108,
        },
        {
          x: 28,
          y: 68,
        },
        {
          x: 41,
          y: 111,
        },
        {
          x: 4,
          y: 86,
        },
        {
          x: 96,
          y: 82,
        },
        {
          x: 95,
          y: 97,
        },
        {
          x: 54,
          y: 106,
        },
        {
          x: 23,
          y: 111,
        },
        {
          x: 50,
          y: 74,
        },
      ],
    },
  ];

  return (
    <div>
      <div id="title">
        <span id="nickname">공허한 정약용</span>
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
              <span id="nicknameInBox">공허한 정약용</span>님의 순위는 전체
              융합특성화자유전공학부 150명 중 17등으로 예상됩니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
