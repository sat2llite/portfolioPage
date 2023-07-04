import React from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <>
      <Header />
      <div className="skills">
        <div className="inner">
          <div className="skill_progress flex_center">
            <progress class="nes-progress" value="90" max="100"></progress>
          </div>
        </div>
      </div>
      <Link to="">
        <Balloon text={"skills"} />
      </Link>
    </>
  );
};

export default Skills;
