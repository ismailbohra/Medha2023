import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import RightSide from "../RigtSide/RightSide";
// import { Outlet } from "react-router-dom";
const MainDash = () => {
  return (
    <>
      <h1>REPORT</h1>

    <div className="main-container">

      <div className="MainDash">
      
        <Cards />
      </div>

      <div className="profile">
        <RightSide>
        </RightSide>
      </div>

    </div>
    </>
  );
};

export default MainDash;
