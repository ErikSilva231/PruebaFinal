import "bootstrap/dist/css/bootstrap.min.css";

const CardProduct = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text text-center fw-bold bg-light py-2">${precio}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
