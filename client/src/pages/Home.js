import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="main-title">Jyotish</h1>

      <p className="subtitle">
        Unveil the cosmic blueprint of your destiny through ancient Vedic wisdom
      </p>

      <div className="buttons">
        <Link to="/horoscope">
          <button className="btn primary">Daily Horoscope</button>
        </Link>

        <Link to="/kundali">
          <button className="btn secondary">Get Your Kundali</button>
        </Link>
      </div>
    </div>
  );
}