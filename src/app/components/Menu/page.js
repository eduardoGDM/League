"use client";
import PatchNotes from "../PatchNote/page";
import HomeEvent from "../homeEvent/page";
import "./style.css";
import { useState } from "react";

export default function Menu() {
  const [componenteAtual, setComponenteAtual] = useState(null);

  const handleButtonClick = (componente) => {
    setComponenteAtual(componente);
  };

  return (
    <div className="  w-screen h-screen">
      <button id="button" onClick={() => handleButtonClick(<HomeEvent />)}>
        Home Event
      </button>
      <button id="button" onClick={() => handleButtonClick(<PatchNotes />)}>
        Patch Notes
      </button>

      <div>{componenteAtual}</div>
    </div>
  );
}
