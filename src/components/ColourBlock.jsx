export function ColourBlock({ colourEntry }) {
  return (
    <div className="colourBlock" style={{ backgroundColor: colourEntry.hex }}>
      <h6>{colourEntry.hex || colourEntry}</h6>
      <h6>{colourEntry.themeName + "-" + colourEntry.strength || ""}</h6>
    </div>
  );
}
