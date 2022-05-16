import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect( ()=> {
    fetch('http://localhost:5000/course')
    .then(res =>  res.json())
    .then(data => setCourses(data))
  }, [])

  return (
    <div className="py-12">
      <h2 className="text-3xl text-center font-bold text-primary py-6">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
        {
          courses.map(course => <Course key={course._id} c={course}/>)
        }
      </div>
      <div className="pt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
