import Link from "next/link";
import Progress from "./Progress";
import Efecto from "@/components/Efecto";

const Header = ({ page, onhandleMove }) => {
  const handlePrevious = () => {
    onhandleMove(-1);
  };

  const handleNext = () => {
    onhandleMove(1);
  };

  return (
    <div>
      <Efecto />
      <div className="mi-div-fijo">
        <div style={{ backgroundColor: "red", height: "45px" }}>
          <div className="wsmainwp clearfix">
            <div className="row d-flex align-items-center">
              <div className="col-md-2 col-lg-2 text-center">
                {page === 1 && <a style={{ color: "#ffffff" }}>Búsqueda</a>}
              </div>
              <div className="col-md-2 col-lg-2 text-center">
                {page === 2 && <a style={{ color: "#ffffff" }}>Seleción</a>}
              </div>
              <div className="col-md-2 col-lg-2 text-center">
                {page === 3 && <a style={{ color: "#ffffff" }}>Texto</a>}
              </div>
            </div>

            <div
              className="d-flex align-items-center"
              style={{ position: "fixed" }}
            >
              <div className="fixed-navigation">
                <div className="row">
                  <div className="col-md-0 col-lg-0 container"></div>
                  <div className="col-md-1 col-lg-12 container">
                    <div className=" mt-3 nav-container ">
                      {page === 1 && (
                        <Link
                          href="/"
                          className="btn-nav-corpus btn-nav-link"
                          style={{ border: "2px solid red" }}
                        >
                          Inicio
                        </Link>
                      )}

                      {page > 1 && (
                        <button
                          className="btn-nav-corpus"
                          style={{
                            marginRight: "10px",
                            border: "2px solid red",
                          }}
                          onClick={handlePrevious}
                        >
                          Atras
                        </button>
                      )}

                      {page > 3 && (
                        <button
                          className="btn-nav-corpus"
                          style={{ border: "2px solid red" }}
                          onClick={handleNext}
                        >
                          Siguiente
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-lg-6 text-center">
                <Progress currentPage={page} />
                <h6></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
