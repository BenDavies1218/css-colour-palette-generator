import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/modal.css";

export function CssCodeExportFullTheme() {
  // State to hold filtered colours from localStorage
  const [filteredColours, setFilteredColours] = useState([]);

  // Effect to fetch Colour-number-X values from localStorage
  useEffect(() => {
    const coloursFromLocalStorage = [];
    for (let i = 0; i < 10; i++) {
      const storedColour = localStorage.getItem(`Colour-number-${i}`);
      if (storedColour && storedColour !== "#ffffff") {
        coloursFromLocalStorage.push(storedColour);
      }
    }
    setFilteredColours(coloursFromLocalStorage);
  }, []);

  // Function to build CSS variable string based on filtered colours
  const buildCssVariableString = (colours) => {
    let codeAsString = ":root {\n";
    colours.forEach((colour, index) => {
      codeAsString += `\t--Theme-colour-${index}: ${colour};\n`;
    });
    codeAsString += "}";
    return codeAsString;
  };

  // Function to handle copying CSS code to clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(buildCssVariableString(filteredColours));
    toast.success("Code Copied", {
      position: "bottom-right",
      className: "foo-bar",
      autoClose: 1000,
    });
  };

  return (
    <div>
      <h1>Your CSS code is here...</h1>

      {/* Display CSS code with syntax highlighting */}
      <SyntaxHighlighter>
        {buildCssVariableString(filteredColours)}
      </SyntaxHighlighter>

      {/* Button to copy CSS code to clipboard */}
      <button onClick={handleCopyClick}>Copy code to Clipboard</button>

      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
}
