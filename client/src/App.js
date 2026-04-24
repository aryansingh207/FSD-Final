import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Horoscope from "./pages/Horoscope";
import Kundali from "./pages/Kundali";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/kundali" element={<Kundali />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;