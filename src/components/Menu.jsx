import { useState } from "react";

const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleSubMenu = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-navbar">
      <a className="navbar-brand" href="#">
        Corpus
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarCollapse"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item menup">
            <a
              className={`nav-link ${
                activeMenuItem === "inicio" ? "active" : ""
              }`}
              href="#"
              onClick={() => toggleSubMenu("inicio")}
            >
              INICIO
            </a>
          </li>




          <li className="nav-item menup">
            <a
              className={`nav-link ${activeMenuItem === "cache" ? "active" : ""}`}
              onClick={() => toggleSubMenu("cache")} 
            >
              CACHE
              {activeMenuItem === "cache" ? (
                <ul className="submenu" style={{ width: "155px" }}>
                  <li className="nl-simple mt-2">
                    <a href="#Cache" style={{textDecoration: "none", color: "inherit"}} >
                      ¿Qué es CACHE?
                    </a>
                  </li>
                  <li className="nl-simple mt-2">
                    <a href="#Objetivo" style={{textDecoration: "none", color: "inherit"}}>
                      Objetivo
                    </a>
                  </li>
                </ul>
              ) : null}
            </a>
          </li>






          <li className="nav-item menup">
            <a
              className={`nav-link ${
                activeMenuItem === "diseño" ? "active" : ""
              }`}
              onClick={() => toggleSubMenu("diseño")}
            >
              DISEÑO
              {activeMenuItem === "diseño" ? (
                <ul className="submenu" style={{ width: "195px" }}>
                  <li className="nl-simple mt-2">
                    <a href="#Diseño" style={{textDecoration: "none", color: "inherit"}}>
                      Diseño macro
                    </a>
                  </li>
                  <li className="nl-simple mt-2">
                  <a href="#Fundamento" style={{textDecoration: "none", color: "inherit"}}>
                      Fundamentos teóricos y metodológicos
                    </a>
                  </li>
                  <li  className="nl-simple mt-2">
                    <a href="#Etapas" style={{textDecoration: "none", color: "inherit"}}>
                      Etapas
                    </a>
                  </li>
                  <li  className="nl-simple mt-2">
                    <a href="#Metadatos" style={{textDecoration: "none", color: "inherit"}}>
                      Metadatos lingüísticos y extralingüísticos
                    </a>
                  </li>
                  <li className="nl-simple mt-2">
                    <a  href="#Tareas" style={{textDecoration: "none", color: "inherit", cursor: "default"}}>
                      Tareas para la recolección de datos
                    </a>                    
                  </li>
                </ul>
              ) : null}
            </a>
          </li>
          <li className="nav-item menup ">
            <a
              className={`nav-link ${
                activeMenuItem === "estadistica" ? "active" : ""
              }`}
              href="#Estadistica"
              onClick={() => toggleSubMenu("estadistica")}
            >
              ESTADÍSTICAS
            </a>
          </li>
          <li className="nav-item menup ">
            <a
              className={`nav-link ${
                activeMenuItem === "buscar" ? "active" : ""
              }`}
              href="#Buscar"
              onClick={() => toggleSubMenu("buscar")}
            >
              BUSCAR
            </a>
          </li>
 
          <li className="nav-item menup">
            <a
              className={`nav-link ${
                activeMenuItem === "guia" ? "active" : ""
              }`}
              href="#Guia"
              onClick={() => toggleSubMenu("guia")}
              
            >
              GUÍA DE USO 
            </a>
          </li>
          <li className="nav-item menup">
            <a
              className={`nav-link ${
                activeMenuItem === "investigacion" ? "active" : ""
              }`}
              href="#INVESTIGACIONES"
              onClick={() => toggleSubMenu("investigacion")}
              
            >
              INVESTIGACIONES
            </a>
          </li>
          <li className="nav-item menup">
            <a
              className={`nav-link ${
                activeMenuItem === "contacto" ? "active" : ""
              }`}
              href="#Contacto"
              onClick={() => toggleSubMenu("contacto")}
              
            >
               CONTACTO
            </a>
          </li>

        </ul>

      </div>
 
    </nav>
    
  );
};

export default Menu;
