import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Fragment>
      <div className="sidebar" data-image="/assets/img/sidebar-5.jpg">
        <div className="sidebar-wrapper">
          <div className="logo">
            <a
              href="https://fachrigobel.herokuapp.com/"
              className="simple-text"
              target="_blank"
            >
              Fachri Gobel
            </a>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/karyawan">
                <i className="nc-icon nc-notes"></i>
                <p>List Karyawan</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
