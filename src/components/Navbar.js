import React from 'react';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span>Coffee</span>
                <i className="fas fa-mug-hot"></i>
            </div>
            <div className="menu">
                <span>Home</span>
                <span>About</span>
                <span>Menu</span>
                <span>Products</span>
                <span>Review</span>
                <span>Blogs</span>
            </div>
            <div className="menu_right">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-user"></i>
            </div>
        </div>
    )
}

export default Navbar;
