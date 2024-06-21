import { useEffect, useState } from "react";
import FullThemeGenerator from "../components/FullThemeGenerator";
import MonoThemeGenerator from "../components/MonoThemeGenerator";
import "../styles/modal.css";

export default function GeneratorPage() {
  // State to track selected theme ("full" for Full Theme, "mono" for Monochromatic)
  const [selectTheme, setSelectTheme] = useState("full");

  // Function to handle selecting theme
  const handleSelectedTheme = (themeName) => {
    setSelectTheme(themeName);
  };

  // Effect to clear localStorage on initial render
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      {/* Container for displaying themes */}
      <div className="displayItem">
        {/* Buttons to toggle between Full Theme and Monochromatic */}
        <div className="toggleButtons">
          <button onClick={() => handleSelectedTheme("full")}>
            Full Theme
          </button>
          <button onClick={() => handleSelectedTheme("mono")}>
            Monochromatic
          </button>
        </div>

        {/* Conditional rendering based on selected theme */}
        {selectTheme === "full" && <FullThemeGenerator />}
        {selectTheme === "mono" && <MonoThemeGenerator />}
      </div>
    </>
  );
}
