import React from "react";
import { Link } from "react-router-dom";

const ArcPortfolio = () => {
  return (
    <div className="arcContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            {/* <img src="img/js_port.png" alt="" /> */}
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>HTML과 자바스크립트로 제작한 포트폴리오 페이지 입니다.</p>
            <div className="in_more_btn">
              <Link to="https://sat2llite.github.io/arcteryx/" target="_blank">
                <button className="in_more">site</button>
              </Link>
              <Link to="https://github.com/sat2llite/arcteryx" target="_blank">
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArcPortfolio;