import { useState } from "react";
import { Sketch } from "@uiw/react-color";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { CssCodeExport } from "./CssCodeExport";
import { useGeneratorFullTheme } from "../hooks/useGeneratorFullTheme";
import "../styles/monoTheme.css";
import SingleColour from "./SingleColour";

export default function MonoThemeGenerator() {
  const [colours, setColours] = useState(["#ffffff", "#ffffff", "#ffffff"]);
  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const {
    modal,
    formBaseColour,
    setFormBaseColour,
    currentTheme,
    toggleModal,
  } = useGeneratorFullTheme();

  const handleColourChange = (index, colour) => {};

  const handleColourAmount = (param) => {
    if (param === "+" && colours.length < 10) {
      setColours([...colours, "#ffffff"]); // Add new colour
    } else if (param === "-" && colours.length > 1) {
      setColours(colours.slice(0, colours.length - 1)); // Remove last colour
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
        <CssCodeExport />
      </PureModal>

      {/* Base colour input form */}
      <h4>Name of colour: {currentTheme.displayName}</h4>
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
            onClick={(colour) => handleColourChange(index, colour)}
          />
        ))}
      </div>
    </div>
  );
}
