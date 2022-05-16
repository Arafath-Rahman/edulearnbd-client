import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddCourse from "./Pages/Courses/AddCourse";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<RequireAuth><Courses /></RequireAuth>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="add" element={<AddCourse />} />
      </Routes>
    </div>
  );
}

export default App;
