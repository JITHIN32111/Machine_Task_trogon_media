import React from "react";
import UserMenuLeft from "../components/UserMenuLeft";
import UserProfileTop from "../components/UserProfileTop";
import Header from "../components/Header";
function Userinfo() {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-9 ml-10">
        <UserMenuLeft />
        <UserProfileTop />
      </div>
    </>
  );
}

export default Userinfo;
