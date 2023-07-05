import React from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="inner">
          <div className="">
            <h2>CONTACT</h2>
          </div>
        </div>
      </div>
        <Balloon text={"감사합니다! \n ddd"} />
    </>
  );
};

export default Contact;
