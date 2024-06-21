import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/modal.css";

export function CssCodeExportFullTheme() {
  const [filteredColours, setFilteredColours] = useState([]);

  // Fetch all Colour-number-X values from local storage and filter out #ffffff
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

  const buildCssVariableString = (colours) => {
    let codeAsString = ":root {\n";
    colours.forEach((colour, index) => {
      codeAsString += `\t--Theme-colour-${index}: ${colour};\n`;
    });
    codeAsString += "}";
    return codeAsString;
  };

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

      <SyntaxHighlighter>
        {buildCssVariableString(filteredColours)}
      </SyntaxHighlighter>

      <button onClick={handleCopyClick}>Copy code to Clipboard</button>
      <ToastContainer />
    </div>
  );
}
