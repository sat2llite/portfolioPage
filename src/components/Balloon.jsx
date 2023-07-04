import React from "react";

const Balloon = (props) => {
  return (
    <div className="balloon">
      <div className="nes-balloon flex_between">
        <p>{props.props}</p>
        <span className="tri"></span>
      </div>
    </div>
  );
};

export default Balloon;
