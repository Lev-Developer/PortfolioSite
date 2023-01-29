import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/Home";

import { ProjectsPage } from "./pages/Projects";
import { ProjectPage } from "./pages/Project";
import { ContactPage } from "./pages/Contact";
import { CvPage } from "./pages/Cvpage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
