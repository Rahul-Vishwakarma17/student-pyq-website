


// import { useState, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import { getToken } from "./services/authService";

// function App() {
//   const [token, setToken] = useState("");

//   // Load token from localStorage on app start
//   useEffect(() => {
//     const savedToken = getToken();
//     if (savedToken) setToken(savedToken);
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route
//         path="/login"
//         element={
//           token ? <Navigate to="/dashboard" /> : <Login setToken={setToken} />
//         }
//       />

//       <Route
//         path="/dashboard"
//         element={
//           token ? <Dashboard token={token} setToken={setToken} /> : <Navigate to="/login" />
//         }
//       />
//     </Routes>
//   );
// }

// export default App; 


import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={<Dashboard token={token} />} />
      </Routes>
    </>
  );
}

export default App;

