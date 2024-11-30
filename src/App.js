import "./App.css";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">hello</h1>

        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                services
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                resume
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                portfolio
              </a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="#">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
