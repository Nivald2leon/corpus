import React, { useState, useEffect } from "react";
import "../styles/corpus.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Efecto from "@/components/Efecto";

import Animation from "../components/Animation";
import "../styles/animate.css";

const Buscar = () => {
  return (
    <>
      <Efecto />

      <section
        id="Buscar"
        className="bg-fixed hero-section division wow zoomIn"
        style={{
          backgroundImage: `url('/imagen/buscar.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* <div className="col-md-1 col-lg-1"></div> */}
            <div className="col-md-6 col-lg-8">
              <div className="mt-6 hero-9-txt cache">
                <form className="form-inline  formulario-con-boton-derecha">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    width="120px"
                  />

                  <button className="btn-outline-success " type="submit">
                    Buscar
                  </button>
                  <br></br>

                  <label for="fruta">Selecciona una fruta:</label> 
                  <select id="fruta" name="fruta">
                    <option value="manzana">Manzana</option>
                    <option value="banana">Banana</option>
                    <option value="uva">Uva</option>
                  </select>
                  <label
                    for="colores"
                    style={{display: "inline-block", width: '200px'}}
                  >
                    Selecciona uno o más colores:
                  </label>

                  <br></br>
                  <selects
                    id="colores"
                    name="colores"
                    multiple
                    style={{width: '200px'}}
                    
                  >
                    <option value="rojo">Rojo</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                  </selects>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buscar;
