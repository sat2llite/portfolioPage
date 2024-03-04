import React, { useEffect, useState } from "react";
import Header from "../Header";
import Balloon from "../Balloon";

const Profile = () => {
  const txt =
    "이름: 백승연 \n 나이: 28 \n 연락처: 010-4730-8666 \n 주소: 경기도 부천시";
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
      <div className="profile">
        <div className="dot_image">
          <h2>PROFILE</h2>
          <img src="img/dot.gif" alt="char" />
        </div>
      </div>
      <Balloon text={text} compUrl="/skills" />
    </>
  );
};

export default Profile;
