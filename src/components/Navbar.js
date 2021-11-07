import React, { useState } from "react";
import Contact from "./Contact";
import Cart from "./Cart";

const Navbar = ({ contact, setContact, switchContact, setSwitchContact, cartVisibility, setCartVisibility, cartProducts, deleteCartItem, totalProducts, totalPrice, increaseQuantity, decreaseQuantity }) => {

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const toggleCart = () => {
    setCartVisibility(!cartVisibility);
    setContact(false);
  }

  const toggleContact = () => {
    setContact(!contact);
    setCartVisibility(false);
  }

  return (
    <div className={navbar ? "navbar scroll" : "navbar"} id="navbar">
      <div className="logo">
        <span>Coffee</span>
        <i className="fas fa-mug-hot"></i>
      </div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#popular">Popular</a>
        <a href="#contact">Contact</a>
        <a href="#review">Review</a>
      </div>
      <div className="menu_right">
        <i
          onClick={toggleCart}
          className="fas fa-shopping-cart"
        >{totalProducts < 1 ? "" : <span className="cartNum">{totalProducts}</span>}</i>
        <i onClick={toggleContact} className="fas fa-user"></i>
        <Contact
          contact={contact}
          setContact={setContact}
          switchContact={switchContact}
          setSwitchContact={setSwitchContact}
        />
        <Cart 
            cartVisibility={cartVisibility}
            cartProducts={cartProducts}
            deleteCartItem={deleteCartItem}
            totalProducts={totalProducts}
            totalPrice={totalPrice}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default Navbar;
