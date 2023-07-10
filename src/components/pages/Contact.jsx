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
            <div className="dot_image">
              <h2>CONTACT</h2>
              <img src="./img/jump.gif" alt="" />
            </div>

            <div class="nes-balloon from-left">
              <p>Thank You!</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <Balloon text={"> Github \n velog \n contact"} />
      </Link>
    </>
  );
};

export default Contact;
