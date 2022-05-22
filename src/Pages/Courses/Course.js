import React from "react";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Course = ({ course }) => {
  const {_id, name, img, price} = course;
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/course/edit/${id}`);
  }

  const handleView = (id) => {
    navigate(`/course/${id}`);
  }



  return (
    <div>
      <div className="card max-w-lg bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="course"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><strong>Price: {price}</strong></p>
          <div className="card-actions justify-end">
            {
              isAdmin && <button onClick={()=> handleEdit(_id)} className="btn btn-secondary">Edit</button>
            }
            <button onClick={()=> handleView(_id)} className="btn btn-primary">view Course</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
