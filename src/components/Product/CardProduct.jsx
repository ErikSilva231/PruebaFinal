import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/CardProduct.css";

const CardProduct = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={img} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{nombre}</span>
                </div>
                <div className="a-size">
                  <span className="size">{descripcion}</span>
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>
              <a className="cart" href="#">
                <span className="price">{precio}</span>
                <span className="add-to-cart">
                  <span className="txt">Agregar al carro</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
