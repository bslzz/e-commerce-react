import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Men from './MenuItems/Men';
import Ladies from './MenuItems/Ladies';
import Template from './MenuItems/Template';

const MainNavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand home">
            <img
              src="/img/logo.png"
              alt="Obaju logo"
              className="d-none d-md-inline-block"
            />
            <img
              src="/img/logo-small.png"
              alt="Obaju logo"
              className="d-inline-block d-md-none"
            />
            <span className="sr-only">Obaju - go to homepage</span>
          </Link>
          <div className="navbar-buttons">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-align-justify"></i>
            </button>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#search"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <span className="sr-only">Toggle search</span>
              <i className="fa fa-search"></i>
            </button>
            <Link
              to="/basket"
              className="btn btn-outline-secondary navbar-toggler"
            >
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Men<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <Men />
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Ladies<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <Ladies />
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Template<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <Template />
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <div
                id="search-not-mobile"
                className="navbar-collapse collapse"
              ></div>
              <a
                data-toggle="collapse"
                href="#search"
                className="btn navbar-btn btn-primary d-none d-lg-inline-block"
              >
                <span className="sr-only">Toggle search</span>
                <i className="fa fa-search"></i>
              </a>
              <div
                id="basket-overview"
                className="navbar-collapse collapse d-none d-lg-block"
              >
                <Link to="/basket" className="btn btn-primary navbar-btn">
                  <i className="fa fa-shopping-cart"></i>
                  <span>3 items in cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="search" className="collapse">
        <div className="container">
          <form role="search" className="ml-auto">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainNavBar;
