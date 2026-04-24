import axios from "axios";
import { useState } from "react";
import "./Horoscope.css";

const signs = [
  { name: "Aries", desc: "Bold and energetic leader." },
  { name: "Taurus", desc: "Reliable and grounded personality." },
  { name: "Gemini", desc: "Curious and expressive thinker." },
  { name: "Cancer", desc: "Emotional and caring soul." },
  { name: "Leo", desc: "Confident and charismatic leader." },
  { name: "Virgo", desc: "Detail-oriented perfectionist." },
  { name: "Libra", desc: "Balanced and harmony-loving." },
  { name: "Scorpio", desc: "Passionate and mysterious." },
  { name: "Sagittarius", desc: "Adventurous and free spirit." },
  { name: "Capricorn", desc: "Disciplined and ambitious." },
  { name: "Aquarius", desc: "Innovative and unique thinker." },
  { name: "Pisces", desc: "Dreamy and compassionate." }
];

export default function Horoscope() {
  const [result, setResult] = useState("");

  const getHoroscope = async (sign) => {
    const res = await axios.get(`https://fsd-final-drq2.onrender.com/api/horoscope/${sign}`);
    setResult(res.data.message);
  };

  return (
    <div className="container">
      <h1 className="title">Daily Horoscope</h1>

      <div className="grid">
        {signs.map((s) => (
          <div className="card" onClick={() => getHoroscope(s.name)}>
            <h2>{s.name}</h2>
            <p>{s.desc}</p>
            <span>Tap to read</span>
          </div>
        ))}
      </div>

      {result && <p className="result">{result}</p>}
    </div>
  );
}