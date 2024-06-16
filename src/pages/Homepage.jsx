import { Link } from "react-router-dom";
import "../styles/home.css";
import Palette from "../components/Palette";

export default function HomePage() {
  const defaultColoursThemes = [
    ["#4abdac", "#fc4a1a", "#f7b733", "#dfdce3"],
    ["#0e0b16", "#a239ca", "#4717f6", "#e7dfdd"],
    ["#b82601", "#813772", "#062f4f", "#000000"],
    ["#caebf2", "#a9a9a9", "#ff3b3f", "#efefef"],
    ["#c09f80", "#76323f", "#565656", "#d7cec7"],
    ["#3cc47c", "#1e392a", "#e9c893", "#828081"],
    ["#008f95", "#eb6e80", "#e9b000", "#e24e42"],
    ["#4484ce", "#d9d9d9", "#f9cf00", "#f19f4d"],
  ];

  /**
   * Function to scroll to the top of the generator page when loaded
   * @author Benjamin Davies
   */
  const handleGeneratorLinkClick = () => {
    history.push("/generator");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="titleContainer">
        <div className="defaultPalettes">
          <h2>Themes</h2>
          <div className="colourThemes">
            {defaultColoursThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <div className="customLink">
            <Link
              to={"/generator"}
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
