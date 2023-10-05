import React from 'react'
import { Link } from 'react-router-dom'

const MoPortfolio = () => {
  return (
    <div className="moContainer">
      <div className="portfolio_content">
        <div className="inner">
          <div className="left">
            <img src="img/react_port.png" alt="" />
          </div>

          <div className="right">
            <div className="back_btn_wrap">
              <Link to="/portfolio">
                <button className="back_btn">뒤로가기</button>
              </Link>
            </div>

            <p>html로 제작된 페이지입니다.</p>
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