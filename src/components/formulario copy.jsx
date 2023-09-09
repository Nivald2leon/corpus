import React, { useState, useEffect } from "react";
import arrayGenero from "../array/genero.json";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Formulario = ({ onFilterChange, opciones }) => {
/*   const [objectState, setObjectState] = useState({
    initialState: opciones ? 0 : 1,
    genero: "",
    tarea: "",
    sexo: "",
    edad: "",
    nivel: "",
    segunda: "",
    dominio: "",
    compet: "",
    anos: "",
    estancia: "",
    palabras: "",
  });
 */
  //carga inicial cuando vuelve a entrar
  const [selectedData, setSelectedData] = useState({
    genero: opciones && opciones.genero ? opciones.genero : "",
    tarea: opciones && opciones.tarea ? opciones.tarea : "",
    sexo: opciones && opciones.sexo ? opciones.sexo : "",
    edad: opciones && opciones.edad ? opciones.edad : "",
    nivel: opciones && opciones.nivel ? opciones.nivel : "",
    segunda: opciones && opciones.segunda ? opciones.segunda : "",
    dominio: opciones && opciones.dominio ? opciones.dominio : "",
    compet: opciones && opciones.compet ? opciones.compet : "",
    anos: opciones && opciones.anos ? opciones.anos : "",
    estancia: opciones && opciones.estancia ? opciones.estancia : "",
    palabras: opciones && opciones.palabras ? opciones.palabras : "",
  });

  const initialValues = {
    genero: opciones?.genero || "",
    tarea: opciones?.tarea || "",
    sexo: opciones?.sexo || "",
    edad: opciones?.edad || "",
    nivel: opciones?.nivel || "",
    segunda: opciones?.segunda || "",
    dominio: opciones?.dominio || "",
    compet: opciones?.compet || "",
    anos: opciones?.anos || "",
    estancia: opciones?.estancia || "",
    palabras: opciones?.palabras || "",
  };


  //Actualizar el estado cuando no se entra por primera vez
  useEffect(() => {
    if (opciones !== null) {
      setSelectedData(opciones);
    }
  }, [opciones]);

  const handleSubmit = async (values, e) => {
    console.log("submit");
    try {
      const updatedData = {
        genero: values.genero !== null ? values.genero : "",
        tarea: values.tarea !== null ? values.tarea : "",
        sexo: values.sexo !== null ? values.sexo : "",
        edad: values.edad !== null ? values.edad : "",
        nivel: values.nivel !== null ? values.nivel : "",
        segunda: values.segunda !== null ? values.segunda : "",
        dominio: values.dominio !== null ? values.dominio : "",
        compet: values.compet !== null ? values.compet : "",
        anos: values.anos !== null ? values.anos : "",
        estancia: values.estancia !== null ? values.estancia : "",
        palabras: values.palabras !== null ? values.palabras : "",
      };
  
      
  
      // Actualiza selectedData en el estado
      setSelectedData((prevValues) => ({
        ...prevValues,
        ...updatedData,
      }));
      console.log("HandleSumit");
      console.log(selectedData)
      onFilterChange(selectedData)
      // Espera a que selectedData se actualice y luego llama a onDataChange
      await new Promise((resolve) => {
        onFilterChange(selectedData);
        resolve();
      });
      console.log(selectedData)
      Console.log(updatedData)
      // Actualizando el estado con los valores del formulario
      console.log(values.genero);
    } catch (error) {
      console.error("Error en el manejo del formulario:", error);
    }
  };
  
  //Validacion de campos obligatorios
  const validateForm = (values) => {
    const errors = {};
    if (!values.palabras) {
      errors.palabras = "Las palabras son obligatorias";
    }
    return errors;
  };

  return (
    <div>
      <div className=" menu clearfix wsmainwp">
        <div className="row">
          <div className="col-md-8 col-lg-6 ">
            <h4
              className="mb-2 text-xl font-bold"
              style={{ marginleft: "20px" }}
            >
              CORPUS A BUSCAR
            </h4>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={validateForm}
            >
              {(formik) => (
                <Form>
                  <div
                    style={{
                      alignItems: "center",
                      border: "1px solid gray",
                      padding: "15px",
                      width: "545x",
                      marginBottom: "45px",
                    }}
                  >
                    <div className="form-group">
                      <label htmlFor="genero">Género textual:</label>
                      <select
                        className="selec-simple"
                        name="genero"
                        id="genero"
                      >
                        {arrayGenero.map((opcion) => (
                          <option key={opcion.id} value={opcion.selec}>
                            {opcion.selec}
                          </option>
                        ))}
                      </select>
                    </div>




                    <div className="form-group" style={{ marginTop: "15px" }}>
                      <label htmlFor="palabras">Palabras :(*)</label>
                      <Field
                        //innerRef={palabras}
                        type="text"
                        id="palabras"
                        name="palabras"
                        className="form-control"
                        //style={{ width: "200px" }}
                        onBlur={(e) => {
                          //estadoConfir();
                        }}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            //handLast_nameRef();
                          }
                        }}
                      />
                      <ErrorMessage
                        name="palabras"
                        component="div"
                        className="error-message"
                        style={{ color: "red" }}
                      />

                      <button
                        type="submit"
                        className="btn violet-red--btn-nav nav-button"
                        style={{
                          marginTop: "25px",
                          marginLeft: "120px",
                          width: "180px",
                          height: "50px",
                        }}
                      >
                        Buscar
                      </button>
                      <p>(*) estos campos son obligatorios</p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
