import React, { useState } from "react";

const Contact = ({ contact, setContact, switchContact, setSwitchContact }) => {
  const [eyeLogin, setEyeLogin] = useState(true);
  const [eyeSignup, setEyeSignup] = useState(true);
  const [loginValue, setLoginValue] = useState({ email: "", password: ""});
  const [loginError, setLoginError] = useState({ email: "", password: ""});

  const validateLogin = (e) => {
    e.preventDefault();
    //Validate email
    if (!loginValue.email) {
      console.log("Nema podataka za email");
      setLoginError({ ...loginError, email: "Email required!" });
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(loginValue.email)) {
      console.log("Pogresni podaci emaila");
      setLoginError({ ...loginError, email: "Email adress is invalid!" });
    } else {
      console.log("Dobri podaci za mail")
      setLoginError({ ...loginError, email: "" });
    }

    //Validate pass
    if (!loginValue.password) {
      setLoginError({ ...loginError, password: "Password is required!" });
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(loginValue.password)) {
      setLoginError({...loginError, password: "Password require uppercase, lowercase and number!"});
    } else {
      setLoginError({ ...loginError, password: "" });
    }
  };

  return (
    <div className={contact ? "contact_form" : "inactive"}>
      {switchContact === "login" ? (
        <form onSubmit={validateLogin} className="login">
          <div className="login_header">
            <h2 className="login_title">Login</h2>
            <i onClick={() => setContact(false)} className="fas fa-times"></i>
          </div>

          <div className="login_bottom">
            <div className="login_data">
              <div className="login_email">
                <input
                  onChange={(e) =>
                    setLoginValue({ ...loginValue, email: e.target.value })
                  }
                  type="text"
                  placeholder="Email"
                />
                <p className="login_error">{loginError.email}</p>
              </div>
              <div className="login_pass">
                <input
                  onChange={(e) =>
                    setLoginValue({ ...loginValue, password: e.target.value })
                  }
                  type={eyeLogin ? "password" : "text"}
                  placeholder="Password"
                />
                <p className="login_error">{loginError.password}</p>
                {eyeLogin ? (
                  <i
                    onClick={() => setEyeLogin(false)}
                    className="far fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setEyeLogin(true)}
                    className="far fa-eye-slash"
                  ></i>
                )}
              </div>
            </div>
            <div className="login_checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button type="submit">Login</button>
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
                <input
                  type={eyeSignup ? "password" : "text"}
                  placeholder="Password"
                />
              </div>
              <div className="confirm_signup">
                <input
                  type={eyeSignup ? "password" : "text"}
                  placeholder="Confirm password"
                />
                {eyeSignup ? (
                  <i
                    onClick={() => setEyeSignup(false)}
                    className="far fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setEyeSignup(true)}
                    className="far fa-eye-slash"
                  ></i>
                )}
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
