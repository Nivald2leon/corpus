
const Etiqueta = ({tipo}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b className="text-left barras ">{tipo ? 0 : 17}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b className="text-left barras">{tipo ? 1 : 18}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 2 : 19}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 3 : 20}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 4 : 21}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 5 : 22}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 6 : 23}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 7 : 24}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 8 : 25}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 9 : 26}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 10 : 27}</b>
        </div>
        <div className="col-1 col-sm-1 col-md-1 col-lg-1">
          <b>{tipo ? 11 : 28}</b>
        </div>

      </div>
    </div>
  );
};

export default Etiqueta;
