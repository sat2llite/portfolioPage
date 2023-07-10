import React from "react";

const ReactPortfolio = ({ setModal }) => {
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
      </div>
    </div>
  );
};

export default ReactPortfolio;
