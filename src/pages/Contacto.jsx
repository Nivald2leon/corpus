import { useState } from "react";
import Image from "next/image";
import contacto from "@/images/contacto.jpg";


const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí puedes usar nodemailer o un servicio de envío de correo electrónico como SendGrid para enviar el correo.
    // Implementar el envío de correo electrónico está más allá del alcance de este ejemplo, pero puedes encontrar tutoriales en línea sobre cómo hacerlo.

    console.log("Datos del formulario:", formData);

    // Luego, puedes realizar la lógica de envío de correo electrónico aquí.

    // Después de enviar el correo electrónico, puedes mostrar un mensaje de confirmación al usuario.
  };

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
              <br/>
              <br/>
              <Image src={contacto} alt="contacto" />

            </div>
          </div>

          <div className="col-md-3 col-lg-6">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              <div style={{ textAlign: "justify", lineHeight: "2" }}>
                <h4>Formulario de contacto</h4>
                <form onSubmit={handleSubmit}>
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
                      className="selec-correo"
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
                      className="selec-correo"
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
                    <input
                      className="selec-correo"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ height: "240px" }}
                    ></input>
                  </div>
                  <button
                    className="mb-2 mt-2 btn-nav-buscar"
                    style={{
                      marginLeft: "auto",
                      backgroundColor: "red",
                    }}
                    type="submit"
                  >
                    Enviar
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
