// src/components/UserPreferences.jsx
import React, { useState } from "react";

function UserPreferences({ onSubmit }) {
  const [layout, setLayout] = useState("dashboard");
  const [theme, setTheme] = useState("minimal");
  const [color, setColor] = useState("#4CAF50");

  return (
    <div className="preferences-container">
      <h2>Customize Your UI</h2>
      <form onSubmit={onSubmit}>
        <label>
          Layout Type:
          <select value={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="dashboard">Dashboard</option>
            <option value="form">Form</option>
            <option value="landing">Landing Page</option>
            <option value="portfolio">Portfolio</option>
          </select>
        </label>

        <label>
          Theme/Style:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="minimal">Minimal</option>
            <option value="material">Material</option>
            <option value="dark">Dark Mode</option>
            <option value="retro">Retro</option>
          </select>
        </label>

        <label>
          Primary Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <button type="submit">Generate UI</button>
      </form>
    </div>
  );
}

export default UserPreferences;
