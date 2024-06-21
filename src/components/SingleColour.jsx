import React, { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export default function SingleColour({
  colour,
  number,
  selectedColour,
  isActive,
  onClick,
}) {
  const [colourState, setColourState] = useState(colour);
  const [storedColour, setStoredColour] = useLocalStorage(
    `Colour-number-${number}`,
    selectedColour
  );

  useEffect(() => {
    if (isActive) {
      const parsedColour = storedColour
        ? storedColour.replace(/^"|"$/g, "")
        : colour;
      setColourState(parsedColour);
    }
  }, [isActive, storedColour, colour]);

  const handleClick = () => {
    const baseColour = localStorage.getItem("css-basecolour") || "#ffffff";
    const parsedBaseColour = baseColour.replace(/^"|"$/g, "");
    setColourState(parsedBaseColour);
    setStoredColour(parsedBaseColour);
    onClick(parsedBaseColour);
  };

  return (
    <div>
      <div
        className="colourBlock"
        style={{ backgroundColor: colourState }}
        onClick={handleClick}
      >
        <h6>{colourState}</h6>
      </div>
    </div>
  );
}
