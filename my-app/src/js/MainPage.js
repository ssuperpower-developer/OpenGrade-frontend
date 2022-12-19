import "../css/MainPage.css";

export default function MainPage() {
  return (
    <div>
      <div id="title">
        <span id="nickname">공허한 정약용</span>
        <span id="titleText">님의 순위결과 조회입니다.</span>
      </div>
      <div id="main">
        <div id="right">차트</div>
        <div id="left">
          <div>
            <div className="mainTitle">성적 산출 등수</div>
            <button>전체 지원자</button>
            <button>소프트웨어학부</button>
            <button>컴퓨터학부</button>
          </div>
          <div>
            <div className="mainTitle">실지원 등수</div>
            <button>전체 지원자</button>
            <button>소프트웨어학부</button>
            <button>컴퓨터학부</button>
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
