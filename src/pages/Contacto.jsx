import { useState } from "react";
import Image from "next/image";
import contacto from "../images/contacto.jpg";
import { useForm } from "@formspree/react";

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, message } = e.target.elements;
  
    const modifiedMessage = message.value +"";
    
  
    // Llama a handleSubmit con los datos modificados
     await handleSubmit({
      Nombre: name.value,
      Correo: email.value,
      Texto: modifiedMessage,
    }); 
    setIsSubmitting(true);


    setTimeout(async () => {
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 2000);
  };    
  
  //const [state, handleSubmit] = useForm("xknlzqyd"); ///mio
  const [state, handleSubmit] = useForm("mrgwlynz"); //chino

  if (state.succeeded) {
    //return <p>Gracias por Contactarnos!</p>;
  }

  return (
    <section
      id="Contacto"
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/banco.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container align-items-center mt-5 ">
        <br />
        <br />
        <br />

        <div className="row d-flex  ">
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-md-3 col-lg-5">
            <h2>Contacto</h2>
            <div className="mt-6 hero-9-txt cache">
              <div style={{ textAlign: "justify", lineHeight: "2" }}>
                <h4>Datos del Contacto</h4>
                <br />
                <a>
                  Puedes contactar con nosotros usando el formulario de esta
                  página.
                </a>
                <br />
                <a>También puedes usar nuestro correo:</a>
                <b>1040583386@qq.com</b>
              </div>
              <br />
              <br />
              <Image src={contacto} alt="contacto" />
            </div>
          </div>

          <div className="col-md-3 col-lg-6">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              <div style={{ textAlign: "justify", lineHeight: "2" }}>
                <h4>Formulario de contacto</h4>
                <h1 style={{ color:"red"}}>
                {isSubmitting ? "Gracias por Contactarnos!..." : "."}
                </h1>
                
                <form onSubmit={handleFormSubmit}>
                  <div
                    className="form-group mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <label htmlFor="name" style={{ fontSize: "14px" }}>
                      Nombre
                    </label>
                    <input
                      className="selec-correo pl-3"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                    <label htmlFor="email" style={{ fontSize: "14px" }}>
                      Correo Electrónico
                    </label>
                    <input
                      className="selec-correo pl-3"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div
                    className="form-group mt-2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      height: "240px",
                    }}
                  >
                    <label htmlFor="message" style={{ fontSize: "14px" }}>
                      Mensaje
                    </label>
                    <textarea
                      className="selec-correo pl-3"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ height: "240px" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-2 mt-2 btn-nav-buscar"
                    style={{
                      marginLeft: "auto",
                      backgroundColor: "red",
                    }}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
