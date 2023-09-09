


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
      <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item menup">
            <a
              className={`nav-link ${activeMenuItem === "inicio" ? "active" : ""}`}
              href="#"
              onClick={() => toggleSubMenu("inicio")} style={{ width: "130px" }}
            >
              INICIO
            </a>
          </li>
          <li className="nav-item menup">
            <a
              className={`nav-link ${activeMenuItem === "cache" ? "active" : ""}`}
              href="#"
              onClick={() => toggleSubMenu("cache")} style={{ width: "130px",  position: "relative" }}
            >
              CACHE
              {activeMenuItem === "cache" ? (
                <ul className="submenu" >
                  <li className="nl-simple mt-2">
                    <a href="#cache">¿Qué es CACHE?</a>
                  </li>
                  <li className="nl-simple mt-2">
                    <a href="#objetivo">Objetivo</a>
                  </li>
                </ul>
              ) : null}
            </a>
          </li>
          <li className="nav-item menup">
            <a
              className={`nav-link ${activeMenuItem === "diseño" ? "active" : ""}`}
              href="#"
              onClick={() => toggleSubMenu("diseño")} 
            >
              DISEÑO
              {activeMenuItem === "diseño" ? (
                <ul className="submenu">
                  <li className="mt-2">Diseño macro</li>
                  <li className="mt-2">Fundamentos teóricos y metodológicos</li>
                  <li className="mt-2">Etapas</li>
                  <li className="mt-2">Tareas para la recolección de datos</li>
                </ul>
              ) : null}
            </a>
          </li>
          <li className="nav-item menup">
            <a
              className={`nav-link ${activeMenuItem === "estadistica" ? "active" : ""}`}
              href="#"
              onClick={() => toggleSubMenu("estadistica")} 
            >
              ESTADÍSTICAS
            </a>
          </li>
 
        </ul>
        <form className="form-inline mt-md-5 mr-md-4 ">
          <input
            className="form-control mr-1"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button className="btn-outline-success mt-2" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Menu;