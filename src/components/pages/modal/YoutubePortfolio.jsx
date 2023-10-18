import React from "react";
import { Link } from "react-router-dom";

const YoutubePortfolio = () => {
  return (
    <div className="poloContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/youtube_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>React로 제작한 유튜브 클론코딩 페이지입니다.</p>
            <br />
            <p>YouTube Data API를 사용하여 인기 동영상을 불러오도록 코딩했습니다.</p>
            <div className="in_more_btn">
              <Link to="https://sat2llite-react-youtube.netlify.app" target="_blank">
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
