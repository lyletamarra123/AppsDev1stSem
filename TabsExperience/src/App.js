import "./styles.css";
import React, { useState } from "react";
import Experience from "./data";

export default function App() {
  const [nav, chooseNav] = useState(0);

  const section = Experience.map((prop) => {
    return (
      <section className="profile">
        <h2>{prop.role}</h2>
        <h3>{prop.name}</h3>
        <h4>{prop.date}</h4>
        <ul style={{ paddingLeft: 15 }}>
          {prop.description.map((desc) => (
            <li className="description">{desc}</li>
          ))}
        </ul>
      </section>
    );
  });

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Experience</h1>
      <section className="navDesc">
        <nav>
          <ul>
            <li className="navButton">
              <button onClick={() => chooseNav(0)}>TOMMY</button>
            </li>
            <li className="navButton">
              <button onClick={() => chooseNav(1)}>BIGDROP</button>
            </li>
            <li className="navButton">
              <button onClick={() => chooseNav(2)}>CUKER</button>
            </li>
          </ul>
        </nav>
        {section[nav]}
      </section>
      <button onClick={() => {}} className="moreInfo">
        MORE INFO
      </button>
    </div>
  );
}
