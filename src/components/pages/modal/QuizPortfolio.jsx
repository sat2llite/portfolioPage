import React from "react";
import { Link } from "react-router-dom";

const QuizPortfolio = () => {
  return (
    <div className="quizContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/js_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>바닐라 자바스크립트를 사용하여 제작한 포트폴리오 페이지 입니다.</p>
            <br />
            <p>작성한 정답을 LocalStorage에 저장한 후 JSON 파일과 비교하여</p>
            <p>마지막 결과 페이지에 점수를 내보낼 수 있도록 코딩했습니다.</p>
            <br />
            <p>또한 PWA로 구현하여 앱을 설치할 수 있습니다.</p>
            <div className="in_more_btn">
              <Link
                to="https://sat2llite.github.io/quiz/"
                target="_blank"
              >
                <button className="in_more">site</button>
              </Link>
              <Link
                to="https://github.com/sat2llite/quiz"
                target="_blank"
              >
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPortfolio;
