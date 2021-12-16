import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg " color-on-scroll="500">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            {" "}
            Dashboard{" "}
          </Link>
          <button
            href=""
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navigation"
          >
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="d-lg-none">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
