import React from "react";
import { Link } from "react-router-dom";

const Balloon2 = ({ text, compUrl, velog, contact }) => {
  return (
    <div className="balloon flex_between">
      <div className="bottom_balloon">
        <div className="textarea">
          <Link to="https://github.com/sat2llite" target="_blank">
            <p>{text}</p>
          </Link>

          <Link to="https://velog.io/@raumschiff_" target="_blank">
            <p>{velog}</p>
          </Link>

          <Link to="">
            <p>{contact}</p>
          </Link>
        </div>
      </div>

      <Link to={compUrl}>
        <span className="tri flex_center"></span>
      </Link>
    </div>
  );
};

export default Balloon2;
