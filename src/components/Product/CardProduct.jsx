import "bootstrap/dist/css/bootstrap.min.css";

const CardProduct = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-3 mt-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{nombre}</h5>
          <h5 className="fw-bold"><span className="fw-normal fs-6">Desde </span>${precio}</h5>
          <p className="card-text fs-6">{descripcion}</p>
        </div>
        
          <p type="button" href="#" className="container-fluid card-text text-center fw-bold bg-secondary py-4 ">AGREGAR A CARRITO</p>
         
        </div>
      </div>
  );
};

export default CardProduct;
