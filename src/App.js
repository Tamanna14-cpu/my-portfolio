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
            {/* <Route path=":teamId" element={<Team />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="aboutme" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
