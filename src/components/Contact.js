import React from 'react'

const Contact = ({contact}) => {


    return (
        <div className={contact ? "contact_form" : "inactive"}>
            <form className="login">
                <h2 className="title">Login</h2>
                <div className="login_bottom">
                    <div className="data">
                        <input type="email" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox"/>
                        <span>Remember me</span>
                    </div>
                    <button>Login</button>
                    <div className="links">
                        <span>forget password</span>
                        <span>sign up</span>
                    </div>
                </div>
                
            </form>
            <form className="signup">
                <h3>Signup</h3>
            </form>
        </div>
    )
}

export default Contact;
