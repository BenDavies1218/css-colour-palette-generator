import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Template from "./pages/_TemplatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          {/* <Route path="generator" element={<GeneratorPage />} /> */}
          {/* <Route path="generator/saved" element={<SavedThemesPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
