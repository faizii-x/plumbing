
import './index.css';
import Landing from "../src/pages/landing"
import About from "../src/pages/about"
import Contact from "../src/pages/contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Demolition from './pages/demolition';


function App() {
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Landing />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/demolition" element={<Demolition />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
