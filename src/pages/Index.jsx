import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css"


const Index = () => {
  return (
    <div className="containerMain">
      <Link to="/students" className="links w-100 ">
        <h2 className="text-center m-5" id="h2">Modulo Alumnos</h2>
      </Link>
    </div>
  );
};

export default Index;

