import texto from "../array/texto.json";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "/public/imagen/logoChinaEspaña.jpg";

const Encabezado = ({ opciones, onitemClick}) => {


  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const palabraBuscada = new RegExp(`\\b${opciones.palabras}\\b`, "gi");

  //esta funcion la voy a utilizar después
  const encabezado1 = texto
    .filter((elemento) => elemento.subtarea === "C12")
    .map((elemento) => ({
      ...elemento,
      texto: elemento.texto.substring(0, 230), // Recorta el texto a 10 caracteres
    }));

  const encabezado2 = texto
    .filter((elemento) => palabraBuscada.test(elemento.texto))
    .map((elemento) => ({
      ...elemento,
      texto: elemento.texto.substring(0, 10230),
    }));

  const encabezado = encabezado2.map((objeto) => {
    const texto = objeto.texto;
    const palabras = opciones.palabras;

    // Crear una expresión regular para buscar la palabra, incluyendo mayúsculas/minúsculas
    const regex = new RegExp(`\\b${palabras}\\b`, "gi");

    // Buscar la primera coincidencia
    const primeraCoincidencia = regex.exec(texto);

    if (primeraCoincidencia) {
      const startIndex = Math.max(0, primeraCoincidencia.index - 95);
      const endIndex = Math.min(
        texto.length,
        primeraCoincidencia.index + primeraCoincidencia[0].length + 95
      );
      const textoRecortado = texto.substring(startIndex, endIndex);

      // Reemplazar la primera coincidencia con <strong>
      const textoConNegritas = textoRecortado.replace(
        regex,
        (match) => `<strong>${match}</strong>`
      );

      return { ...objeto, texto: textoConNegritas };
    } else {
      return objeto;
    }
  });

  console.log(encabezado);

  const handleClick = (itemId) => {
  console.log(itemId)
    onitemClick(itemId);
    console.log()
  };


  return (
    <div className="mt-4 menu clearfix ">
      <div className="row">
        <div className="col-md-1 col-lg-1 "></div>
        <div className="col-md-6 col-lg-6 ">
          {encabezado.map((item, index) => (
            <>
              <div
                className={`pricing-3-item  mt-1 mb-0 ${
                  lastClickedIndex === index 
                    ? "selected"
                    : ""
                }`}
                key={item.id}
                style={{ textAlign: "justify", lineHeight: "1.5" }}
              >
                <div className="rectangular-container ">
                  <label className="service-label">
                    <a
                      href="#!"
                      onClick={() => {
                        handleClick(item.id);
                        setLastClickedIndex(index);
                      }}
                      className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
                    >
                      <Image
                        src={item.photo ? item.photo : logo}
                        alt="item.photo"
                        className="img-fluid mr-4 rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                      />

                      <div
                        className="service-content"
                        /*                       style={{
                        fontFamily: "Monaco, monospace",
                      }}
 */
                      >
                        <a style={{ color: "red" }}>[...]</a>
                        <a dangerouslySetInnerHTML={{ __html: item.texto }}></a>
                        <a style={{ color: "red" }}>[...]</a>
                      </div>
                    </a>
                  </label>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Encabezado;
