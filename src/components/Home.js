import React from 'react';
import Contact from './Contact';

const Home = ({contact, setContact, switchContact, setSwitchContact}) => {
    return (
        <div className="home" id="home">
            <div className="header">
                <span className="text">Enjoy the best coffee in the city</span>
                <button>Order your coffee</button>
            </div>
            <Contact 
                contact={contact} 
                setContact={setContact} 
                switchContact={switchContact}
                setSwitchContact={setSwitchContact}
            />
        </div>
    )
}

export default Home;
