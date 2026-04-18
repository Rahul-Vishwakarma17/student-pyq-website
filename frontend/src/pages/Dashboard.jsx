


// import React, { useEffect, useState } from "react";
// import { getAllPyqs, uploadPyq, deletePyq } from "../services/pyqService";

// const Dashboard = ({ token }) => {
//   const [pyqs, setPyqs] = useState([]);
//   const [subject, setSubject] = useState("");
//   const [semester, setSemester] = useState("");
//   const [year, setYear] = useState("");
//   const [pdf, setPdf] = useState(null);

//   const fetchPyqs = async () => {
//     try {
//       const data = await getAllPyqs(token);
//       setPyqs(data);
//     } catch {
//       alert("Failed to fetch PDFs");
//     }
//   };

//   useEffect(() => { fetchPyqs(); }, [token]);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!pdf) return alert("Select a PDF");

//     const formData = new FormData();
//     formData.append("subject", subject);
//     formData.append("semester", semester);
//     formData.append("year", year);
//     formData.append("pdf", pdf);

//     try {
//       await uploadPyq(formData, token);
//       alert("PDF uploaded!");
//       setSubject(""); setSemester(""); setYear(""); setPdf(null);
//       fetchPyqs();
//     } catch { alert("Upload failed!"); }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure to delete?")) return;
//     try { await deletePyq(id, token); fetchPyqs(); } catch { alert("Delete failed!"); }
//   };

//   return (
//     <div className="container">
//       <h1 className="title">Admin Dashboard</h1>

//       <form className="form" onSubmit={handleUpload}>
//         <input placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} required />
//         <input type="number" placeholder="Semester" value={semester} onChange={(e)=>setSemester(e.target.value)} required />
//         <input type="number" placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} required />
//         <input type="file" accept="application/pdf" onChange={(e)=>setPdf(e.target.files[0])} required />
//         <button type="submit">Upload PDF</button>
//       </form>

//       <h2>All PYQs</h2>
//       <div className="grid">
//         {pyqs.map((pyq) => (
//           <div key={pyq._id} className="card">
//             <h3>{pyq.subject}</h3>
//             <p>Semester: {pyq.semester}</p>
//             <p>Year: {pyq.year}</p>
//             <a href={`http://localhost:5000${pyq.pdfUrl}`} target="_blank" rel="noopener noreferrer" className="btn">Download</a>
//             <button onClick={()=>handleDelete(pyq._id)} className="deleteBtn">Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { getAllPyqs, uploadPyq, deletePyq } from "../services/pyqService";

const Dashboard = ({ token }) => {
  const [pyqs, setPyqs] = useState([]);
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [pdf, setPdf] = useState(null);

  // ✅ Use env variable
  const API = import.meta.env.VITE_API_URL;

  const fetchPyqs = async () => {
    try {
      const data = await getAllPyqs(token);
      setPyqs(data);
    } catch {
      alert("Failed to fetch PDFs");
    }
  };

  useEffect(() => { fetchPyqs(); }, [token]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!pdf) return alert("Select a PDF");

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("semester", semester);
    formData.append("year", year);
    formData.append("pdf", pdf);

    try {
      await uploadPyq(formData, token);
      alert("PDF uploaded!");
      setSubject(""); setSemester(""); setYear(""); setPdf(null);
      fetchPyqs();
    } catch {
      alert("Upload failed!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete?")) return;
    try {
      await deletePyq(id, token);
      fetchPyqs();
    } catch {
      alert("Delete failed!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Admin Dashboard</h1>

      <form className="form" onSubmit={handleUpload}>
        <input placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} required />
        <input type="number" placeholder="Semester" value={semester} onChange={(e)=>setSemester(e.target.value)} required />
        <input type="number" placeholder="Year" value={year} onChange={(e)=>setYear(e.target.value)} required />
        <input type="file" accept="application/pdf" onChange={(e)=>setPdf(e.target.files[0])} required />
        <button type="submit">Upload PDF</button>
      </form>

      <h2>All PYQs</h2>
      <div className="grid">
        {pyqs.map((pyq) => (
          <div key={pyq._id} className="card">
            <h3>{pyq.subject}</h3>
            <p>Semester: {pyq.semester}</p>
            <p>Year: {pyq.year}</p>

            {/* ✅ FIXED HERE */}
            <a 
              href={`${API}${pyq.pdfUrl}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              Download
            </a>

            <button onClick={()=>handleDelete(pyq._id)} className="deleteBtn">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;