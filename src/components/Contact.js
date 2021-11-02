import React from "react";

const Contact = ({ contact, setContact, switchContact, setSwitchContact }) => {
  return (
    <div className={contact ? "contact_form" : "inactive"}>
      {switchContact === "login" ? (
        <form className="login">
          <div className="login_header">
            <h2 className="login_title">Login</h2>
            <i onClick={() => setContact(false)} className="fas fa-times"></i>
          </div>

          <div className="login_bottom">
            <div className="login_data">
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="login_checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button>Login</button>
            <div className="login_links">
              <span>forget password</span>
              <span onClick={() => setSwitchContact("signup")}>sign up</span>
            </div>
          </div>
        </form>
      ) : (
        <form className="signup">
          <div className="signup_header">
            <h2 className="signup_title">Signup</h2>
            <i onClick={() => setContact(false)} className="fas fa-times"></i>
          </div>

          <div className="signup_bottom">
            <div className="signup_data">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="Confirm password" />
            </div>
            <button>Signup</button>
            <div className="signup_links">
              <span onClick={() => setSwitchContact("login")}>login</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
