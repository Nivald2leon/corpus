import React, { useState } from "react";
import "../styles/corpus.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../app/components/Header";
import Formulario from "../app/components/formulario";
import Texto from "../pages/Texto";
import Encabezado from "../app/components/Encabezado";


import "../styles/animate.css";

const Buscar = () => {
  const [opciones, setOpciones] = useState(null);
  const [currentComponent, setCurrentComponent] = useState(1);
  const [selecteditem, setSelecteditem] = useState(null);

  const handleMove = (data) => {
    setCurrentComponent(currentComponent + data);
  };


  const handleFilterChange = (data) => {
    setOpciones(data);
    console.log(opciones);
  };

  const handleitemClick = (itemId) => {
    console.log(itemId)
    setSelecteditem(itemId);
    console.log(selecteditem)
    handleMove(1)
  };


  return (
    <>
      <Header 
        page={currentComponent} 
        onhandleMove={handleMove} 
      />
      <section
        id="Buscar"
        className="bg-fixed hero-section division wow zoomIn"
        style={{
          
          backgroundImage: `url('/imagen/buscarfondo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >


      

        <div style={{zIndex:"1"}}>
        <div className="margen-superior"></div>

        {currentComponent === 1 && (
          <Formulario 
            onDataChange={handleFilterChange} 
            opciones={opciones} 
            onhandleMove={handleMove}  
          />
        )}

        {currentComponent === 2 && <Encabezado 
          opciones={opciones}
          onitemClick={handleitemClick}
          
        />}

        {currentComponent === 3 && <Texto
        opciones={opciones} 
        item={selecteditem}
        />}
        </div>
      </section>
    </>
  );
};

export default Buscar;
