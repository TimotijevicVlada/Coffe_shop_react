import React from 'react';


const Navbar = ({ contact, setContact }) => {



    return (
        <div className="navbar">
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
                <a href="#rewiev">Review</a>
            </div>
            <div className="menu_right">
                <i className="fas fa-shopping-cart"></i>
                <i onClick={() => setContact(!contact)} className="fas fa-user"></i>
            </div>
        </div>
    )
}

export default Navbar;
