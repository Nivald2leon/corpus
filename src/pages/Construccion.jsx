import React, { useState } from "react";
import "../styles/corpus.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../app/components/Header";
import Formulario from "../app/components/formulario";
import Texto from "./Texto";
import Encabezado from "../app/components/Encabezado";

import "../styles/animate.css";

const Construccion = () => {

  const handleMove = (data) => {
    setCurrentComponent(currentComponent + data);
  };


  return (
    <>
      <Header 
        page= {0} 
        onhandleMove={handleMove} 
      />
      <section
        id="construccion"
        className="bg-fixed hero-section division wow zoomIn"
        style={{
          
          backgroundImage: `url('/imagen/construccion.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >


      

      </section>
    </>
  );
};

export default Construccion;
