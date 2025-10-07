import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <nav className={`navbar ${isDark ? "dark" : "light"}`}>
        <div className="nav-left">
          <img src='https://lms.achieversit.com/assets/images/logo.png' alt="React Logo" className="logo" />

        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="toggle-btn" onClick={toggleTheme}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
      <div className={`container ${isDark ? "dark" : "light"}`}>
        <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi itaque.
          Aperiam iure rerum corrupti incidunt deleniti est nostrum dolore nisi itaque?
          Sequi molestiae rem illo culpa impedit, aperiam explicabo!
        </p>
      </div>
    </>
  );
}

export default App;
