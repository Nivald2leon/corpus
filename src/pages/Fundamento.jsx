import fundamento from "../array/fundamento.json";

const Fundamento = () => {
  return (
    <section
      id="Fundamento"
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
              <h2>Fundamentos teóricos y metodológicos</h2>
              {fundamento.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <h4>{item.Titulo}</h4>
                  <p>{item.parrafo}</p>
                </div>
              ))}
            </div>
          </div>
         </div>
      </div> 
  </section>
  );
};

export default Fundamento;
