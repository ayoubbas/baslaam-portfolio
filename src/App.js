import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/main.scss";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <main className="home">
        <header className="header">
          <div className="header__container">
            <h1 className="header__logo">Baslaam</h1>
            <Navbar />
          </div>
        </header>

        <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
