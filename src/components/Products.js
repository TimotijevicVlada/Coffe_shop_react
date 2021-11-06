import React from "react";
import { products } from "../data";

const Products = ({ cartProducts, setCartProducts, setCartNum }) => {
  const addToCart = (id) => {
    if (cartProducts.length < 1) {
      const newItem = products.filter((item) => item.id === id);
      const newCartProducts = [
        {
          id: newItem[0].id,
          name: newItem[0].name,
          img: newItem[0].img,
          price: newItem[0].price,
          stars: newItem[0].stars,
        },
      ];
      setCartProducts(newCartProducts);
      setCartNum(cartProducts.length);
    } else {
      for (let i in cartProducts) {
        if (cartProducts[i].id === id) {
          alert("This product is already in the cart!");
          return;
        } else {
          const newItem = products.filter((item) => item.id === id);
          const newCartProducts = [
            ...cartProducts,
            {
              id: newItem[0].id,
              name: newItem[0].name,
              img: newItem[0].img,
              price: newItem[0].price,
              stars: newItem[0].stars,
            },
          ];
          setCartProducts(newCartProducts);
          setCartNum(cartProducts.length);
        }
      }
    }
  };

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
                onClick={() => addToCart(item.id)}
                className="fas fa-shopping-cart"
              ></i>
              <i className="fas fa-heart"></i>
              <i className="fas fa-eye"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
