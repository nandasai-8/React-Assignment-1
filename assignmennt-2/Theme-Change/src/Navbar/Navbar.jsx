import React, { useContext } from "react";

import "./Navbar.css";
import { ThemeContext } from "../Theme content/ThemeContent";

function Navbar() {
    const { isDark, toggleTheme } = useContext(ThemeContext)

    return (
        <nav className={`navbar ${isDark ? "dark" : "light"}`}>
            <div className="image">
                <img src="https://lms.achieversit.com/assets/images/logo.png" alt="" />
            </div>
            <ul>
                <li>home</li>
                <li>abour</li>
                <li>contact</li>
            </ul>
            <button onClick={toggleTheme}>
                {isDark ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
}

export default Navbar;
