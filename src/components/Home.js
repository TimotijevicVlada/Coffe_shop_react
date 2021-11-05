import React, {useState} from 'react';

const Home = () => {

    const [arrowUp, setArrowUp] = useState(false);

    const showArrow = () => {
        if(window.scrollY >= 100) {
            setArrowUp(true);
        } else {
            setArrowUp(false);
        }
    }

    window.addEventListener("scroll", showArrow);

    return (
        <div className="home" id="home">
            <div className="header">
                <span className="text">Enjoy the best coffee in the city</span>
                <a href="#products">Order your coffee</a>
            </div>
            <a href="#home"><i className={arrowUp ? "fas fa-chevron-up" : "fas fa-chevron-up hidden"}></i></a>
        </div>
    )
}

export default Home;