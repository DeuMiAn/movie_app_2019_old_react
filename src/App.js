import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}
export default App;
