import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";

const AddCourse = () => {
  const navigate =  useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    fetch('http://localhost:5000/course', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res =>  res.json())
    .then(d => {
      if(d.acknowledged){
        navigate("/course");
      }
    })
    reset();
  };

  return (
    <div>
      <div className="py-12 flex justify-center items-center mb-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Add Course</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Course Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Course Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 5,
                      message: "Must be 5 characters or long.",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Course Image Link"
                  className="input input-bordered w-full max-w-xs"
                  {...register("img", {
                    required: "Image Link is required.",
                  })}
                />
                <label className="label">
                  {errors.img?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.img.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Course Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Course Price"
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: "Course Price is required.",
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Course Content</span>
                </label>
                <input
                  type="text"
                  placeholder="Course Content Link"
                  className="input input-bordered w-full max-w-xs"
                  {...register("content", {
                    required: "Content is required.",
                  })}
                />
                <label className="label">
                  {errors.content?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.content.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                type="submit"
                className="btn w-full max-w-xs"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddCourse;
