import React from "react";

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
