import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
import Palette from "../components/Palette";
import {
  defaultColoursThemes,
  defaultMonoThemes,
  defaultDuoThemes,
  defaultContrastThemes,
} from "../assets/defaultThemes";

export default function HomePage() {
  const navigate = useNavigate();

  /**
   * Function to scroll to the top of the generator page when loaded
   * @param {Event} e - click event
   */
  const handleGeneratorLinkClick = (e) => {
    e.preventDefault();
    navigate("/generator");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="titleContainer">
        <div className="defaultPalettes">
          <div className="title">
            <h1>CSS Palette Generator</h1>
            <p>
              An application designed to simplify the creation of CSS variables
              for diverse color themes. Whether you need monochromatic, duotone
              or high-contrast color schemes, this tool allows you to
              effortlessly generate and manage your theme-related CSS variables.
              Choose from a range of our professional themes or build your own
              by inputting your desired color parameters. Perfect for developers
              and designers alike, this application streamlines the process of
              theming, making it easier than ever to implement dynamic, visually
              appealing, and user-friendly interfaces.
            </p>
          </div>
          <h2>Full Colour Themes</h2>
          <div className="colourThemes">
            {defaultColoursThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <h2>Monochromatic</h2>
          <div className="colourThemes">
            {defaultMonoThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <h2>DuoTone</h2>
          <div className="colourThemes">
            {defaultDuoThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <h2>High Contrast</h2>
          <div className="colourThemes">
            {defaultContrastThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <div className="customLink">
            <Link
              to="/generator"
              className="linkToGenerator"
              onClick={handleGeneratorLinkClick}
            >
              Make Custom palettes
            </Link>
            <p>
              Generate a bunch of colour themes or palettes, export them as CSS
              code to speed up your front-end dev workflow!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
