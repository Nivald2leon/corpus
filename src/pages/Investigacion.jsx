import referencia from "../array/referencia.json";
import investigacion from "../array/investigacion.json";

const Investigacion = () => {
  return (
    <section
      id="Investigacion"
      className="bg-fixed hero-section division wow zoomIn"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañolok3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-8">
            <div className="mt-6 hero-9-txt cache">
                <h3>Publicaciones</h3>
                {referencia.map((item, index) => (
                <div style={{ textAlign: "justify", lineHeight: '2' }} key={index}>
                 
                  <br/>
                  <b>{item.año}</b>
                  <br/>
                  <a>{item.autor}</a>
                  <b>&nbsp;{item.tipo}</b>
                  <br/>
                  <b>Título:&nbsp;</b>
                  <a>{item.titulo}</a>
                  <br/>
                  <b>{item.obra ? "Obra" : "Revista"}:&nbsp;</b>
                  <a>{item.obra}</a>
                  <a>{item.revista}</a>
                  <br/>
                  <a>{item.referencia}</a>
                </div>
              ))}
                {investigacion.map((item, index) => (
                <div style={{ textAlign: "justify", lineHeight: '2' }} key={index}>
                 
                  <br/>
                  <b>{item.año}</b>
                  <br/>
                  <a>{item.autor}</a>
                  <br/>
                  <a>&nbsp;{item.titulo}</a>
 
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigacion;
