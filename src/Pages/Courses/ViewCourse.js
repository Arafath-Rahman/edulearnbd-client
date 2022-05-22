import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(` http://localhost:5000/course/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  return (
    <div className="flex justify-center">
      <div className="card max-w-75 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={course?.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary uppercase">Course Title: {course?.name}</h2>
          <div>
            <h3 className="text-xl font-bold text-secondary">Class Links:</h3>
            <ul>
              {course?.content.map((link) => (
                <li>{link}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
