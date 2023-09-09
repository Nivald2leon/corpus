import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleSubMenu = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  return (
    <div>
      <nav className="w-full custom-navbar fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="navbar  navbar-dark ">
            <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <a
                    href="#"
                    onClick={() => {
                      toggleSubMenu("Inicio");
                      setNavbar(!navbar);
                    }}
                    className={`nav-link ${
                      activeMenuItem === "Inicio" ? "active" : ""
                    }`}
                  >
                    CORPUS
                  </a>
   
              
              <div className="md:hidden ">
                <button
                  className=" ml-40 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                  style={{ justifyContent: "right" }}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="mt-2 h-screen md:h-auto items-center justify-center md:flex ">
                <li className="nav-item menup pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a
                    href="#"
                    onClick={() => {
                      toggleSubMenu("Inicio");setNavbar(!navbar)
                      
                    }}
                    className={`nav-link ${
                      activeMenuItem === "Inicio" ? "active" : ""
                    }`}
                  >
                    Inicio
                  </a>
                </li>

                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent ">
                  <a
                    className={`nav-link ${
                      activeMenuItem === "Cache" ? "active" : ""
                    }`}
                    onClick={() => toggleSubMenu("Cache")}
                  >
                    Cache
                    {activeMenuItem === "Cache" ? (
                      <ul className="submenu" style={{ width: "155px" }}>
                        <li className="nl-simple mt-2">
                          <a
                            href="#Cache"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                           >
                            ¿Qué es CACHE?
                          </a>
                        </li>

                        <li className="nl-simple mt-2">
                          <a
                            href="#Objetivo"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                          >
                            Objetivo
                          </a>
                        </li>
                      </ul>
                    ) : null}
                  </a>
                </li>

 
 
 
 
                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent ">
                  <a
                    className={`nav-link ${
                      activeMenuItem === "Diseño" ? "active" : ""
                    }`}
                    onClick={() => toggleSubMenu("Diseño")}
                  >
                    Diseño
                    {activeMenuItem === "Diseño" ? (
                      <ul className="submenu" style={{ width: "155px" }}>
                        <li className="nl-simple mt-2">
                          <a
                            href="#Diseño"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                          >
                            Diseño macro
                          </a>
                        </li>

                        <li className="nl-simple mt-2">
                          <a
                            href="#Fundamento"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                          >
                            Fundamentos teóricos y metodológicos
                          </a>
                        </li>

                        <li className="nl-simple mt-2">
                          <a
                            href="#Etapas"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                          >
                            Etapas
                          </a>
                        </li>

                        <li className="nl-simple mt-2">
                          <a
                            href="#Metadatos"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setNavbar(!navbar)}
                          >
                            Metadatos lingüísticos y extralingüísticos
                          </a>
                        </li>

                      </ul>
                    ) : null}
                  </a>
                </li>

                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a
                    className={`nav-link ${
                      activeMenuItem === "Estadistica" ? "active" : ""
                    }`}
                    href="#Estadistica"
                    onClick={() => {toggleSubMenu("Buscar");setNavbar(!navbar)}}
                  >
                    Estadísticas
                  </a>
                </li>

                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                
                <Link
                    className={`nav-link ${
                      activeMenuItem === "Buscar" ? "active" : ""
                    }`}
                    href="../Buscar"
                    onClick={() => {toggleSubMenu("Buscar");setNavbar(!navbar)}}
                  >
                    Buscar
                  </Link>
                </li>
               
                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a
                    className={`nav-link ${
                      activeMenuItem === "Guia" ? "active" : ""
                    }`}
                    href="#Guia"
                    onClick={() => {toggleSubMenu("Guia");setNavbar(!navbar)}}
                  >
                    Guía
                  </a>
                </li>

                <li className="nav-item menup pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a
                    className={`nav-link ${
                      activeMenuItem === "Investigaciones" ? "active" : ""
                    }`}
                    href="#Investigacion"
                    onClick={() => {toggleSubMenu("Investigacion");setNavbar(!navbar)}}
                  >
                    Investigaciones
                  </a>
                </li>

                <li className="nav-item menup  pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <a
                    className={`nav-link ${
                      activeMenuItem === "Contacto" ? "active" : ""
                    }`}
                    href="#Contacto"
                    onClick={() => {toggleSubMenu("Contacto");setNavbar(!navbar)}}
                  >
                    Contacto                
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
