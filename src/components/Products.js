import React from "react";
import { products } from "../data";

const Products = ({ addToCart, addToFav, viewDetails }) => {


  return (
    <div className="products" id="products">
      <div className="products_title">
        <h1>Our products</h1>
      </div>
      <div className="products_wrapper">
        {products.map((item) => (
          <div className="item" key={item.id}>
            <img src={`coffee_img/${item.img}`} alt={item.name} />
            <div className="info">
              <h3 className="name">{item.name}</h3>
              <div className="price">
                <span className="current">
                  ${item.price.current.toFixed(2)}
                </span>
                <span className="old">${item.price.old.toFixed(2)}</span>
              </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="events">
              <i
                onClick={() => addToCart(item)}
                className="fas fa-shopping-cart"
              ></i>
              <i onClick={() => addToFav(item)} className="fas fa-heart"></i>
              <i onClick={() => viewDetails(item)} className="fas fa-eye"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
