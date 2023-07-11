import React from "react";

const Balloon = ({ text }) => {
  return (
    <div className="balloon">
      <div className="flex_between bottom_balloon">
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
