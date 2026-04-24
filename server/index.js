const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// 🔮 Horoscope API
const horoscopes = {
  Aries: "Today is a great day to start something new.",
  Taurus: "Focus on stability and patience.",
  Gemini: "Communication will bring success.",
  Cancer: "Emotional balance is key today.",
  Leo: "Confidence will take you far.",
  Virgo: "Pay attention to details.",
  Libra: "Seek harmony in relationships.",
  Scorpio: "Trust your instincts.",
  Sagittarius: "Adventure awaits you.",
  Capricorn: "Hard work will pay off.",
  Aquarius: "Think outside the box.",
  Pisces: "Follow your intuition.",
};

app.get("/api/horoscope/:sign", (req, res) => {
  const sign = req.params.sign;
  res.json({ message: horoscopes[sign] || "No data" });
});

// 🔮 Kundali API (UPDATED)
app.post("/api/kundali", (req, res) => {
  const { name, dob, place, time } = req.body;

  const predictions = [
    "You have strong leadership qualities and will see growth soon.",
    "A new opportunity is coming your way—be ready to grab it.",
    "You may face small challenges, but patience will bring success.",
    "Your communication skills will open new doors.",
  ];

  const remedies = [
    "Chant Gayatri Mantra daily.",
    "Wear light-colored clothes on Monday.",
    "Help someone in need this week.",
    "Meditate for 10 minutes daily.",
  ];

  const prediction =
    predictions[Math.floor(Math.random() * predictions.length)];

  const remedy =
    remedies[Math.floor(Math.random() * remedies.length)];

  res.json({
    name,
    prediction,
    remedy,
    details: {
      dob,
      place,
      time,
    },
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));