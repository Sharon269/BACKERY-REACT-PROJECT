import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
import BakeryTeam from "./pages/BakeryTeam";
import Workshops from "./pages/Workshops";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/bakery-team" element={<BakeryTeam />} />
      <Route path="/workshops" element={<Workshops />} />
    </Routes>
  );
}

export default App;