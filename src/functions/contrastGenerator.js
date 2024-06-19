function getContrastColor(hexColor) {
  // Convert hex color to RGB
  let r = parseInt(hexColor.substr(1, 2), 16);
  let g = parseInt(hexColor.substr(3, 2), 16);
  let b = parseInt(hexColor.substr(5, 2), 16);

  // Calculate the relative luminance (Luma formula)
  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Define a luminance threshold for choosing contrasting color
  let threshold = 0.5;

  // Determine contrast color based on luminance
  if (luminance > threshold) {
    // Light background, choose a darker color
    return lightenOrDarkenColor(hexColor, -40); // Example: darken by 40 units
  } else {
    // Dark background, choose a lighter color
    return lightenOrDarkenColor(hexColor, 40); // Example: lighten by 40 units
  }
}

// Function to lighten or darken a color by a specified amount
function lightenOrDarkenColor(hexColor, amount) {
  // Strip the hash sign (#) and convert to RGB
  let rgb = hexColor
    .substring(1)
    .match(/.{2}/g)
    .map((c) => parseInt(c, 16));

  // Lighten or darken each RGB component by the specified amount
  let adjustedColor = rgb.map((c) => {
    let adjusted = c + amount;
    if (adjusted > 255) adjusted = 255;
    if (adjusted < 0) adjusted = 0;
    return adjusted;
  });

  // Convert back to hex format
  let adjustedHex =
    "#" + adjustedColor.map((c) => c.toString(16).padStart(2, "0")).join("");

  return adjustedHex;
}

// Example usage:
let backgroundHex = "#3498db"; // Example background color
let contrastColor = getContrastColor(backgroundHex);
console.log("Contrast color:", contrastColor);
