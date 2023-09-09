import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Etiqueta from "./Etiqueta"
import arrayGenero from "../array/genero.json";
import arraySubtarea from "../array/subtarea.json";
import arraySexo from "../array/sexo.json";
import arrayNivel from "../array/nivel.json";
import arraySegunda from "../array/segunda.json";
import arrayDominio from "../array/dominio.json";
import arrayCompet from "../array/compet.json";

import { Formik, Field, Form, ErrorMessage } from "formik";
let edad,
  estancia,
  motivacion,
  tiempo = null;
const Formulario = ({ onDataChange, opciones, onhandleMove }) => {
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
    tiempo: opciones && opciones.tiempo ? opciones.tiempo : "",
    estancia: opciones && opciones.estancia ? opciones.estancia : "",
    palabras: opciones && opciones.palabras ? opciones.palabras : "",
    motivacion: opciones && opciones.motivacion ? opciones.motivacion : "",
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
    tiempo: opciones?.tiempo || "",
    estancia: opciones?.estancia || "",
    palabras: opciones?.palabras || "",
    motivacion: opciones?.motivacion || "",
  };

  //Actualizar el estado cuando no se entra por primera vez
  useEffect(() => {
    console.log(opciones);
    if (opciones !== null) {
      setSelectedData(opciones);
    }
    console.log(opciones);
    onDataChange(opciones);
  }, [opciones, edad, estancia, motivacion]);

  const handlelLimpiar = async (values) => {
    setSelectedData({
      genero: "",
      tarea: "",
      sexo: "",
      edad: "",
      nivel: "",
      segunda: "",
      dominio: "",
      compet: "",
      tiempo: "",
      estancia: "",
      palabras: "",
      motivacion: "",
    });
    const initialValues = {
      genero: "",
      tarea: "",
      sexo: "",
      edad: "",
      nivel: "",
      segunda: "",
      dominio: "",
      compet: "",
      tiempo: "",
      estancia: "",
      palabras: "",
      motivacion: "",
    };

    console.log(initialValues);
    setSelectedData(initialValues);
    console.log(selectedData);
    onDataChange(initialValues);
  };

  const handleSubmit = async (values, e) => {
    console.log(values);
    try {
      const updatedData = {
        genero: values.genero !== null ? values.genero : "",
        tarea: values.tarea !== null ? values.tarea : "",
        sexo: values.sexo !== null ? values.sexo : "",
        edad: edad !== null ? edad : "",
        nivel: values.nivel !== null ? values.nivel : "",
        segunda: values.segunda !== null ? values.segunda : "",
        dominio: values.dominio !== null ? values.dominio : "",
        compet: values.compet !== null ? values.compet : "",
        tiempo: tiempo !== null ? tiempo : "",
        estancia: estancia !== null ? estancia : "",
        palabras: values.palabras !== null ? values.palabras : "",
        motivacion: motivacion !== null ? motivacion : "",
      };
      console.log(values.genero);
      console.log(values.palabras);

      // Actualiza selectedData en el estado
      setSelectedData((prevValues) => ({
        ...prevValues,
        ...updatedData,
      }));
      console.log("HandleSumit");
      // Espera a que selectedData se actualice y luego llama a onDataChange

      await onDataChange(updatedData);

      console.log(selectedData);
      // Actualizando el estado con los valores del formulario
      onhandleMove(1);
      console.log(values.genero);
      console.log(values.palabras);
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
    <div className="  menu clearfix form-corpus">
      <div className=" row">
        <div className="col-sd-0 col-md-1 col-lg-2"></div>
        <div className="mt-4 col-md-7 col-lg-7 col-sm-4">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
          >
            {(formik) => (
              <Form>
                <div className="container d-flex align-items-center">
                  <h4
                    className="mb-2 text-xl font-bold"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    CORPUS A
                  </h4>
                  <button
                    href="#Buscar"
                    type="button"
                    className="mb-2 btn-nav-buscar"
                    style={{
                      marginLeft: "auto",
                      backgroundColor: "red",
                    }}
                    onClick={handlelLimpiar}
                  >
                    Limpiar
                  </button>

                  <button
                    type="submit"
                    className="mb-2 btn-nav-buscar"
                    style={{
                      marginLeft: "auto",
                      backgroundColor: "red",
                    }}
                  >
                    Buscar
                  </button>
                </div>
                <ErrorMessage
                  name="palabras"
                  component="div"
                  className="error-message"
                  style={{ color: "red" }}
                />

                <div
                  className="container d-flex align-items-center"
                  style={{
                    border: "2px solid red",
                    padding: "5px",
                  }}
                >
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="compet" style={{ fontSize: "14px" }}>
                          Nivel de competencia en español:
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="compet"
                          id="compet"
                        >
                          <option value=""></option>{" "}
                          {arrayCompet.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="tarea" style={{ fontSize: "14px" }}>
                          Tarea de redacción:
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="tarea"
                          id="tarea"
                        >
                          <option value=""></option>{" "}
                          {arraySubtarea.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="genero" style={{ fontSize: "14px" }}>
                          Género textual:
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="genero"
                          id="genero"
                        >
                          <option value=""></option>{" "}
                          {arrayGenero.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="sexo" style={{ fontSize: "14px" }}>
                          Sexo :
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="sexo"
                          id="sexo"
                        >
                          <option value=""></option>{" "}
                          {arraySexo.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="nivel" style={{ fontSize: "14px" }}>
                          Nivel de instrucción:
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="nivel"
                          id="nivel"
                        >
                          <option value=""></option>{" "}
                          {arrayNivel.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="dominio" style={{ fontSize: "14px" }}>
                          Dominio de lenguas extranjeras :
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="dominio"
                          id="dominio"
                        >
                          <option value=""></option>{" "}
                          {arrayDominio.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>
                    </div>

                    <div className="col-md-7 col-lg-6 ">
                      <div
                        className="form-group mt-2 ml-1"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="palabras" style={{ fontSize: "14px" }}>
                          <a>Palabras: </a>
                          <a style={{ color: "red" }}>(campo obligatorio)</a>
                        </label>
                        <Field
                          //innerRef={palabras}
                          className="selec-simple"
                          type="text"
                          id="palabras"
                          name="palabras"
                          onBlur={(e) => {}}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="segunda" style={{ fontSize: "14px" }}>
                          Segunda lengua materna:
                        </label>
                        <Field
                          as="select"
                          className="selec-simple"
                          name="segunda"
                          id="segunda"
                        >
                          <option value=""></option>{" "}
                          {arraySegunda.map((opcion) => (
                            <option key={opcion.id} value={opcion.selec}>
                              {opcion.selec}
                            </option>
                          ))}
                        </Field>
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="edad" style={{ fontSize: "14px" }}>
                          Edad:&nbsp;&nbsp;{edad}
                        </label>
                        <Slider
                          name="edad"
                          id="edad"
                          min={17}
                          max={28}
                          defaultValue={edad}
                          onChange={(value) => {
                            edad = value; setSelectedData({edad: value,});
                          }}
                        />
                       <Etiqueta tipo={0}/>
                       </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="estancia" style={{ fontSize: "14px" }}>
                          Estancia:&nbsp;&nbsp;{estancia}
                        </label>
                        <Slider
                          name="estancia"
                          id="estancia"
                          min={0}
                          max={11}
                          defaultValue={estancia}
                          onChange={(value) => {
                            estancia = value; setSelectedData({estancia: value,});
                          }}
                        />
                        <Etiqueta tipo={1}/>
                      </div>

                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label
                          htmlFor="motivacion"
                          style={{ fontSize: "14px" }}
                        >
                          Motivación por el estudio del español :&nbsp;&nbsp;{motivacion}
                        </label>
                        <Slider
                          name="motivacion"
                          id="motivacion"
                          min={0}
                          max={11}
                          defaultValue={motivacion}
                          onChange={(value) => {
                            motivacion = value; setSelectedData({motivacion: value,});
                          }}
                        />
                        <Etiqueta tipo={1}/>
                      </div>


                      <div
                        className="form-group mt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label htmlFor="tiempo" style={{ fontSize: "14px" }}>
                          Años estudiando español :&nbsp;&nbsp;{tiempo}
                        </label>
                        <Slider
                          name="tiempo"
                          id="tiempo"
                          min={0}
                          max={11}
                          defaultValue={tiempo}
                          onChange={(value) => {
                            tiempo = value; setSelectedData({tiempo: value,});
                          }}
                        />
                         <Etiqueta tipo={1}/>
                       </div>







                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
