import "bootstrap/dist/css/bootstrap.min.css";

function SectionCategory() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/BARRA_500x200.png"
              className="card-img-top"
              alt="..."
            />
          </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/Cacao_500x200.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/FRUTOS_SECOS_500x200.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
          <div className="card">
            <img
              src="../../../public/te_500x200.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          </div>
    </div>
    </div>
  );
}

export default SectionCategory;
