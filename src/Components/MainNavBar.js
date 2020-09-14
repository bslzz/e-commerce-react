import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                  href="#"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Men<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu megamenu">
                  <li>
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <h5>Clothing</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              T-shirts
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Shirts
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Pants
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Accessories
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Shoes</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Accessories</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Featured</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
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
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <h5>Clothing</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              T-shirts
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Shirts
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Pants
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Accessories
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Shoes</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Accessories</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Casual
                            </NavLink>
                          </li>
                        </ul>
                        <h5>Looks and trends</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Trainers
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Sandals
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Hiking shoes
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="banner">
                          <Link to="#">
                            <img
                              src="/img/banner.jpg"
                              alt=""
                              className="img img-fluid"
                            />
                          </Link>
                        </div>
                        <div className="banner">
                          <Link to="#">
                            <img
                              src="/img/banner2.jpg"
                              alt=""
                              className="img img-fluid"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
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
                    <div className="row">
                      <div className="col-md-6 col-lg-3">
                        <h5>Shop</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                              Homepage
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                              Category - sidebar left
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category-right" className="nav-link">
                              Category - sidebar right
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/category-full" className="nav-link">
                              Category - full width
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/detail" className="nav-link">
                              Product detail
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>User</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/register" className="nav-link">
                              Register / login
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/customer-orders" className="nav-link">
                              Orders history
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/customer-order" className="nav-link">
                              Order history detail
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="/customer-wishlist"
                              className="nav-link"
                            >
                              Wishlist
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="/customer-account"
                              className="nav-link"
                            >
                              Customer account / change password
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Order process</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/basket" className="nav-link">
                              Shopping cart
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/checkout1" className="nav-link">
                              Checkout - step 1
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/checkout2" className="nav-link">
                              Checkout - step 2
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/checkout3" className="nav-link">
                              Checkout - step 3
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/checkout4" className="nav-link">
                              Checkout - step 4
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <h5>Pages and blog</h5>
                        <ul className="list-unstyled mb-3">
                          <li className="nav-item">
                            <NavLink to="/blog" className="nav-link">
                              Blog listing
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/blogpost" className="nav-link">
                              Blog Post
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/faq" className="nav-link">
                              FAQ
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/text" className="nav-link">
                              Text page
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/text-right" className="nav-link">
                              Text page - right sidebar
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/404" className="nav-link">
                              404 page
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                              Contact
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
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
