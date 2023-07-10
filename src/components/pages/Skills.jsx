import React, { useState } from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { Link } from "react-router-dom";
import { useEffect } from "react";

let interval = undefined;

const Skills = () => {
  // const [running, setRunning] = useState(false);
  const [number, setNumber] = useState(0);
  
  useEffect(() => {
    if (number === 0) {
      interval = setInterval(() => {
        setNumber((number) => number + 1);
      }, 20);
    } else if (number > 90) {
      setNumber(90)
      clearInterval(interval);
    }
  }, [number]);
  


  return (
    <>
      <Header />
      <div className="skills">
        <div className="inner">
          <div className="skill_progress flex_center">
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
            <progress className="nes-progress" value={number} max="100"></progress>
          </div>
        </div>
      </div>
      <Link to="/portfolio">
        <Balloon text={"skills"} />
      </Link>
    </>
  );
};

export default Skills;
