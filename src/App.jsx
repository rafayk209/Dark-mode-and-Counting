import React, { useState } from "react";
import './App.css';
import IncDec from "./IncDec"

//☀︎ ☽
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container toggle">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div>
        <h3 className="text-center">{darkMode ? "Dark" : "Light"} Modem </h3>
      </div>
      <IncDec/>
    </div>
  );
}
