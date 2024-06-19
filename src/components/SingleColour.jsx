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
      setColourState(selectedColour);
    }
  }, [isActive, storedColour]);

  const handleClick = () => {
    setColourState(colour);
    setStoredColour(colour);
    onClick(colour);
  };

  return (
    <div
      className="colourBlock"
      style={{ backgroundColor: colourState }}
      onClick={handleClick}
    >
      <h6>{colour}</h6>
    </div>
  );
}
