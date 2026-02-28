import React from "react";

import Form from "./components/Form";
import Users from "./components/Users";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <button>
          <Link to="/"> Home</Link>
        </button>

        <button>
          <Link to="/form"> Form</Link>
        </button>
        <button>
          <Link to="/users"> Users</Link>
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
