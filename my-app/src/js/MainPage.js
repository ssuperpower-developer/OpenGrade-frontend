import "../css/MainPage.css";
import MainBtn from "./MainBtn";
import { useEffect, useState } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function MainPage() {
  const scoreName = ["list.softScore", "list.comScore"];
  const getData = async (department, resultControl) => {
    try {
      const api = axios.create({
        baseURL: "http://34.64.123.6:8080",
        headers: {
          jwtToken: localStorage.getItem("wtw-token"),
        },
      });
      let result;
      console.log("hi");
      if (resultControl < 2) {
        result = await api.get(`/result/allranking/${department}`);
        console.log("hihi");
      } else {
        result = await api.get(`/result/applyranking/${department}`);
        console.log("hihi");
      }
      setGetList(result.data.allUsers);
      // console.log(result.data.allUsers);
      // result.data.allUsers.map((score, idx) => {
      //   // data[0].data.push({
      //   //   x: idx + 1,
      //   //   y: scoreName[resultControl % 2],
      //   // });

      // });
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const { state } = useLocation();
  const [isPressBtn, setIsPressBtn] = useState([true, false, false, false]);
  const departmentEng = ["S", "C"];
  const [btnIdx, setBtnIdx] = useState();
  const handlePressBtn = (index) => {
    setBtnIdx(index);
    const newBtnList = Array(4).fill(false);
    newBtnList[index] = true;
    getData(departmentEng[index % 2], index);
    setIsPressBtn(newBtnList);
  };

  const [getList, setGetList] = useState([]);
  const [userNumber, setUserNumber] = useState();
  useEffect(() => {
    getList?.map((score, idx) => {
      if (score.nickname === nickName) {
        setUserNumber(idx + 1);
      }
    });
    // console.log(getList);
    // getList?.map((list, idx) => {
    //   data[0].data.push({
    //     x: idx + 1,
    //     // y: ,
    //     y: list?.softScore,
    //   });
    // });
    // console.log(data[0].data);
  });

  const nickName = localStorage.getItem("nickName");

  // 차트 데이터
  // let data = [
  //   {
  //     id: "전체성적",
  //     data: [],
  //   },
  //   {
  //     id: "내 성적",
  //     data: [
  //       {
  //         x: userNumber,
  //         y: getList[userNumber - 1]?.soft_score,
  //       },
  //     ],
  //   },
  // ];

  const departmentList = [
    "융합특성화자유전공학부",
    "소프트웨어학부 지원자",
    "컴퓨터학부 지원자",
  ];

  return (
    <div>
      <div id="title">
        <span id="nickname">{nickName}</span>
        <span id="titleText">님의 순위결과 조회입니다.</span>
      </div>
      <div id="main">
        <div id="right">차트 넣을 예정</div>
        {/* <div id="right">
          <ResponsiveScatterPlot
            data={data}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: "point", min: 0, max: "auto" }}
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
              legend: "등수",
              legendPosition: "middle",
              legendOffset: 50,
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "성적",
              legendPosition: "middle",
              legendOffset: -50,
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
        </div> */}
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
            {state === "S" ? (
              <MainBtn
                btnText={"소프트웨어학부"}
                index={2}
                handlePress={handlePressBtn}
                isSelected={isPressBtn}
              />
            ) : (
              <MainBtn
                btnText={"컴퓨터학부"}
                index={3}
                handlePress={handlePressBtn}
                isSelected={isPressBtn}
              />
            )}
          </div>
          <div id="ranking">
            <span>전체 등수</span>
            <span>
              {userNumber}등 / {getList.length}명
            </span>
          </div>
          <div id="rankingTextBox">
            <span>
              <span id="nicknameInBox">"{nickName}"</span>님의 순위는 전체{" "}
              {btnIdx === 0 || btnIdx === 1
                ? departmentList[0]
                : btnIdx === 2
                ? departmentList[1]
                : departmentList[2]}{" "}
              {getList.length}명 중 {userNumber}등으로 예상됩니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
