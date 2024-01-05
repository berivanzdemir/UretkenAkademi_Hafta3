import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";
import AboutDefault from "./components/About/AboutDefault";
import NavDefault from "./components/Navbar/NavDefault";


function App() {
  return (
    <>
      <Router>
        <NavDefault />
        <br/>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/aboutus" element={<AboutDefault />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
