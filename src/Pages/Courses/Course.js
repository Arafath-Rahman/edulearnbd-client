import React from "react";

const Course = ({ c }) => {
  return (
    <div>
      <div className="card max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={c?.img}
            alt="course"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{c?.name}</h2>
          <p><strong>Price: {c?.price}</strong></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
