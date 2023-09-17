import React, { useState } from "react";
import Header from "@/app/components/Header";
import "../styles/corpus.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Construcion = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleMove = (data) => {
    setCurrentComponent(currentComponent + data);
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

export default Construcion;
