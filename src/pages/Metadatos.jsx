import Image from "next/image";
import metadatos1 from "../images/metadatos1.jpg";
import metadatos2 from "../images/metadatos2.jpg";
import metadatos3 from "../images/metadatos3.jpg";
import metadatos4 from "../images/metadatos4.jpg";
import metadatos5 from "../images/metadatos5.jpg";
import metadatos from "../array/metadatos.json";

const Metadatos = () => {
  return (
    <section
      id="Metadatos"
      className="bg-fixed hero-section division wow zoomIn"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañolok3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-8">
            <div className="mt-6 hero-9-txt cache">
              {metadatos.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <h3>{item.Titulo}</h3>
                  <p>{item.parrafo1}</p>
                  <p>{item.parrafo2}</p>
                  {item.id == 2 ? (
                    <Image
                      src={metadatos1}
                      alt="tabla metadatos1"
                      className="wow fadeInLeft img-fluid"
                    />
                  ) : null}
                  <div>
                    {item.id == 3 ? (
                      <div>
                        <Image src={metadatos2} alt="metadatos2" className="wow fadeInRight img-fluid"/>
                        <Image src={metadatos3} alt="metadatos3" className="wow fadeInLeft img-fluid"/>
                        <Image src={metadatos4} alt="metadatos4" className="wow fadeInRight img-fluid"/>
                        <Image src={metadatos5} alt="metadatos5" className="wow fadeInLeft img-fluid"/>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metadatos;
