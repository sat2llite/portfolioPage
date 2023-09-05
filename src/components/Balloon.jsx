import React from "react";
import { Link } from "react-router-dom";

const Balloon = ({ text, compUrl }) => {
  return (
    <div className="balloon flex_between">
      <div className="bottom_balloon">
        <p>
          {text.split("\n").map((txt) => (
            <>
              {txt}
              <br />
            </>
          ))}
        </p>
        {/* <p>{velog}</p> */}
      </div>
      <Link to={compUrl}>
        <span className="tri flex_center"></span>
      </Link>
    </div>
  );
};

export default Balloon;