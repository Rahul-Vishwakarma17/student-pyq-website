



// import React, { useEffect, useState } from "react";
// import { getAllPyqs } from "../services/pyqService";

// const Home = () => {
//   const [pyqs, setPyqs] = useState([]);

//   useEffect(() => {
//     const fetchPyqs = async () => {
//       try {
//         const data = await getAllPyqs(); // no token
//         setPyqs(data);
//       } catch (error) {
//         console.error("Failed to fetch PYQs:", error);
//       }
//     };
//     fetchPyqs();
//   }, []);

//   if (!pyqs.length) return <p>No PYQs available</p>;

//   return (
//     <div>
//       <h1>All PYQs</h1>
//       <ul>
//         {pyqs.map((pyq) => (
//           <li key={pyq._id}>
//             {pyq.subject} - Semester {pyq.semester} ({pyq.year}){" "}
//             <a href={`http://localhost:5000${pyq.pdfUrl}`} target="_blank" rel="noopener noreferrer">
//               Download
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { getAllPyqs } from "../services/pyqService";

const Home = () => {
  const [pyqs, setPyqs] = useState([]);

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
            <a href={`http://localhost:5000${pyq.pdfUrl}`} target="_blank" rel="noopener noreferrer" className="btn">
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
