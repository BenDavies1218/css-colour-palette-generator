import { useEffect, useState } from "react";
import {
  useBaseColourGlobalData,
  useBaseColourGlobalDispatch,
} from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";
import { useCurrentThemeData } from "../contexts/currentThemeContext";
import { ColourBlock } from "../components/ColourBlock";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { CssCodeExport } from "../components/CssCodeExport";

export default function GeneratorPage() {
  const [modal, setModal] = useState(false);

  // Base colour from global state
  let baseColourGlobal = useBaseColourGlobalData();

  // Base colour from form
  let [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);

  // let baseColourGlobalRaw = useContext(BaseColourGlobalDataContext);
  let setBaseColourGlobal = useBaseColourGlobalDispatch();

  let currentTheme = useCurrentThemeData();

  // On component mount, set local form value to global state value
  useEffect(() => {
    setFormBaseColour(baseColourGlobal);
  }, [baseColourGlobal]);

  useEffect(() => {
    setBaseColourGlobal(formBaseColour);
  }, [formBaseColour]);

  return (
    <div>
      <PureModal
        header={currentTheme.displayName}
        footer={
          <div>
            <h6>Thankyou for generating colours</h6>
          </div>
        }
        isOpen={modal}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <CssCodeExport />
      </PureModal>

      {/* Base colour input form */}
      <h4>Name of colour: {currentTheme.displayName}</h4>
      <h4>Current Hex value: {formBaseColour}</h4>

      {/* <input type="color" name="" id="" /> */}
      <Sketch
        color={formBaseColour}
        onChange={(colour) => setFormBaseColour(colour.hex)}
      />
      <button onClick={() => setModal(!modal)}>Export CSS</button>
      {/* CSS theme display component  */}
      {currentTheme.colours?.map((colourEntry, index) => {
        return (
          <ColourBlock
            key={currentTheme.name + index}
            colourEntry={colourEntry}
          />
        );
      })}
    </div>
  );
}
