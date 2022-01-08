import Footer from "./Components/footer/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import About from "./Pages/About/About.jsx"
import Calculator from "./Pages/Calculator/Calculator.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Yoga from "./Pages/Yoga/Yoga.jsx";
import Challenge from "./Pages/Challenge/Challenge.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/calculator" element={<Calculator />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/yoga" element={<Yoga/>}/>
          <Route exact path="/challenge" element={<Challenge/>}/>
        </Routes >
        <Footer />
      </Router>

    </>
  );
}

export default App;
