import React, { useEffect, useState } from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import ReactPortfolio from "./modal/ReactPortfolio";
import QuizPortfolio from "./modal/QuizPortfolio";

const Portfolio = () => {
  const txt = "portfolio";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      <Header />
      <div className="portfolio">
        <div className="inner">
          <div className="box_wrap flex_between">
            <div className="box box01">
              <div className="bar">
                <h4>React</h4>
              </div>
              <div className="more_btn">
                <button className="more" onClick={showModal}>
                  VIEW MORE
                </button>
                {modal && <ReactPortfolio setModal={setModal} />}
              </div>
            </div>

            <div className="box box02">
              <div className="bar">
                <h4>JS</h4>
              </div>
              <div className="more_btn">
                <button className="more" onClick={showModal}>
                  VIEW MORE
                </button>
                {modal && <QuizPortfolio setModal={setModal} />}
              </div>
            </div>

            <div className="box box03">
              <div className="bar">
                <h4>HTML</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>

            <div className="box box04">
              <div className="bar">
                <h4>HTML</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>
          </div>

          <div className="box_wrap flex_between">
            <div className="box box05">
              <div className="bar">
                <h4>portfolio1</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>

            <div className="box box06">
              <div className="bar">
                <h4>portfolio1</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>

            <div className="box box07">
              <div className="bar">
                <h4>portfolio1</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>

            <div className="box box08">
              <div className="bar">
                <h4>portfolio1</h4>
              </div>
              <div className="more_btn">
                <button className="more">VIEW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Balloon text={text} compUrl="/contact" />
    </>
  );
};

export default Portfolio;
