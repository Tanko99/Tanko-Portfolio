import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutPage";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;