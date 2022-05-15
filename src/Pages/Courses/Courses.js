import React from "react";
import Footer from "../Shared/Footer";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl text-center font-bold text-primary underline underline-offset-2 py-6">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
      <div className="pt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
