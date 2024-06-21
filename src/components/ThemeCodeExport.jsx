import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ThemeCodeExport({ colours }) {
  // Function to build CSS variable string from colours array
  const buildCssVariableString = () => {
    return `:root {\n${colours
      .map((colour, index) => `  --Theme-Colour-${index}: ${colour};\n`)
      .join("")}}`;
  };

  // Function to handle copying CSS code to clipboard
  const handleCopyClick = () => {
    navigator.clipboard.writeText(buildCssVariableString());
    toast.success("Code Copied", {
      position: "bottom-right",
      className: "foo-bar",
      autoClose: 1000,
    });
  };

  return (
    <div className="CopyContainer">
      {/* Display heading for CSS code */}
      <h1>Your CSS code is here...</h1>

      {/* Display CSS code with syntax highlighting */}
      <SyntaxHighlighter language="css" style={docco}>
        {buildCssVariableString()}
      </SyntaxHighlighter>

      {/* Button to copy CSS code to clipboard */}
      <button onClick={handleCopyClick}>Copy code to Clipboard</button>

      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
}
