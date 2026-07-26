import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrganDetails from "./pages/OrganDetails";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organ/:id" element={<OrganDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;