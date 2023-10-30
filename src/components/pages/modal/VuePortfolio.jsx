import React from "react";
import { Link } from "react-router-dom";

const VuePortfolio = () => {
  return (
    <div className="vueContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/vue_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>Vue로 제작한 Todo List 입니다.</p>
            <br />
            <p>business와 personal 두 가지로 나누어 작성할 수 있도록 코딩했습니다.</p>
            <br />
            <p>또한 LocalStorage를 이용하여 내용이 저장되도록 헀습니다.</p>
            <div className="in_more_btn">
              <Link to="https://vue-todo-project-sy.netlify.app" target="_blank">
                <button className="in_more">site</button>
              </Link>
              <Link to="https://github.com/sat2llite/vue_todo" target="_blank">
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VuePortfolio;
