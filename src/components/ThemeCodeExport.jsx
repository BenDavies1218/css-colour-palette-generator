import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ThemeCodeExport({ colours }) {
  const buildCssVariableString = () => {
    return `:root {\n${colours
      .map((colour, index) => `  --Theme-Colour-${index}: ${colour};\n`)
      .join("")}}`;
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
    <div className="CopyContainer">
      <h1>Your CSS code is here...</h1>
      <SyntaxHighlighter language="css" style={docco}>
        {buildCssVariableString()}
      </SyntaxHighlighter>
      <button onClick={handleCopyClick}>Copy code to Clipboard</button>
      <ToastContainer />
    </div>
  );
}
