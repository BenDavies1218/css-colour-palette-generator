export default function Palette({ colours }) {
  return (
    <>
      <div className="singleDefaultPalette">
        {colours.map((colour, index) => (
          <div
            className="paletteColour"
            key={index}
            style={{ backgroundColor: colour, width: 50, height: 50 }}
          >
            {/* For demonstration, each color is displayed as a square */}
          </div>
        ))}
      </div>
    </>
  );
}
