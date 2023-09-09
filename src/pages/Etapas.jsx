import etapas from "../array/etapas.json";
import Image from "next/image";
import etapa from "/public/imagen/etapas.jpg";

const Tareas = () => {
  return (
    <section
      id="Etapas"
      className="bg-fixed hero-section division wow fadeIn"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañolok.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed"
      }}
    >
       <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-8">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              <h2>Etapas</h2>
              {etapas.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <h4>{item.Titulo}</h4>
                  <p>{item.etapa}</p>
                  {item.id==0 ? <Image src={etapa} alt="etapa" className="wow fadeInLeft img-fluid" /> : null}
                  <ol>
                  {item.subetapa1 ? <li>{item.subetapa1}</li> : null}

                  {item.subetapa2 ? <li>{item.subetapa2}</li> : null}
                  {item.subetapa3 ? <li>{item.subetapa3}</li> : null}
                  {item.subetapa4 ? <li>{item.subetapa4}</li> : null}
                  {item.subetapa5 ? <li>{item.subetapa5}</li> : null}
                  {item.subetapa6 ? <li>{item.subetapa6}</li> : null}
                  {item.subetapa7 ? <li>{item.subetapa7}</li> : null}
                  {item.subetapa8 ? <li>{item.subetapa8}</li> : null}
                  </ol>
                </div>
              ))}
            </div>

          </div>
         </div>
      </div> 
  </section>
  );
};

export default Tareas;
