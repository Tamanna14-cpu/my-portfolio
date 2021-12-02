import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/ContactMe/Contact';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import ProjectsDetails from './Components/ProjectDetails/ProjectsDetails';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';


function App() {
  return (
    <>
      <Container >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectsDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </Container>


      <Footer></Footer>

    </>
  );
}

export default App;
