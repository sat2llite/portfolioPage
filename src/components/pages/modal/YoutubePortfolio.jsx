import React from "react";
import { Link } from "react-router-dom";

const YoutubePortfolio = () => {
  return (
    <div className="poloContainer">
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

            <p>리액트로 작업한 유튜브 클론코딩입니다.</p>
            <div className="in_more_btn">
              <Link to="https://sat2llite-react-youtube.netlify.appp" target="_blank">
                <button className="in_more">site</button>
              </Link>
              <Link to="https://github.com/sat2llite/youtube" target="_blank">
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePortfolio;
