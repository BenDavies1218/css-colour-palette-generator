import { useCurrentThemeData } from "../contexts/currentThemeContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/modal.css";

export function CssCodeExport() {
  let currentTheme = useCurrentThemeData();

  const buildCssVariableString = () => {
    // Iterate over all colour objects in currentTheme
    // and build a CSS snippet as a string
    let codeAsString = "";
    codeAsString += `:root {\n`;

    currentTheme.colours.forEach((colourObj) => {
      codeAsString += `\t--${colourObj.themeName}-${colourObj.strength}: ${colourObj.hex};\n`;
    });

    codeAsString += `}`;
    return codeAsString;
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(buildCssVariableString());
    toast.success("Code Copied", {
      position: "bottom-right",
      className: "foo-bar",
      autoClose: 1000,
    });
  };

  return (
    <div>
      <h1>Your CSS code is here...</h1>

      <SyntaxHighlighter>{buildCssVariableString()}</SyntaxHighlighter>

      <button onClick={handleCopyClick}>Copy code to Clipboard</button>
      <ToastContainer />
    </div>
  );
}
