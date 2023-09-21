import Link from "next/link";
import Progress from "./Progress";
import Efecto from "../../app/components/Efecto";
import Logo from "../../app/components/Logo";
import Image from "next/image";

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

      <div className="w-full custom-navbar fixed z-10 ">
        <div style={{ backgroundColor: "red", height: "70px" }}>
          <div className="row d-flex ">
            <div className="col-6 col-md-1 col-lg-1text-center">
              <div className="items-center justify-between pt-0 md:py-0 md:block">
                <Image
                  src="/imagen/logocache.png"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
            </div>

            <div className="col-6 col-md-1 col-lg-1 mt-0 text-center">
              {page < 2 && (
                <button
                  className="btn-nav-buscar mt-lg-3"
                  style={{
                    border: "2px solid red",
                  }}
                >
                  <a href="/">Inicio</a>
                </button>
              )}
              {page > 1 && (
                <button
                  className="btn-nav-buscar mt-lg-3"
                  style={{
                    border: "2px solid red",
                  }}
                  onClick={handlePrevious}
                >
                  Atras
                </button>
              )}
            </div>

            <div className="col-md-3 col-lg-5 text-center">
              {page > 0 && (
                <a className="md:hidden text-white" style={{ fontSize: "8px" }}>
                  Subcorpus de Aprendientes Chinos de Español como Lengua
                  Extranjera. Componente Escrito.
                </a>
              )}
              <Progress currentPage={page} />
              {page > 0 && (
                <div className="text-center hidden sm:block text-white" style={{ fontSize: "18px" }}>
                  Subcorpus de Aprendientes Chinos de Español como Lengua
                  Extranjera. Componente Escrito.
                </div>
              )}

              {page === 0 && (
                <>
                  <b className="md:hidden " style={{ fontSize: "20px" }}>
                    Subcorpus en construcción.
                  </b>

                  <b className="text-center hidden sm:block text-white">
                    Subcorpus en construcción.
                  </b>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
