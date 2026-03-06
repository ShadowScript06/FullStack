import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Promo from "../components/Promo";
import { motion } from "framer-motion";

export default function AuthPage() {

  const [page, setPage] = useState("login");


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] px-6">

      <div className="relative w-full max-w-6xl h-150 bg-[#111827] rounded-3xl overflow-hidden shadow-2xl">

        {/* FORM PANEL */}
        <motion.div
          animate={{ x: page === "login" ? "0%" : "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-1/2 h-full left-0 p-12 flex flex-col justify-center"
        >

          {page === "login" ? (
            <>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h1>

              <p className="text-gray-400 mb-8">
                Enter your email and password to continue.
              </p>

              <LoginForm setPage={setPage} />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome, Lets get started..
              </h1>

              <p className="text-gray-400 mb-8">
                Enter your details to proceed.
              </p>

              <RegisterForm setPage={setPage} />
            </>
          )}

        </motion.div>

        {/* PROMO PANEL */}
        <motion.div
          animate={{ x: page === "login" ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute w-1/2 h-full right-0"
        >
          <Promo />
        </motion.div>

      </div>

    </div>
  );
}