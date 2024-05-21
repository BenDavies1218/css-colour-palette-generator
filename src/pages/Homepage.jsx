import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="titleContainer">
        <p>
          Generate a bunch of colour themes or palettes, export them as CSS
          code, and speed up your front-end dev workflow!
        </p>
      </div>
      <Link to={"/generator"}>Make some palettes</Link>
    </>
  );
}
