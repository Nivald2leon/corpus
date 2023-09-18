import React, { Fragment } from "react"; 
import guia from "../array/guia.json";
import Image from "next/image";
import palabra from "../images/guiapalabra.jpg";
import tarea from "../images/tarea.jpg";
import guia1 from "../images/guia1.jpg";
import guia2 from "../images/guia2.jpg";
import guia3 from "../images/guia3.jpg";
import guia4 from "../images/guia4.jpg";
import guia5 from "../images/guia5.jpg";

const Guia = () => {
  return (
    <section
      id="Guia"
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/banco.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {guia.map((item, index) => (
        <Fragment key={index}>
          <div  className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-3 col-lg-6">
                <div className="mt-6 hero-9-txt cache">
                  <div
                    style={{ textAlign: "justify", lineHeight: "2" }}
                    key={index}
                  >
                    <h3>{item.Titulo1}</h3>
                    <a dangerouslySetInnerHTML={{ __html: item.parrafo1 }}></a>
                    <Image
                      src={guia1}
                      alt="guia1"
                      className="wow fadeInLeft img-fluid"
                    />
                    <a dangerouslySetInnerHTML={{ __html: item.parrafo2 }}></a>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-1 col-lg-1"></div> */}
              <div className="col-md-6 col-lg-6">
                <div className="mt-6 hero-9-txt cache wow fadeInRight">
                  <div
                    style={{ textAlign: "justify", lineHeight: "2" }}
                    key={index}
                  >
                    <Image
                      src={guia2}
                      alt="guia2"
                      className="wow fadeInLeft img-fluid"
                    />
                    <a dangerouslySetInnerHTML={{ __html: item.parrafo3 }}></a>
                    <br />
                    <li>{item.lista1}</li>
                    <Image
                      src={palabra}
                      alt="palabra"
                      className="wow fadeInLeft img-fluid"
                    />

                    <div className="container">
                      <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-lg-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <>
              <div className="row d-flex align-items-center">
                <div className="col-md-3 col-lg-6">
                  <div className="mt-6 hero-9-txt cache wow fadeIn">
                    <div
                      style={{ textAlign: "justify", lineHeight: "2" }}
                      key={index}
                    >
                      <li>{item.lista2}</li>
                      <Image
                        src={tarea}
                        alt="tarea"
                        className="wow fadeInLeft img-fluid"
                      />

                      <a
                        dangerouslySetInnerHTML={{ __html: item.parrafo4 }}
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="mt-6 hero-9-txt cache wow fadeInRight">
                    <div
                      style={{ textAlign: "justify", lineHeight: "2" }}
                      key={index}
                    >
                      <a
                        dangerouslySetInnerHTML={{ __html: item.parrafo5 }}
                      ></a>

                      <Image
                        src={guia3}
                        alt="guia3"
                        className="wow fadeInLeft img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-3 col-lg-6">
                <div className="mt-6 hero-9-txt cache">
                  <div
                    style={{ textAlign: "justify", lineHeight: "2" }}
                    key={index}
                  >
                    <a dangerouslySetInnerHTML={{ __html: item.parrafo6 }}></a>

                    <Image
                      src={guia4}
                      alt="guia3"
                      className="wow fadeInLeft img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="mt-6 hero-9-txt cache wow fadeInRight">
                  <div
                    style={{ textAlign: "justify", lineHeight: "2" }}
                    key={index}
                  >
                    <a dangerouslySetInnerHTML={{ __html: item.parrafo7 }}></a>

                    <Image
                      src={guia5}
                      alt="guia3"
                      className="wow fadeInLeft img-fluid"
                    />
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          </Fragment>
      ))}
    </section>
  );
};

export default Guia;
