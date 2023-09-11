import texto from "../array/texto.json";
import subtarea from "../array/subtarea.json";


const Texto = ({ opciones, item }) => {
  
  const tareaRed = (item) => {
    const tarea = subtarea
      .filter((elemento) => elemento.id === item)
      .map((elemento) => ({
        ...elemento,
      }));
    return tarea[0].selec;
  };

  const encabezado2 = texto
    .filter((elemento) => elemento.id === item)
    .map((elemento) => ({
      ...elemento,
      //texto: elemento.texto.substring(0, 230), // Recorta el texto a 10 caracteres
    }));

  const encabezado = encabezado2.map((objeto) => {
    const texto = objeto.texto;
    const palabras = opciones.palabras;

    // Crear una expresión regular para buscar la palabra, incluyendo mayúsculas/minúsculas
    const palabraBuscada = new RegExp(`\\b${palabras}\\b`, "gi");

    // Buscar la primera coincidencia
    const primeraCoincidencia = palabraBuscada.exec(texto);

    if (primeraCoincidencia) {
      const textoConNegritas = texto.replace(
        palabraBuscada,
        (match) => `<strong>${match}</strong>`
      );

      return { ...objeto, texto: textoConNegritas };
    } else {
      return objeto;
    }
  });

  return (
    <div className="mt-4 menu clearfix ">
      <div className="row">
        <div className="col-md-1 col-lg-1 "></div>
        <div className="col-md-6 col-lg-6 ">
          {encabezado.map((item, index) => (
            <>
              <div
                className="encabezado titulo-texto"
                style={{ textAlign: "center", lineHeight: "1.5" }}
              >
                <div claseName="container">
                  <a>Contexto del ejemplar: </a>
                  <a>{item.id}</a>

                </div>
              </div>

              <div
                className="encabezado"
                style={{ textAlign: "justify", lineHeight: "1.5" }}
                key={index}
              >
                <div className="row">
                  <div className="col-md-2 col-lg-5 ">
                    <div claseName="container">
                      <a className="titulo-texto">Género textual: </a>
                      <a>{item.genero}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">Sexo: </a>
                      <a>{item.sexo}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">Edad: </a>
                      <a>{item.edad}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">Nivel de instrucción: </a>
                      <a>{item.nivel}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">Años estudiando español: </a>
                      <a>{item.tiempo}</a>
                    </div>
                  </div>
                  <div className="col-md-1 col-lg-7 ">
                    <div claseName="container">
                      <a className="titulo-texto">
                        Nivel de competencia en español:{" "}
                      </a>
                      <a>{item.compet}</a>
                    </div>

                    <div claseName="container">
                      <a className="titulo-texto">Segunda lengua materna: </a>
                      <a>{item.segunda}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">
                        Dominio de lenguas extranjeras:{" "}
                      </a>
                      <a>{item.dominio}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">
                        Estancia en un país hispanohablante:{" "}
                      </a>
                      <a>{item.estancia}</a>
                    </div>
                    <div claseName="container">
                      <a className="titulo-texto">
                        Motivación por el estudio del español:{" "}
                      </a>
                      <a>{item.motivacion}</a>
                    </div>
                  </div>
                </div>
                <div claseName="container">
                      <a className="titulo-texto">Palabras: </a>
                      <a>{opciones.palabras}</a>
                    </div>

                </div>

                <div
                  className="encabezado"
                  style={{ textAlign: "center", lineHeight: "1.5" }}
                >
                  <div claseName="container">
                    <a className="titulo-texto">Tarea de redacción: </a>
                    <a>{tareaRed(item.subtarea)}</a>
                  </div>
                </div>
              
              <div
                className="encabezado"
                style={{ textAlign: "justify", lineHeight: "1.5" }}
                key={index}
              >
                <p dangerouslySetInnerHTML={{ __html: item.texto }}></p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Texto;
