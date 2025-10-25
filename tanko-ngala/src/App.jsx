import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutPage";
import Skills from "./pages/SkillsPage";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills"  element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;