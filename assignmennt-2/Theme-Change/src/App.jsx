import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        {isDark ? "dark theme" : "light theme"}
      </button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi itaque. Aperiam iure rerum corrupti incidunt deleniti est nostrum dolore nisi itaque? Sequi molestiae rem illo culpa impedit, aperiam explicabo!</p>
    </div>
  );
};



export default App
