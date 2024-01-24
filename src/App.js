import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FutureClients from "./pages/FutureClients";

function App() {
  return (
    <div className="App fade-in">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/future-clients" element={<FutureClients />} />
      </Routes>
    </div>
  );
}

export default App;
