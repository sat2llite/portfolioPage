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

            <p>자바스크립트로 제작한 포트폴리오 페이지 입니다.</p>
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
