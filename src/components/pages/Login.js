import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import ValidateUser from "../../ValidateUser";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useRecoilState(ValidateUser);

  const loginHandle = async (e) => {
    e.preventDefault();

    const alert = document.querySelector(".alert");

    try {
      const response = await axios.post(`http://localhost:8080/user`, {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        return setlogin(true);
      }
    } catch (error) {
      alert.style.setProperty("display", "block", "important");
      alert.textContent = "Username/Password Salah!";
    }
    return setlogin(false);
  };

  return (
    <Fragment>
      <div className="container d-flex flex-column justify-content-center align-items-center login">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <div className="alert alert-danger d-none" role="alert"></div>
            <form onSubmit={loginHandle}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  className={`form-control`}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className={`form-control`}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-primary" style={{ cursor: "pointer" }}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
