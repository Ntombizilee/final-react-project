import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Ntombizilee/"
            target="_blank"
            rel="noreferrer"
          >
            Ntombizile Mabuso
          </a>{" "}
          and it is{""}
          <a
            href="https://github.com/Ntombizilee/final-react-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
