import objetivo from "../array/objetivo.json";
import Image from "next/image";
import imagen1 from "../images/ChinoEspañol2.jpg";

const Objetivo = () => {
  return (
    <section
      id="Objetivo"
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/blanco.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 col-lg-6">
            <div className="mt-6 hero-9-txt cache">
              {objetivo.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <br />
                  <br />
                  <b className="tit">{item.Titulo}</b>
                  <br/>
                  <p >{item.parrafo1}</p>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
              
            </div>
          </div>
            <div className="mt-6 col-md-4 col-lg-6 ">
              <Image className="wow fadeInRight img-fluid" src={imagen1} alt="imagen1" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Objetivo;
