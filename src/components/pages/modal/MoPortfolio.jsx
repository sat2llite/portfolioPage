import React from 'react'
import { Link } from 'react-router-dom'

const MoPortfolio = () => {
  return (
    <div className="moContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="../img/mo_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>HTML, CSS, jQuery로 제작한 포트폴리오 페이지입니다.</p>
            <br />
            <p>가장 처음으로 만들었던 반응형 페이지입니다.</p>
            <p>기존에 있던 마리오 아울렛 페이지를 좀 더 편하게 볼 수 있도록 리뉴얼했습니다.</p>
            <div className="in_more_btn">
              <Link to="https://sat2llite.github.io/MO/" target="_blank">
                <button className="in_more">site</button>
              </Link>
              <Link to="https://github.com/sat2llite/MO" target="_blank">
                <button className="in_more">github</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoPortfolio