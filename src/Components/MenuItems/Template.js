import React from 'react';
import { NavLink } from 'react-router-dom';

const Template = () => {
  return (
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
            <NavLink to="/customer-wishlist" className="nav-link">
              Wishlist
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customer-account" className="nav-link">
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
  );
};

export default Template;
