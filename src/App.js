import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';
import Login from './login';



function App() {
  
  return  (
    <>
   
    <Router>
      <Routes>
        <React.Fragment>
          <Route exact path="/Home" element={<><Navbar/><Home/><Footer/></>} />
          <Route exact path="/projects" element={<><Navbar/><Projects /><Footer/></>} />
          <Route exact path="/about" element={<><Navbar/><About /><Footer/></>} />
          <Route exact path="/contact" element={<><Navbar/><Contact /><Footer/></>} />
        </React.Fragment>
      </Routes>
    </Router>
  
    </>
  );
}

export default App;



// import React, from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './Navbar';
// import Home from './Home';
// import Photographer from './Photographer';
// import About from './About';
// import Footer from './Footer';

// function App() {
  
//   return  (
//     <>
//    <Navbar />
//     <Router>
//       <Routes>
//         <React.Fragment>
//           <Route exact path="/" element={<Home/>} />
//           <Route exact path="./Photographer" element={<Photographer />} />
//           <Route exact path="./About" element={<About />} />
//         </React.Fragment>
//       </Routes>
//     </Router>
//    <Footer />
//     </>
//   );
// }

// export default App;
