import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export default function SingleColour({
  colour, // Current colour of the block
  number, // Index number of the colour block
  selectedColour, // Selected colour (active colour)
  isActive, // Flag indicating if the colour is active
  onClick, // Function to handle click event
}) {
  // State to manage the current colour state
  const [colourState, setColourState] = useState(colour);

  // Custom hook to manage local storage for colour
  const [storedColour, setStoredColour] = useLocalStorage(
    `Colour-number-${number}`, // Local storage key
    selectedColour // Default value from props
  );

  // Effect to update colourState when isActive or storedColour changes
  useEffect(() => {
    if (isActive) {
      // Parse storedColour to remove quotes if present
      const parsedColour = storedColour
        ? storedColour.replace(/^"|"$/g, "")
        : colour;
      setColourState(parsedColour);
    }
  }, [isActive, storedColour, colour]);

  // Function to handle click event on the colour block
  const handleClick = () => {
    // Retrieve base colour from localStorage or default to #ffffff
    const baseColour = localStorage.getItem("css-basecolour") || "#ffffff";
    // Parse baseColour to remove quotes if present
    const parsedBaseColour = baseColour.replace(/^"|"$/g, "");
    // Update colourState and storedColour to parsedBaseColour
    setColourState(parsedBaseColour);
    setStoredColour(parsedBaseColour);
    // Invoke parent onClick function with parsedBaseColour
    onClick(parsedBaseColour);
  };

  return (
    <div>
      {/* Display colour block with background colour */}
      <div
        className="colourBlock"
        style={{ backgroundColor: colourState }}
        onClick={handleClick}
      >
        {/* Display the current colour value */}
        <h6>{colourState}</h6>
      </div>
    </div>
  );
}
