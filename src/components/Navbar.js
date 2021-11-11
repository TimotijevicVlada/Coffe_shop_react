import React, { useState, useRef, useEffect } from "react";


const Navbar = ({ menuIcon, contactIcon, favIcon, cartIcon, contact, setContact, cartVisibility, setCartVisibility, totalProducts, favVisible, setFavVisible, favProducts, setDetailsVisible, menuVisible, setMenuVisible }) => {

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
    setMenuVisible(false);
  }

  const toggleContact = () => {
    setContact(!contact);
    setCartVisibility(false);
    setFavVisible(false);
    setDetailsVisible(false);
    setMenuVisible(false);
  }
  
  const toggleFav = () => {
    setFavVisible(!favVisible);
    setCartVisibility(false);
    setContact(false);
    setDetailsVisible(false);
    setMenuVisible(false);
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setCartVisibility(false);
    setContact(false);
    setDetailsVisible(false);
    setFavVisible(false);
  }

  //Setting the event to close the menu when I click out of this div
  let menuRef = useRef();
  useEffect(() => {
    let menuHandler = (event) => {
      if(!menuRef.current.contains(event.target) && !menuIcon.current.contains(event.target)) {
        setMenuVisible(false);
      }
    }
    document.addEventListener("mousedown", menuHandler);

    return () => {
      document.removeEventListener("mousedown", menuHandler);
    }
  })

  return (
    <div className={navbar ? "navbar scroll" : "navbar"} id="navbar">
      <div className="logo">
        <span>Coffee</span>
        <i className="fas fa-mug-hot"></i>
      </div>
      <div ref={menuRef} className={menuVisible ? "menu toggle" : "menu"}>
            <div className="menu_exit"><i onClick={() => setMenuVisible(false)} className="fas fa-times"></i></div>
            <a onClick={() => setMenuVisible(false)} href="#home" >Home</a>
            <a onClick={() => setMenuVisible(false)} href="#about">About</a>
            <a onClick={() => setMenuVisible(false)} href="#products">Products</a>
            <a onClick={() => setMenuVisible(false)} href="#popular">Popular</a>
            <a onClick={() => setMenuVisible(false)} href="#contact">Contact</a>
            <a onClick={() => setMenuVisible(false)} href="#review">Review</a>
      </div>
      <div className="menu_right">
        <i ref={cartIcon}
          onClick={toggleCart}
          className="fas fa-shopping-cart"
        >{totalProducts < 1 ? "" : <span className="cartNum">{totalProducts}</span>}</i>
        <i ref={favIcon} onClick={toggleFav} className="fas fa-heart">{favProducts.length < 1 ? "" : <span className="favNum">{favProducts.length}</span>}</i>
        <i ref={contactIcon} onClick={toggleContact} className="fas fa-user"></i>
        <i ref={menuIcon} onClick={toggleMenu} className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
