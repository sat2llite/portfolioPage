import React from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <Header />

      <Link to="/contact">
        <Balloon text={"portfolio"} />
      </Link>
    </>
  );
};

export default Portfolio;
