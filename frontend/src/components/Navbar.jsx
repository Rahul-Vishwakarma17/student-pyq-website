import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../services/authService";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setToken("");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>PYQ Portal</h2>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        {!token ? (
          <Link style={styles.link} to="/login">Login</Link>
        ) : (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0077cc",
    color: "#fff",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px", alignItems: "center" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  logoutBtn: {
    backgroundColor: "#ff4d4f",
    border: "none",
    color: "#fff",
    padding: "5px 10px",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "4px",
  },
};

export default Navbar;

