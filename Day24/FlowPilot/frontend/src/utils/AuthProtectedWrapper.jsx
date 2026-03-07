import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../redux/userSlice";

function AuthProtectedWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  async function checkAuth() {
    try {
       const res=await axios.get("https://flowpilot-ejd6.onrender.com/auth/me", {
        withCredentials: true,
      });
      dispatch(setName(res.data.user));
      
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  useEffect(() => {
    checkAuth().then((result) => {
      if (!result) {
        alert("Invalid access, Please try after login");
        navigate("/auth");
      }
      setLoading(false);
    });
  }, [navigate]);
  if (loading) return <div>Loading...</div>;

  return children;
}

export default AuthProtectedWrapper;
