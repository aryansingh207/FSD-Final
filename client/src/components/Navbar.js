import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">⭐ Jyotish</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/horoscope">Horoscope</Link>
        <Link to="/kundali">Kundali</Link>
      </div>
    </div>
  );
}