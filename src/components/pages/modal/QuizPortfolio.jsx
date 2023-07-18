import React from "react";

const QuizPortfolio = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="modalContainer">
      <button className="close" onClick={closeModal}>
        X
      </button>

      <div className="content">
        지금 포폴 페이지
        <div className="inner">
          <div className="left">
            <img src="img/js_port.png" alt="" />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default QuizPortfolio;
