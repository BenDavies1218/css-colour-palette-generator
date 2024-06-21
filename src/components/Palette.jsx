import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeCodeExport } from "./ThemeCodeExport";

export default function Palette({ colours }) {
  const [modal, setModal] = useState(false);

  const handleThemeClick = () => {
    setModal(true);
  };

  return (
    <>
      <div className="singleDefaultPalette">
        {colours.map((colour, index) => (
          <div
            className="paletteColour"
            key={index}
            style={{ backgroundColor: colour, width: 50, height: 50 }}
            onClick={handleThemeClick}
          ></div>
        ))}
        <PureModal
          header="Themes"
          footer={
            <div>
              <h6>Thank you for generating colours</h6>
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
          <ThemeCodeExport colours={colours} />
        </PureModal>
      </div>
      <ToastContainer />
    </>
  );
}
