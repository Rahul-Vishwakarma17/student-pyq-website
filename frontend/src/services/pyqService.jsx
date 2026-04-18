


// import axios from "axios";

// const API_URL = "http://localhost:5000/api/pyqs";

// // public fetch
// export const getAllPyqs = async () => {
//   const res = await axios.get(API_URL);
//   return res.data;
// };

// // admin functions
// export const uploadPyq = async (formData, token) => {
//   const res = await axios.post(API_URL, formData, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };

// export const deletePyq = async (id, token) => {
//   const res = await axios.delete(`${API_URL}/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };


import axios from "axios";

// ✅ Use environment variable
const API = import.meta.env.VITE_API_URL;

// Final API URL
const API_URL = `${API}/api/pyqs`;

// public fetch
export const getAllPyqs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// admin functions
export const uploadPyq = async (formData, token) => {
  const res = await axios.post(API_URL, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deletePyq = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};