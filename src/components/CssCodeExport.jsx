import { useCurrentThemeData } from "../contexts/currentThemeContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/modal.css";
import { defaultThemePalette } from "../assets/defaultThemes";

export function CssCodeExport() {
  let currentTheme = useCurrentThemeData() || defaultThemePalette;

  const buildCssVariableString = () => {
    // Iterate over all colour objects in currentTheme
    // and build a CSS snippet as a string
    let codeAsString = "";
    codeAsString += `:root {\n`;

    if (currentTheme.colours) {
      currentTheme.colours.forEach((colourObj) => {
        codeAsString += `\t--${colourObj.themeName}-${colourObj.strength}: ${colourObj.hex};\n`;
      });
    } else {
      console.error("currentTheme.colours is undefined or null");
      // Handle this case, such as displaying an error message or fallback content
    }

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
