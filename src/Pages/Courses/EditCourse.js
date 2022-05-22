import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const forceUpdate = useForceUpdate();



  useEffect(() => {
    fetch(` http://localhost:5000/course/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        setCourse(data);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const linkValue = event.target.link.value;

    fetch(`http://localhost:5000/course/edit/${id}?link=${linkValue}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.link.value = "";
        forceUpdate();
      });    
  }
  
  return (
    <div className="my-12">
      <h2>Edit Course Content</h2>
      <div className="flex justify-center">
        <div className="card max-w-75 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={course?.img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-primary uppercase">
              Course Title: {course?.name}
            </h2>
            <div>
              <h3 className="text-xl font-bold text-secondary">Class Links:</h3>
              <ul>
                {course?.content.map((link) => (
                  <li>{link}</li>
                ))}
              </ul>
              <h4 className="text-left text-md text-primary font-bold mt-5">Add new class link</h4>
              <form onSubmit={handleSubmit}>
                <input className="mr-4" type="text" name="link" id="link" placeholder="Class Link"/>
                <input className="btn btn-primary" type="submit" value="Add" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
