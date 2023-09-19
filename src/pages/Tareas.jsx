import tareas from "../array/tareas.json";

const Tareas = () => {
  return (
    <section
      id="Tareas"
      className="bg-fixed hero-section division wow fadeIn"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañolok5.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-8">
            <div className="mt-6 hero-9-txt cache wow fadeInRight">
              <h3>Tareas</h3>
              {tareas.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <br></br>
                  <h5><strong>{item.tarea}</strong></h5>
 
                  <h5><strong>{item.subtarea1}</strong></h5>
                  <p dangerouslySetInnerHTML={{ __html: item.er1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o11 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o12 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o13 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o14 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o15 }}></p>
                  <h5><strong>{item.subtarea2}</strong></h5>
                  <p dangerouslySetInnerHTML={{ __html: item.er2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o21 }}></p>
                  {item.id > 0 ? (
                    <>
                      <div className="card card-body">
                        <p
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc21 }}
                        ></p>
                        <p dangerouslySetInnerHTML={{ __html: item.c21 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o22 }}></p>
                      <div className=" card card-body">
                        <p
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc22 }}
                        ></p>
                        <p dangerouslySetInnerHTML={{ __html: item.c22 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o23 }}></p>
                      <div className="card card-body">
                        <p
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc23 }}
                        ></p>
                        <p dangerouslySetInnerHTML={{ __html: item.c23 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o24 }}></p>
                      <div className="card card-body">
                        <p
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc24 }}
                        ></p>
                        <p dangerouslySetInnerHTML={{ __html: item.c24 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o25 }}></p>
                      <div className="card card-body">
                        <p
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc25 }}
                        ></p>
                        <p dangerouslySetInnerHTML={{ __html: item.c25 }}></p>
                      </div>
                    </>
                  ) : null}
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
