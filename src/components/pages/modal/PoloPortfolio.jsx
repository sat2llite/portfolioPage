import React from "react";
import { Link } from "react-router-dom";

const PoloPortfolio = () => {
  return (
    <div className="poloContainer">
      {/* <button className="close">
        X
      </button> */}
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/polo_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>React, tailwind로 제작한 Ralph Lauren 페이지입니다.</p>
            <br />
            <p>Firebase를 사용하여 google로그인 기능을 구현했습니다.</p>
            <p>admin과 손님 계정을 구분하여 admin 계정에만 상품을 등록/삭제 할 수 있도록 구현했습니다.</p>
            <div className="in_more_btn">
              <Link to="https://polo-react-app.netlify.app" target="_blank">
                <button className="in_more">site</button>
              </Link>
              <Link to="https://github.com/sat2llite/shop" target="_blank">
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoloPortfolio;
