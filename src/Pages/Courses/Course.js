import React from "react";

const Course = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <div className="flex justify-end">
            <button className="btn btn-primary mr-2">Edit</button>
            <button className="btn btn-primary mr-2">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
