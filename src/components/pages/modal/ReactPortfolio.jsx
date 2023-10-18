import React from "react";
import { Link } from "react-router-dom";

const ReactPortfolio = () => {
  //   const closeModal = () => {
  //     setModal(false);
  //   };

  return (
    <div className="reactContainer">
      {/* <button className="close">
        X
      </button> */}
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/react_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>현재까지 작업한 작업물들을 소개하는 포트폴리오 페이지 입니다.</p>
            <p>
              도트 게임 형식으로 디자인하였고, 리액트를 사용하여 작업했습니다.
            </p>
            <p>모바일에서도 볼 수 있도록 반응형으로 작업했습니다.</p>
            <div className="in_more_btn">
              <Link
                to="https://seungyeon-portfolio.netlify.app"
                target="_blank"
              >
                <button className="in_more">site</button>
              </Link>
              <Link
                to="https://github.com/sat2llite/portfolioPage"
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

export default ReactPortfolio;
