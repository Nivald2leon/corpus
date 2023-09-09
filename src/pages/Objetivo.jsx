import objetivo from "../array/objetivo.json";
import Image from "next/image";
import imagen1 from "/public/imagen/ChinoEspañol2.jpg";

const Objetivo = () => {
  return (
    <section
      id="Objetivo"
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/blanco.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-2 col-lg-1"></div>
          <div className="col-md-8 col-lg-10">
            <div className="mt-6 hero-9-txt objetivo wow fadeInLeft">
              {objetivo.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <br />
                  <h3 style={{ textAlign: "center" }}>{item.Titulo}</h3>
                  <p style={{ fontSize: '22px' }}>{item.parrafo1}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row d-flex align-items-centerwow ">
            <div className="col-md-2 col-lg-3"></div>
            <div className="col-md-3 col-lg-8 ">
              <Image className="wow fadeInRight img-fluid" src={imagen1} alt="imagen1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivo;
