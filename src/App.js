import './styles/main.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar/Navbar'
import {HomePage} from './pages/Home'  
import { Footer } from './components/footer/Footer'
import { ProjectsPage } from './pages/Projects';
import { ProjectPage } from './pages/Project';
import { ContactPage } from './pages/Contact';
import ScrollToTop from './utils/scrollToTop'



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={ <ProjectsPage />} />
          <Route path='/project/:id' element={ <ProjectPage />} />
          <Route path='/contacts' element={<ContactPage /> } />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
