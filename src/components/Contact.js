import React, {useState} from "react";

const Contact = ({ contact, setContact, switchContact, setSwitchContact }) => {

  const [eyeLogin, setEyeLogin] = useState(true);
  const [eyeSignup, setEyeSignup] = useState(true);







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
              <div className="login_email">
                <input type="email" placeholder="Email" />
              </div>
              <div className="login_pass">
                <input type={eyeLogin ? "password" : "text"} placeholder="Password" />
                {eyeLogin ? <i onClick={() => setEyeLogin(false)} className="far fa-eye"></i> : <i onClick={() => setEyeLogin(true)} className="far fa-eye-slash"></i>}
              </div>
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
              <div className="name_signup">
                <input type="text" placeholder="Name" />
              </div>
              <div className="email_signup">
                <input type="email" placeholder="Email" />
              </div>
              <div className="pass_signup">
                <input type={eyeSignup ? "password" : "text"} placeholder="Password" />
              </div>
              <div className="confirm_signup">
                <input type={eyeSignup ? "password" : "text"} placeholder="Confirm password" />
                {eyeSignup ? <i onClick={() => setEyeSignup(false)} className="far fa-eye"></i> : <i onClick={() => setEyeSignup(true)} className="far fa-eye-slash"></i>}
              </div>
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
