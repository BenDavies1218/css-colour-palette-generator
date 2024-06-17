import { Link } from "react-router-dom";
import "../styles/home.css";
import Palette from "../components/Palette";
import "../styles/modal.css";

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

  const defaultMonoThemes = [
    ["#4abdac", "#56c7b6", "#61d2c0", "#6bdeca"],
    ["#0e0b16", "#151321", "#1d1a2b", "#242136"],
    ["#b82601", "#c03714", "#c84827", "#d1583a"],
    ["#caebf2", "#d3eff5", "#dceff8", "#e5f3fa"],
    ["#c09f80", "#c8a78b", "#d0af95", "#d8b79f"],
    ["#3cc47c", "#4fd18b", "#62de9a", "#75eba9"],
    ["#008f95", "#199fa3", "#33afb1", "#4dbfbe"],
    ["#4484ce", "#5892d4", "#6ca1da", "#80aff1"],
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
          <h2>Colour Themes</h2>
          <div className="colourThemes">
            {defaultColoursThemes.map((array, index) => (
              <Palette key={index} colours={array} />
            ))}
          </div>
          <h2>MonoThemes</h2>
          <div className="defaultMonoThemes">
            {defaultMonoThemes.map((array, index) => (
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
