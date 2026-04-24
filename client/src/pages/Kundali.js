import { useState } from "react";
import axios from "axios";
import "./Kundali.css";

export default function Kundali() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    place: "",
    time: "",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("https://fsd-final-drq2.onrender.com/api/kundali", form);
    setResult(res.data);
  };

  return (
    <div className="kundali">
      <h1>Your Kundali</h1>

      <div className="form">
        <input placeholder="Full Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
        <input type="date" onChange={(e)=>setForm({...form, dob:e.target.value})}/>
        <input placeholder="Place of Birth" onChange={(e)=>setForm({...form, place:e.target.value})}/>
        <input type="time" onChange={(e)=>setForm({...form, time:e.target.value})}/>
      </div>

      <button onClick={handleSubmit}>Generate Kundali</button>

      {result && (
        <div className="result-box">
          <h2>Kundali for {result.name}</h2>

          <p><strong>Prediction:</strong> {result.prediction}</p>

          <p><strong>Remedy:</strong> {result.remedy}</p>

          <div className="details">
            <p>DOB: {result.details.dob}</p>
            <p>Place: {result.details.place}</p>
            <p>Time: {result.details.time}</p>
          </div>
        </div>
      )}
    </div>
  );
}