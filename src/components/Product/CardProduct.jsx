import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/CardProduct.css";

const CardProduct = ({ id, img, nombre, descripcion, precio }) => {
  return (
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img class="img" src={img} alt="" />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{nombre}</span>
                </div>
                <div class="a-size">
                  <span class="size">{descripcion}</span>
                </div>
              </div>
            </div>
            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>
              <a class="cart" href="#">
                <span class="price">{precio}</span>
                <span class="add-to-cart">
                  <span class="txt">Agregar al carro</span>
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
