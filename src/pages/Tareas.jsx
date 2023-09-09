import tareas from "../array/tareas.json";

const Tareas = () => {
  return (
    <section
      id="Tareas"
      className="bg-fixed hero-section division wow fadeIn"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañolok.jpg')`,
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
              <h2>Tareas</h2>
              {tareas.map((item, index) => (
                <div
                  style={{ textAlign: "justify", lineHeight: "2" }}
                  key={index}
                >
                  <br></br>
                  <h4>{item.tarea}</h4>
                  <h5>{item.subtarea1}</h5>
                  <p dangerouslySetInnerHTML={{ __html: item.er1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o11 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o12 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o13 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o14 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o15 }}></p>
                  <h6>{item.subtarea2}</h6>
                  <p dangerouslySetInnerHTML={{ __html: item.er2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: item.o21 }}></p>
                  {item.id > 0 ? (
                    <>
                      <div className="card card-body">
                        <h5
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc21 }}
                        ></h5>
                        <p dangerouslySetInnerHTML={{ __html: item.c21 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o22 }}></p>
                      <div className=" card card-body">
                        <h5
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc22 }}
                        ></h5>
                        <p dangerouslySetInnerHTML={{ __html: item.c22 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o23 }}></p>
                      <div className="card card-body">
                        <h5
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc23 }}
                        ></h5>
                        <p dangerouslySetInnerHTML={{ __html: item.c23 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o24 }}></p>
                      <div className="card card-body">
                        <h5
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc24 }}
                        ></h5>
                        <p dangerouslySetInnerHTML={{ __html: item.c24 }}></p>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: item.o25 }}></p>
                      <div className="card card-body">
                        <h5
                          className="correo"
                          dangerouslySetInnerHTML={{ __html: item.tc25 }}
                        ></h5>
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
