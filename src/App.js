import Footer from "./Components/footer/Footer.jsx";
// import Navbar from "./Components/Navbar.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
// import About from "./Pages/About/About.jsx"
// import Calculator from "./Pages/Calculator/Calculator.jsx";
// import Blog from "./Pages/Blog/Blog.jsx";
// import Yoga from "./Pages/Yoga/Yoga.jsx";
// import Challenge from "./Pages/Challenge/Challenge.jsx";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Landing/>
<Footer/>

      {/* <Router>
        <Navbar />
        <Routes />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="/Calculator">
          <Calculator />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/Yoga">
          <Yoga />
        </Route>
        <Route path="/Challenge">
          <Challenge />
        </Route>
        <Routes />
        <Footer />
      </Router> */}

    </>
  );
}

export default App;
