import React, { useState } from "react";

const Contact = ({ contact, setContact, switchContact, setSwitchContact }) => {
  const [eyeLogin, setEyeLogin] = useState(true);
  const [eyeSignup, setEyeSignup] = useState(true);

  const [loginValue, setLoginValue] = useState({ email: "", password: ""});
  const [loginError, setLoginError] = useState({ email: "", password: ""});

  const [signupValue, setSignupValue] = useState({name: "", email: "", password: "", confirmPassword: ""});
  const [signupError, setSignupError] = useState({name: "", email: "", password: "", confirmPassword: ""});

  const validateLogin = (e) => {
    e.preventDefault();
    let errors = {
      email: "",
      password: ""
    };
    //Validate email
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(loginValue.email);
    if (!loginValue.email) {
      console.log("Nema podataka za email");
      errors = {...errors, email: "Email required"};
    } else if (!emailTest) {
      console.log("Pogresni podaci emaila");
      errors = {...errors, email: "Email address is invalid!"};
    } else {
      console.log("Dobri podaci za mail")
      errors = {...errors, email: ""};
    }

    //Validate pass
    let passTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(loginValue.password);
    if (!loginValue.password) {
      errors = {...errors, password: "Password is required"};
    } else if (!passTest) {
      errors = {...errors, password: "Password require uppercase, lowercase and number!"};
    } else {
      errors = {...errors, password: ""};
    }
    setLoginError(errors);
  };

  const validateSignup = (e) => {
    e.preventDefault();
    let errors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    //Validate name
    let nameTest = /^[A-Z][a-z]{2,}/.test(signupValue.name.trim());
    if (!signupValue.name.trim()) {
      errors = {...errors, name: "Name required"};
    } else if (!nameTest) {
      errors = {...errors, name: "Name is invalid!"};
    } else {
      errors = {...errors, name: ""};
    }
    //Validate email
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(signupValue.email);
    if (!signupValue.email) {
      errors = {...errors, email: "Email required"};
    } else if (!emailTest) {
      errors = {...errors, email: "Email address is invalid!"};
    } else {
      errors = {...errors, email: ""};
    }
    //Validate pass
    let passTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(signupValue.password);
    if (!signupValue.password) {
      errors = {...errors, password: "Password is required"};
    } else if (!passTest) {
      errors = {...errors, password: "Password require uppercase, lowercase and number!"};
    } else {
      errors = {...errors, password: ""};
    }
    //Validate confirm password
    let cunfPassTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(signupValue.confirmPassword);
    if (!signupValue.confirmPassword) {
      errors = {...errors, confirmPassword: "Confirm password is required"};
    } else if (!cunfPassTest) {
      errors = {...errors, confirmPassword: "Password require uppercase, lowercase and number!"};
    } else {
      errors = {...errors, confirmPassword: ""};
    }
    setSignupError(errors);

  }

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
                  value={loginValue.email}
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
                  value={loginValue.password}
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
        <form onSubmit={validateSignup} className="signup">
          <div className="signup_header">
            <h2 className="signup_title">Signup</h2>
            <i onClick={() => setContact(false)} className="fas fa-times"></i>
          </div>

          <div className="signup_bottom">
            <div className="signup_data">
              <div className="name_signup">
                <input onChange={(e) => setSignupValue({...signupValue, name: e.target.value})} value={signupValue.name} type="text" placeholder="Name" />
                <p className="signup_error">{signupError.name}</p>
              </div>
              <div className="email_signup">
                <input onChange={(e) => setSignupValue({...signupValue, email: e.target.value})} value={signupValue.email} type="text" placeholder="Email" />
                <p className="signup_error">{signupError.email}</p>
              </div>
              <div className="pass_signup">
                <input
                  onChange={(e) => setSignupValue({...signupValue, password: e.target.value})}
                  value={signupValue.password}
                  type={eyeSignup ? "password" : "text"}
                  placeholder="Password"
                />
                <p className="signup_error">{signupError.password}</p>
              </div>
              <div className="confirm_signup">
                <input
                  onChange={(e) => setSignupValue({...signupValue, confirmPassword: e.target.value})}
                  value={signupValue.confirmPassword}
                  type={eyeSignup ? "password" : "text"}
                  placeholder="Confirm password"
                />
                <p className="signup_error">{signupError.confirmPassword}</p>
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
            <button type="submit">Signup</button>
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
