import React, { useEffect, useState } from "react";
import Header from "../Header";
import Balloon2 from "../Balloon2";

const Contact = () => {
  // const txt = "Github \n velog \n contact";
  const txt = "Github";
  const velog = "velog";
  const contact = "Contact";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

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

            <div class="nes-balloon from-left bubble">
              <p>Thank You!</p>
            </div>
          </div>
        </div>
      </div>
      <Balloon2 text={text} velog={velog} contact={contact} compUrl="/" />
      {/* <button onClick={()=>{window.open(url)}}>ㅎㅇ</button> */}
    </>
  );
};

export default Contact;
