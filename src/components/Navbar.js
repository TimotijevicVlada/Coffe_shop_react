import React, {useState} from 'react';
import Contact from './Contact';

const Navbar = ({ contact, setContact, switchContact, setSwitchContact }) => {

    const [navbar, setNavbar] = useState(false);
    
    const changeNavbar = () => {
        if(window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeNavbar);

    return (
        <div className={navbar ? "navbar scroll" : "navbar"}   id="navbar">
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
                <i onClick={() => console.log(window.scrollY)} className="fas fa-shopping-cart"></i>
                <i onClick={() => setContact(!contact)} className="fas fa-user"></i>
                <Contact 
                contact={contact} 
                setContact={setContact} 
                switchContact={switchContact}
                setSwitchContact={setSwitchContact}
                />
            </div>
        </div>
    )
}

export default Navbar;
