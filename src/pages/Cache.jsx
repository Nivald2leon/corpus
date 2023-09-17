import cache from "../array/cache.json";

const Cache = () => {
  return (
    <section
      id="Cache"
      className="bg-fixed hero-section division wow zoomIn"
      style={{
        backgroundImage: `url('/imagen/fondo-cache.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-8">
            <div className="mt-6 hero-9-txt cache">
              
                {cache.map((item, index) => (
                <div style={{ textAlign: "justify", lineHeight: '2' }} key={index}>
                  <h3>{item.Titulo}</h3>
                  <p>{item.parrafo1}</p>
                  <p>{item.parrafo2}</p>
                  <p>{item.parrafo3}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cache;
