// App.js
import React from "react";
import "./App.css";
import RoutingComponent from "./components/Routes/Routes";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hello from "./components/Hello/Hello";
import Products from "./components/Products/Products/Products.jsx";
import Bulbs from "./components/Products/Bulbs/Bulbs.jsx";
import Ceiling from "./components/Products/Ceiling/Ceiling.jsx";
import Chandelier from "./components/Products/Chandelier/Chandelier.jsx";
import Panel from "./components/Products/Panel/Panel.jsx";
import Down from "./components/Products/Down/Down.jsx";
import Street from "./components/Products/Street/Street.jsx";
import Strip from "./components/Products/Strip/Strip.jsx";
import Table from "./components/Products/Table/Table.jsx";
import Wall from "./components/Products/Walls/Wall.jsx";
import Track from "./components/Products/Track/Track.jsx";
import Tubes from "./components/Products/Tubes/Tubes.jsx";
import Flood from "./components/Products/Flood/Flood.jsx";
import Garden from "./components/Products/Garden/Garden.jsx";
import Contact from "./components/Support/Contact/Contact.jsx";
import Policy from "./components/Support/Policy/Policy.jsx";

// import About from "./components/about";
// import Contact from "./components/contact";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Router>
      <RoutingComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bulbs" element={<Bulbs />} />
        <Route path="/ceiling" element={<Ceiling />} />
        <Route path="/chandeliers" element={<Chandelier />} />
        <Route path="/panels" element={<Panel />} />
        <Route path="/down" element={<Down />} />
        <Route path="/streets" element={<Street />} />
        <Route path="/strip" element={<Strip />} />
        <Route path="/table" element={<Table />} />
        <Route path="/walls" element={<Wall />} />
        <Route path="/track" element={<Track />} />
        <Route path="/tubes" element={<Tubes />} />
        <Route path="/flood" element={<Flood />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
      </Routes>

      {isMobile}
    </Router>
  );
}

export default App;
