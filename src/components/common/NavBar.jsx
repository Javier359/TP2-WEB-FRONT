import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/navBar.css";

const NavBar = ({ title, addStudentBtn, backBtn }) => {
  return (
    <>
      <nav className="header_title">
        <h3 className="ms-3">{title}</h3>
        <div className="d-flex justify-content-end p-1">
        {addStudentBtn && (
          <Link to="/students/add" className="div_btn">
            Agregar
          </Link>
        )}
        {backBtn && (
          <Link to="/students" className="div_btn back">
            Volver
          </Link>
        )}
        </div>
       
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
