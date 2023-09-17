import diseño from "../array/diseño.json";
import Image from "next/image";
import tabla from "@/images/tabla.jpg";


const Diseño = () => {
  return (
    <section
      id="Diseño"
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/banco.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* <div className="col-md-1 col-lg-1"></div> */}
          <div className="col-md-6 col-lg-7">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              
                {diseño.map((item, index) => (
                <div style={{ textAlign: "justify", lineHeight: '2' }} key={index}>
                  <h3>{item.Titulo}</h3>
                  <p>{item.parrafo1}</p>
                  
                  <p>{item.parrafo2}</p>
                  
                  <p>{item.parrafo3}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3 col-lg-5">
  <div className="mt-6 hero-9-txt cache">
    <Image src={tabla} alt="tabla" className="wow fadeInLeft img-fluid" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Diseño;
