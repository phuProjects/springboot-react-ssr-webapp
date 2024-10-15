import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pageheader from './components/Pageheader.jsx'
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import './App.css';
export default function App(){
  return(
  <Router>
        <Pageheader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  </Router>
  )
}