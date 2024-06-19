import { Sketch } from "@uiw/react-color";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { CssCodeExport } from "./CssCodeExport";
import { ColourBlock } from "./ColourBlock";
import { useGenerator } from "../hooks/useGenerator";
import "../styles/monoTheme.css";
export default function MonoThemeGenerator() {
  const {
    modal,
    formBaseColour,
    setFormBaseColour,
    currentTheme,
    toggleModal,
  } = useGenerator();

  return (
    <div className="Mono">
      <h3>Monochromatic Generator</h3>
      <PureModal
        header={currentTheme.displayName}
        footer={
          <div>
            <h6>Thank you for generating colours</h6>
          </div>
        }
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          toggleModal();
          return true;
        }}
      >
        <CssCodeExport />
      </PureModal>

      {/* Base colour input form */}
      <h4>Name of colour: {currentTheme.displayName}</h4>
      <h4>Current Hex value: {formBaseColour}</h4>

      <Sketch
        color={formBaseColour}
        onChange={(colour) => setFormBaseColour(colour.hex)}
      />
      <button onClick={toggleModal}>Export CSS</button>

      {/* CSS theme display component */}
      <div className="displayedColours">
        {currentTheme.colours?.map((colourEntry, index) => (
          <ColourBlock
            key={currentTheme.name + index}
            colourEntry={colourEntry}
          />
        ))}
      </div>
    </div>
  );
}
