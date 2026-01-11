import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import Progress from "./Pages/Progress";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  );
}

export default App;
