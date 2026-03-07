import axios from "axios";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { useDispatch } from "react-redux";
import { setName } from "../redux/userSlice";

export default function LoginForm({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function closeModal() {
    setModalOpen(false);
  }
  async function handleLogin(e) {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://flowpilot-ejd6.onrender.com/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      dispatch(setName(response.data.user.name));

      navigate("/dashboard");
    } catch (error) {
      if (error.status === 409) {
        setMessage("Incorrect Password, Please try again.");
        setModalOpen(true);
      } else if (error.status === 404) {
        setMessage("User does not exists,  Please register.");
        setModalOpen(true);
      } else {
        alert("Internal Server Error.")
      }
    }
  }
  return (
    <>
      <form className="space-y-5" onSubmit={(e)=>handleLogin(e)}>
        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-400">Email</label>

          <div className="relative mt-1">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 py-3 rounded-lg
            bg-[#1F2937] border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-purple-500
            text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-sm text-gray-400">Password</label>

          <div className="relative mt-1">
            <Lock size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="password"
              placeholder="••••••••"
              className="w-full pl-10 py-3 rounded-lg
            bg-[#1F2937] border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-purple-500
            text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* REMEMBER + FORGOT */}
        <div className="flex justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember me
          </label>

          <button className="text-purple-400 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          className="w-full py-3 rounded-lg
        bg-linear-to-r from-purple-500 to-purple-600
        hover:from-purple-600 hover:to-purple-700
        font-semibold transition"
          type={"submit"}
        >
          Log In
        </button>

        <div className="text-center text-gray-500 text-sm mt-4">
          Don't have an account...?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:text-purple-500"
            onClick={() => setPage("register")}
          >
            Register.
          </span>
        </div>
      </form>

      <AlertModal message={message} onClose={closeModal} isOpen={modalOpen} />
    </>
  );
}
