
'use client'
import "../styles/corpus.css"
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Efecto from "../components/Efecto";
import Inicio from "../pages/Inicio";
import Navbar from "../components/Navbar";
import Cache from "../pages/Cache";
import Objetivo from "../pages/Objetivo";
import Diseño from "../pages/Diseño";
import Fundamento from "../pages/Fundamento";
import Etapas from "../pages/Etapas";
import Tareas from "../pages/Tareas";
import Metadatos from "../pages/Metadatos";
import Estadistica from "../pages/Estadistica";
import  Buscar from "../pages/Buscar";
import "../styles/animate.css";


export default function Home() {
  return (
    <div>
       <Efecto/> 
      <div id="page" className="page">
        <Navbar/>
        <Inicio/>  
        <Cache/>
        <Objetivo/>
        <Diseño/>
        <Fundamento/>
        <Etapas/>
        <Metadatos/>
        <Tareas/>
        <Estadistica/>
       </div> 
    </div>
  )
}
