// import './App.css';
// import Home from './Components/Home';
// import About from './Components/About';
// import Work from './Components/Work';
// import Testimonial from './Components/Testimonial';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className='App'>
//       <Home />
//       <About />
//       <Work />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Components/Home';
// import About from './Components/About';
// import Work from './Components/Work';
// import Testimonial from './Components/Testimonial';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/work' element={<Work />} />
//           <Route path='/testimonials' element={<Testimonial />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'; // Ensure Navbar is imported

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          {/* Route that displays all components on the initial load */}
          <Route
            path='/'
            element={
              <>
                <Home />
                <About />
                <Work />
                <Reviews />
                <Contact />
              </>
            }
          />
          {/* Separate routes for each section */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
