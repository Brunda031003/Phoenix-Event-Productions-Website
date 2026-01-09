import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Equipments from "./components/Equipments";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import EquipmentsPage from './Pages/EquipmentsPage';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Landing />
              <About />
              <Gallery />
              <Equipments />
              <Contact />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/equipments" 
          element={
            <>
              <EquipmentsPage />
              <Footer />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}
