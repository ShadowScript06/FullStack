import axios from "axios";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { useDispatch } from "react-redux";

export default function RegisterForm({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://flowpilot-ejd6.onrender.com/auth/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true },
      );

      dispatch(setName(res.data.user.name));
      navigate("/dashboard");
    } catch (error) {
      if (error.status === 409) {
        setMessage("User Already Exists, Please try login.");
        setModalOpen(true);
      }
      alert("Internal Server Error.")
    }
  }

  function closeModal() {
    setModalOpen(false);
    setMessage("");
  }

  return (
    <>
      <form className="space-y-5" onSubmit={(e)=>handleRegister(e)}>
        {/* NAME */}
        <div>
          <label className="text-sm text-gray-400">Full Name</label>

          <div className="relative mt-1">
            <User size={18} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="John Doe"
              className="w-full pl-10 py-3 rounded-lg
            bg-[#1F2937] border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-purple-500
            text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

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

        {/* BUTTON */}
        <button
          className="w-full py-3 rounded-lg
        bg-linear-to-r from-purple-500 to-purple-600
        hover:from-purple-600 hover:to-purple-700
        font-semibold transition"
          type={"submit"}
        >
          Create Account
        </button>

        <div className="text-center text-gray-500 text-sm mt-4">
          Already have an account...?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:text-purple-500"
            onClick={() => setPage("login")}
          >
            Login.
          </span>
        </div>
      </form>

      <AlertModal message={message} onClose={closeModal} isOpen={modalOpen} />
    </>
  );
}
