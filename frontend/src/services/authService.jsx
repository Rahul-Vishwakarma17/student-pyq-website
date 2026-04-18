// import axios from "axios";

// const API_URL = "http://localhost:5000/api/auth";

// // ---- Admin Login ----
// export const loginAdmin = async (username, password) => {
//   try {
//     const res = await axios.post(`${API_URL}/login`, { username, password });
//     return res.data; // returns { id, username, token }
//   } catch (error) {
//     console.error("Login failed:", error.response?.data?.message || error.message);
//     throw error;
//   }
// };

// // ---- Optional: Save token to localStorage ----
// export const saveToken = (token) => {
//   localStorage.setItem("token", token);
// };

// // ---- Optional: Get token from localStorage ----
// export const getToken = () => {
//   return localStorage.getItem("token");
// };

// // ---- Optional: Remove token (logout) ----
// export const removeToken = () => {
//   localStorage.removeItem("token");
// };


import axios from "axios";

// ✅ Use env variable
const API = import.meta.env.VITE_API_URL;

// Final API URL
const API_URL = `${API}/api/auth`;

// ---- Admin Login ----
export const loginAdmin = async (username, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { username, password });
    return res.data; // returns { id, username, token }
  } catch (error) {
    console.error(
      "Login failed:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};

// ---- Optional: Save token to localStorage ----
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// ---- Optional: Get token from localStorage ----
export const getToken = () => {
  return localStorage.getItem("token");
};

// ---- Optional: Remove token (logout) ----
export const removeToken = () => {
  localStorage.removeItem("token");
};