import React, { useState } from "react";


const Navbar = ({ contact, setContact, cartVisibility, setCartVisibility, totalProducts, favVisible, setFavVisible, favProducts, setDetailsVisible }) => {

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
    setFavVisible(false);
    setDetailsVisible(false);
  }

  const toggleContact = () => {
    setContact(!contact);
    setCartVisibility(false);
    setFavVisible(false);
    setDetailsVisible(false);
  }
  
  const toggleFav = () => {
    setFavVisible(!favVisible);
    setCartVisibility(false);
    setContact(false);
    setDetailsVisible(false);
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
        <i onClick={toggleFav} className="fas fa-heart">{favProducts.length < 1 ? "" : <span className="favNum">{favProducts.length}</span>}</i>
        <i onClick={toggleContact} className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
