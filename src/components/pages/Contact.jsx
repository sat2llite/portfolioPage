// import React, { useEffect, useState } from "react";
import Header from "../Header";
import Balloon2 from "../Balloon2";

const Contact = () => {
  // const txt = "Github \n velog \n contact";
  const txt = "Github";
  const velog = "Velog";
  const contact = "Contact";
  // const texts = ["Github", "Velog", "Contact"];

  // const [text, setText] = useState("");
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setText(text + txt[count]); // 이전 set한 문자 + 다음 문자
  //     setCount(count + 1); // 글자 개수만큼 체크
  //   }, 100);
  //   if (count === txt.length) { // count를 따로 두지 않고 Text.length 체크도 가능
  //     clearInterval(interval); // 문자열 체크를 통해 setInterval 해제
  //   }
  //   return () => clearInterval(interval); // 언마운트 시 setInterval 해제
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let txt = texts[i];
  //     setText(text, txt[count]);
  //     setCount(count + 1);
  //   }, 100);
  //   if (count === texts[i].length) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // });

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
      <Balloon2 text={txt} velog={velog} contact={contact} compUrl="/" />
      {/* <Balloon2 text={texts} compUrl="/" /> */}
      {/* <button onClick={()=>{window.open(url)}}>ㅎㅇ</button> */}
    </>
  );
};

export default Contact;
