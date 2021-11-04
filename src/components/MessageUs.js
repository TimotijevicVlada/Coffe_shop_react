import React from 'react';

const MessageUs = () => {
    return (
        <div className="messageUs_wrapper" id="contact">
            <div className="messageUs_title">
                <h1>Contact us</h1>
            </div>
            <div className="messageUs_info">
                <div className="map_wrapper">
                    <iframe title="maps" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.9956924302705!2d20.418345375365753!3d44.804718312263724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fed7b272c33%3A0xfa6d33c859503953!2z0JrQvtC80YLRgNC10ZjQtA!5e0!3m2!1ssr!2srs!4v1635960369562!5m2!1ssr!2srs" style={{border: 0}} loading="lazy"></iframe>
                </div>
                <div className="message_inputs">
                    <h2>Get in touch</h2>
                    <div className="inputs_wrapper">
                        <div className="message_name">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="message_email">
                        <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="message_number">
                        <i className="fas fa-phone"></i>
                            <input type="text" placeholder="Number"/>
                        </div>
                        <div className="message_textarea">
                            <i className="fas fa-comment-alt"></i>
                            <textarea placeholder="Message..." cols="30" rows="5"></textarea>
                        </div>
                        <div className="message_now">
                            <button>Contact now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageUs;
