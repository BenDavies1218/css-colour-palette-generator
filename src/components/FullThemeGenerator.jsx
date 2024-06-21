import { useState } from "react";
import { Sketch } from "@uiw/react-color";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { CssCodeExportFullTheme } from "./CssCodeExportFullTheme";
import { useGenerator } from "../hooks/useGenerator";
import "../styles/monoTheme.css";
import SingleColour from "./SingleColour";

export default function fullThemeGenerator() {
  // INITIAL STATE FOR THE COLOURS
  const [colours, setColours] = useState(["#ffffff", "#ffffff", "#ffffff"]);

  // TRACK THE LAST COLOUR THAT WAS CLICKED
  const [lastClickedIndex, setLastClickedIndex] = useState(null);

  // HOOKS FOR MODAL AND FORM BASE COLOUR
  const {
    modal,
    formBaseColour,
    setFormBaseColour,
    currentTheme,
    toggleModal,
  } = useGenerator();

  // FUNCTION TO HANDLE COLOUR CHANGE BY INDEX
  const handleColourChange = (index, colour) => {
    // get the current colours array
    const newColours = [...colours];
    // Update the colour at the specified index
    newColours[index] = colour;
    // Update state with the new colours array
    setColours(newColours);
    // Update the last clicked index
    setLastClickedIndex(index);
  };

  // FUNCTION TO HANDLE ADDING OR REMOVING COLOURS
  const handleColourAmount = (param) => {
    if (param === "+" && colours.length < 10) {
      // Add a new colour (#ffffff) to the end of the colours array
      setColours([...colours, "#ffffff"]);
    } else if (param === "-" && colours.length > 1) {
      // Remove the last colour from the colours array
      setColours(colours.slice(0, colours.length - 1));
      // Set the corresponding Colour-number-X in localStorage to #ffffff
      localStorage.setItem(`Colour-number-${colours.length - 1}`, "#ffffff");
    }
  };

  return (
    <div className="Mono">
      {/* Header */}
      <h3>Full Theme</h3>

      {/* Modal for CSS Export */}
      <PureModal
        header="Your Theme Colours"
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
        <h3>Colours</h3>
        <button className="colorButton" onClick={() => handleColourAmount("+")}>
          +
        </button>
        <button className="colorButton" onClick={() => handleColourAmount("-")}>
          -
        </button>
      </div>

      {/* Displayed colours */}
      <div className="displayedColours">
        {/* Map over colours state to render SingleColour components */}
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
