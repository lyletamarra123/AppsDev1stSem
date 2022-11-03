import "./styles.css";
import React, { useState } from "react";
import Experience from "./data";

export default function App() {
  const [nav, chooseNav] = useState(0);

  const section = Experience.map((prop) => {
    return (
      <article className="job-info">
        <h3>{prop.role}</h3>
        <h4>{prop.name}</h4>
        <p className="job-date">{prop.date}</p>
        <div>
          {prop.description.map((desc) => (
            <div className="job-desc">{desc}</div>
          ))}
        </div>
      </article>
    );
  });

  return (
    <body>
    <div className="App">
      <div className="title">
        <h2>Experience</h2>
        <div class="underline"></div>
      </div>
      
      <div className="jobs-center">
        <div className="btn-center">
          <button className="job-btn" onClick={() => chooseNav(0)}>TOMMY</button>
          <button className="job-btn" onClick={() => chooseNav(1)}>BIGDROP</button>
          <button className="job-btn" onClick={() => chooseNav(2)}>CUKER</button>
        </div>
        {section[nav]}
      </div>

      <button onClick={() => {}} className="btn">
        MORE INFO
      </button>
    </div>
    </body>
  );
}
