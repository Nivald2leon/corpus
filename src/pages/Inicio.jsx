
const Inicio = () => {
  return (
    <section
      id=""
      className="bg-fixed hero-section division"
      style={{
        backgroundImage: `url('/imagen/ChinoEspañol5.jpg')`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        minHeight: "100vh", 
      }}/*  */
    >
      <div className="container">

        <div className="row d-flex align-items-center">

          <div className="col-sm-1 col-md-1 col-lg-2">
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 hero-9-txt" style={{ transform: "rotate(12deg)"}} > 
              <h1>.</h1>
              <a>.</a>
              <h2 className="mx-ml-6 custom-font wow bounceIn">CORPUS</h2>
              <h3 className="mt-6 wow rotateIn ">学习西班牙语</h3> 
          </div>
        </div>
        <div className="row d-flex align-items-center">
        <div className="col-sm-16 col-md-4 col-lg-4 hero-9-txt" style={{ transform: "rotate(12deg)"}} >
        <p className=" ml-16 p-title-md">
                Además, un texto introductorio que preparé en estos días.
              </p>

        </div>
        </div>
      </div>

    </section>
  );
};

export default Inicio;
