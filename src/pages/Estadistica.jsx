import estadistica from "../array/estadistica.json";
import Image from "next/image";
import estad from "/public/imagen/estad.jpg";
import estad1 from "/public/imagen/estad1.jpg";
import estad2 from "/public/imagen/estad2.jpg";
import estad3 from "/public/imagen/estad3.jpg";
import estad4 from "/public/imagen/estad4.jpg";
import estad5 from "/public/imagen/estad5.jpg";
import estad6 from "/public/imagen/estad6.jpg";
import estad7 from "/public/imagen/estad7.jpg";
import estad8 from "/public/imagen/estad8.jpg";
import estad9 from "/public/imagen/estad9.jpg";
import estad10 from "/public/imagen/estad10.jpg";
import estad11 from "/public/imagen/estad11.jpg";
import estad12 from "/public/imagen/estad12.jpg";
import estad13 from "/public/imagen/estad13.jpg";
import estad14 from "/public/imagen/estad14.jpg";
import estad15 from "/public/imagen/estad15.jpg";
import Efecto from "../components/Efecto";

const Estadistica = () => {
  return (
    <section
      id="Estadistica"
      className="bg-fixed hero-section division wow bounceIn"
      style={{
        backgroundImage: `url('/imagen/estad.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Efecto/>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-7">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              {estadistica.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <h6><br></br></h6>
                  <h3>{item.Titulo1}</h3>
                  <h6><br></br></h6>
                  <Image src={estad1} alt="estad1" className="wow fadeInLeft img-fluid"/>
                  <p>{item.parrafo}</p>
                  <h4>{item.pieparrafo}</h4>
                  <h3>{item.Titulo2}</h3>
                  <h4>{item.subtitulo21}</h4>
                  <Image src={estad2} alt="estad2" className="wow fadeInRight img-fluid"/>
                  <Image src={estad3} alt="estad3" className="wow fadeInLeft img-fluid"/>
                  <Image src={estad4} alt="estad4" className="wow fadeInRight img-fluid"/>
                  <Image src={estad5} alt="estad5" className="wow fadeInLeft img-fluid"/>
                  <Image src={estad6} alt="estad6" className="wow fadeInRight img-fluid"/>
                  <Image src={estad7} alt="estad7" className="wow fadeInLeft img-fluid"/>
                  <Image src={estad8} alt="estad8" className="wow fadeInRight img-fluid"/>
                  <h4>{item.subtitulo22}</h4>
                  <Image src={estad9} alt="estad9" className="wow fadeInLeft img-fluid"/>
                  <h4>{item.subtitulo23}</h4>
                  <Image src={estad10} alt="estad10" className="wow fadeInRight img-fluid"/>
                  <Image src={estad11} alt="estad11" className="wow fadeInLeft img-fluid"/>
                  <Image src={estad12} alt="estad12" className="wow fadeInRight img-fluid"/>
                  <Image src={estad13} alt="estad13" className="wow fadeInLeft img-fluid"/>
                  <Image src={estad14} alt="estad14" className="wow fadeInRight img-fluid"/>
                  <Image src={estad15} alt="estad15" className="wow fadeInLeft img-fluid"/>
                </div>
              ))}
             </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estadistica;
