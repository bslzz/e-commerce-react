import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-2 mb-lg-0">
            <p className="text-center text-lg-left">
              ©2019 Your name goes here.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-center text-lg-right">
              Template design by
              <Link to="https://bootstrapious.com/p/big-bootstrap-tutorial">
                Bootstrapious
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
