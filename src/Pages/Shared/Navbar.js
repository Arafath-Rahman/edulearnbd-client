import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  const logOut = () => {
    setIsAdmin(false);
    signOut(auth);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user data ==>", data);
        if (data.role === "admin") {
          setIsAdmin(true);
        }
      });
  }, [user]);

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="course">Courses</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      {
        isAdmin && <li>
          <Link to="add">Add Course</Link>
        </li>
      }
      {user ? (
        <li>
          <button onClick={logOut} className="btn btn-primary">
            LogOut
          </button>
        </li>
      ) : (
        <li>
          <Link to="login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="" className="btn btn-ghost normal-case text-xl">
          EduLearnBD
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex lg:mr-5">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
