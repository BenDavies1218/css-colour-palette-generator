import { useState } from "react";
import { Sketch } from "@uiw/react-color";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { CssCodeExportFullTheme } from "./CssCodeExportFullTheme";
import { useGenerator } from "../hooks/useGenerator";
import "../styles/monoTheme.css";
import SingleColour from "./SingleColour";

export default function fullThemeGenerator() {
  const [colours, setColours] = useState(["#ffffff", "#ffffff", "#ffffff"]);
  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const {
    modal,
    formBaseColour,
    setFormBaseColour,
    currentTheme,
    toggleModal,
  } = useGenerator();

  const handleColourChange = (index, colour) => {
    const newColours = [...colours];
    newColours[index] = colour;
    setColours(newColours);
    setLastClickedIndex(index);
  };

  const handleColourAmount = (param) => {
    if (param === "+" && colours.length < 10) {
      setColours([...colours, "#ffffff"]); // Add new colour
    } else if (param === "-" && colours.length > 1) {
      localStorage.setItem(`Colour-number-${colours.length - 1}`, "#ffffff");
      setColours(colours.slice(0, colours.length - 1));
    }
  };

  return (
    <div className="Mono">
      <h3>Full Theme</h3>
      <PureModal
        header={currentTheme.displayName}
        footer={
          <div>
            <h6>Thank you for generating colours</h6>
          </div>
        }
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={toggleModal}
      >
        <CssCodeExportFullTheme />
      </PureModal>

      {/* Base colour input form */}
      <h4>Current Hex value: {formBaseColour}</h4>

      <Sketch
        color={formBaseColour}
        onChange={(colour) => setFormBaseColour(colour.hex)}
      />
      <button onClick={toggleModal}>Export CSS</button>

      {/* Colour amount controls */}
      <div className="colourAmount">
        <h3>How Many Colours</h3>
        <button className="colorButton" onClick={() => handleColourAmount("+")}>
          +
        </button>
        <button className="colorButton" onClick={() => handleColourAmount("-")}>
          -
        </button>
      </div>

      {/* Displayed colours */}
      <div className="displayedColours">
        {colours.map((colour, index) => (
          <SingleColour
            key={index}
            colour={colour}
            number={index}
            selectedColour={colours[index]}
            isActive={index === lastClickedIndex}
            onClick={(baseColour) => handleColourChange(index, baseColour)}
          />
        ))}
      </div>
    </div>
  );
}
