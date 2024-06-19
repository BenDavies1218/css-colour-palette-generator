import { useState } from "react";
import FullThemeGenerator from "../components/FullThemeGenerator";
import MonoThemeGenerator from "../components/MonoThemeGenerator";
import "../styles/modal.css";

export default function GeneratorPage() {
  const [selectTheme, setSelectTheme] = useState("full");

  const handleSelectedTheme = (themeName) => {
    setSelectTheme(themeName);
  };

  return (
    <>
      <div className="displayItem">
        <div className="toggleButtons">
          <button onClick={() => handleSelectedTheme("full")}>
            Full Theme
          </button>
          <button onClick={() => handleSelectedTheme("mono")}>
            Monochromatic
          </button>
        </div>
        {selectTheme === "full" && <FullThemeGenerator />}
        {selectTheme === "mono" && <MonoThemeGenerator />}
      </div>
    </>
  );
}
