import React from "react";
import Header from "../Header";
import Balloon from "../Balloon";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="dot_image">
        <h2>PROFILE</h2>
          <img src="img/dot.gif" alt="char" />
        </div>
      </div>
      <Link to="/skills">
        <Balloon
          text={
            "이름: 백승연 \n 나이: 27 \n 연락처: 010-4730-8666 \n 주소: 경기도 부천시"
          }
        />
      </Link>
    </>
  );
};

export default Profile;
