import React, { useContext } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "./Theme content/ThemeContent";

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`container ${isDark ? "dark" : "light"}`}>
      <Navbar />
      <main>
        <h1>{isDark ? "Dark Mode " : "Light Mode "}</h1>
        <p>Toggle the theme using the button in the navbar!</p>
      </main>
    </div>
  );
}

export default App;
