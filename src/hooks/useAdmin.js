import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {

  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(` http://localhost:5000/user/${user?.email}`, {
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

  return [isAdmin];
}

export default useAdmin;