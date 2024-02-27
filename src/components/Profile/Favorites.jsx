import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favoritos, eliminarFavorito, getFavoritos } = useContext(Context);

  useEffect(() => {
    getFavoritos();
  }, []);

  return (
    <>
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div className="col-xl-9 col-md-8">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
              <span>Favoritos</span>
              <Link className="font-size-sm" to="/products">
                {" "}
                Volver a productos
              </Link>
            </h2>
            {favoritos.map((producto) => (
              <div
                key={producto.id}
                className="d-sm-flex justify-content-between my-4 pb-4 border-bottom"
              >
                <div className="media d-block d-sm-flex text-left text-sm-left">
                  <div className="cart-item-thumb mx-auto mr-sm-4 m-2" href="#">
                    <img src={producto.img} alt="Product" />
                  </div>
                  <div className="media-body pt-3">
                    <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                      <Link
                        className="font-size-sm"
                        to={`/ProductDetail/${producto.id}`}
                      >
                        {" "}
                        {producto.name}
                      </Link>
                    </h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">Categoria: </span>
                      {producto.category}
                    </div>
                  </div>
                </div>
                <div className="botones-cart pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                  <div className="form-group mb-2"></div>

                  <button
                    className="btn btn-outline-danger btn-sm btn-block mb-2"
                    type="button"
                    onClick={() => {
                      eliminarFavorito(producto.id);
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
