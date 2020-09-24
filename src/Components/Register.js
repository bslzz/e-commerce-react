import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                New account / Sign in
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <h1>New account</h1>
            <p className="lead">Not our registered customer yet?</p>
            <p>
              With registration with us new world of fashion, fantastic
              discounts and much more opens to you! The whole process will not
              take you more than a minute!
            </p>
            <p className="text-muted">
              If you have any questions, please feel free to{' '}
              <a href="contact.html">contact us</a>, our customer service center
              is working for you 24/7.
            </p>
            <hr />
            <form action="customer-orders.html" method="post">
              <div className="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input id="email" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" className="form-control" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-user-md"></i> Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <h1>Login</h1>
            <p className="lead">Already our customer?</p>
            <p className="text-muted">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <hr />
            <form action="customer-orders.html" method="post">
              <div className="form-group">
                <label for="email">Email</label>
                <input id="email" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" className="form-control" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-sign-in"></i> Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
