import Link from "next/link";
import Progress from "./Progress";
import Efecto from "@/app/components/Efecto";
import Logo from "@/app/components/Logo";

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
          <div className="row d-flex ">
            <div className="ml-3 col-md-2 col-lg-2 text-center">
              <Logo />
            </div>

            <div className="col-md-2 col-lg-1 text-center">
              {page === 1 && <a style={{ color: "#ffffff" }}>Búsqueda</a>}
            </div>
            <div className="col-md-2 col-lg-2 text-center">
              {page === 2 && <a style={{ color: "#ffffff" }}>Seleción</a>}
            </div>
            <div className="col-md-2 col-lg-2 text-center">
              {page === 3 && <a style={{ color: "#ffffff" }}>Texto</a>}
            </div>
            <div className="col-md-8 col-lg-8 text-center"></div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-1 col-lg-1 text-center"></div>

            <div className="col-md-6 col-lg-6 text-center">
              <Progress currentPage={page} />
              <h6></h6>
            </div>
          </div>

            <div
              className="d-flex align-items-center"
              style={{ position: "fixed" }}
            >
                <div className="row">
                  <div className="col-md-1 col-lg-3 container">
                    <div className="mt-lg-3 mt-md-2"> 
                       
                      {page === 1 && (
                        <Link
                          href="/"
                          className="btn-nav-buscar btn-nav-link"
                          style={{ border: "2px solid red", marginLeft:"20px", marginTop:"1px"}}
                        >
                          Inicio
                        </Link>
                      )}

                      {page > 1 && (
                        <button
                          className="btn-nav-buscar ml-3"
                          style={{
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
      </div>
    </div>
  );
};

export default Header;
