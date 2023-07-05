import React from "react";
import { Link } from "react-router-dom";

const Balloon = ({ text }) => {
  return (
    <div className="balloon">
      <div className="nes-balloon flex_between">
        <p>
          {text.split("\n").map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </p>
        <span className="tri"></span>
      </div>
    </div>
  );
};

export default Balloon;
