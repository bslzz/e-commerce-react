import React from 'react';
import { Link } from 'react-router-dom';

const FromOurBlog = () => {
  return (
    <div className="box text-center">
      <div className="container">
        <div className="col-md-12">
          <h3 className="text-uppercase">From our blog</h3>
          <p className="lead mb-0">
            What's new in the world of fashion?
            <Link to="/blog">Check our blog!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FromOurBlog;
