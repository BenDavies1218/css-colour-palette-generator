import { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeCodeExport } from "./ThemeCodeExport";

export default function Palette({ colours }) {
  // State to manage modal visibility
  const [modal, setModal] = useState(false);

  // Function to handle opening modal
  const handleThemeClick = () => {
    setModal(true);
  };

  return (
    <>
      {/* Container to display individual colours */}
      <div className="singleDefaultPalette">
        {/* Map over colours array to render each colour */}
        {colours.map((colour, index) => (
          <div
            className="paletteColour"
            key={index}
            style={{ backgroundColor: colour, width: 50, height: 50 }}
            onClick={handleThemeClick}
          ></div>
        ))}

        {/* Modal for exporting theme code */}
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
          {/* Component for exporting theme code */}
          <ThemeCodeExport colours={colours} />
        </PureModal>
      </div>

      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
}
