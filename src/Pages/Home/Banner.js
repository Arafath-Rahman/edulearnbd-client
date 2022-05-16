import React from "react";
import homeBanner from '../../Asset/images/banner.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={homeBanner}
            className="max-w-lg rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 className="text-5xl font-bold">Learning is fun in <span className="text-primary">EDULEARNBD!</span></h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-base-100">Available Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
