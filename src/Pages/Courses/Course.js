import React from "react";
import useAdmin from "../../hooks/useAdmin";

const Course = ({ c }) => {
  const [isAdmin] = useAdmin();

  const handleEdit = () => {
    //
  }

  const handleView = () => {
  //
  }



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
            {
              isAdmin && <button onClick={handleEdit} className="btn btn-secondary">Edit</button>
            }
            <button onClick={()=> handleView()} className="btn btn-primary">view Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
