


// import React, { useEffect, useState } from "react";
// import { getAllPyqs } from "../services/pyqService";

// const Home = () => {
//   const [pyqs, setPyqs] = useState([]);

//   const fetchPyqs = async () => {
//     try {
//       const data = await getAllPyqs(); 
//       setPyqs(data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load PYQs");
//     }
//   };

//   useEffect(() => { fetchPyqs(); }, []);

//   return (
//     <div className="container">
//       <h1 className="title">All PYQs</h1>
//       <div className="grid">
//         {pyqs.map((pyq) => (
//           <div key={pyq._id} className="card">
//             <h3>{pyq.subject}</h3>
//             <p>Semester: {pyq.semester}</p>
//             <p>Year: {pyq.year}</p>
//             <a href={`http://localhost:5000${pyq.pdfUrl}`} target="_blank" rel="noopener noreferrer" className="btn">
//               Download PDF
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { getAllPyqs } from "../services/pyqService";

const Home = () => {
  const [pyqs, setPyqs] = useState([]);

  // ✅ Use env variable
  const API = import.meta.env.VITE_API_URL;

  const fetchPyqs = async () => {
    try {
      const data = await getAllPyqs(); 
      setPyqs(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load PYQs");
    }
  };

  useEffect(() => { fetchPyqs(); }, []);

  return (
    <div className="container">
      <h1 className="title">All PYQs</h1>
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
              Download PDF
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
