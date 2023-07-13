import React, { useState } from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { useEffect } from "react";

// let interval = undefined;

const Skills = () => {
  const txt = "skills";
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

  // const [running, setRunning] = useState(false);
  // const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   if (number === 0) {
  //     interval = setInterval(() => {
  //       setNumber((number) => number + 1);
  //     }, 20);
  //   } else if (number > 90) {
  //     setNumber(90)
  //     clearInterval(interval);
  //   }
  // }, [number]);

  return (
    <>
      <Header />
      <div className="skills">
        <div className="inner">
          {/* <div className="skill_progress flex_center">
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
          </div> */}
          <div className="box_wrap flex_around">
            <div className="box">
              <div className="bar">
                <h3>HTML/CSS/SCSS</h3>
              </div>

              <div className="text">
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star is-half"></i>
                <h4>HTML/CSS/SCSS</h4>
                <ul>
                  <li>웹 표준</li>
                  <li>반응형</li>
                  <li>sass/scss</li>
                </ul>
              </div>
            </div>

            <div className="box">
              <div className="bar">
                <h3>Javascript</h3>
              </div>

              <div className="text">
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star is-empty"></i>
                <h4>Javascript</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box_wrap flex_around">
            <div className="box">
              <div className="bar">
                <h3>React/Vue</h3>
              </div>

              <div className="text">
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star is-half"></i>
                <i class="nes-icon is-small star is-empty"></i>
                <h4>React/Vue</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>

            <div className="box">
              <div className="bar">
                <h3>Photoshop/Figma</h3>
              </div>

              <div className="text">
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star"></i>
                <i class="nes-icon is-small star is-half"></i>
                <h4>Photoshop/Figma</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Balloon text={text} compUrl="/portfolio" />
    </>
  );
};

export default Skills;
