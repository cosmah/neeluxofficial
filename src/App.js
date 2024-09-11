
  // App.js
  import React from "react";
  import "./App.css";
  import RoutingComponent from "./components/Routes/Routes";
  import { useMediaQuery } from 'react-responsive';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Home from "./components/Home/Home";
  import  Hello  from "./components/Hello/Hello";

  // import About from "./components/about";
  // import Contact from "./components/contact";

  
  
  function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
   return (
      <Router>
        <RoutingComponent />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/hello" element={<Hello />} />
           

  
        </Routes>
    
        {isMobile}
      </Router>
   );
  }
  
  export default App;