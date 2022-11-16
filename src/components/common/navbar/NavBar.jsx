import React from "react";
import MessageAppBar from "./MessageAppBar";
import "./Navbar.css";
import imagen from "./tele.jpg";

const NavBar = () => {

  return (
    <div className="container-navbar">
      <section className="main-navbar">
        <div className="title-logo">
          <img className="log" src={imagen} alt="logo-telematica" />
          <h3 className="title-navbar">Telemática</h3>
        </div>
        <MessageAppBar/>
      </section>
    </div>
  );
};

export default NavBar;
