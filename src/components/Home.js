import React from 'react';
import Contact from './Contact';

const Home = ({contact, setContact, switchContact, setSwitchContact}) => {
    return (
        <div className="home" id="home">
            <div className="header">
                <span className="text">Enjoy the best coffee in the city</span>
                <a href="#products">Order your coffee</a>
            </div>
            <Contact 
                contact={contact} 
                setContact={setContact} 
                switchContact={switchContact}
                setSwitchContact={setSwitchContact}
            />
            <a href="#navbar"><i className="fas fa-chevron-up"></i></a>
        </div>
    )
}

export default Home;
