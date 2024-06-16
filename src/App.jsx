import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/Homepage";
import GeneratorPage from "./pages/GeneratorPage";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<HomePage />} />
        <Route path="generator" element={<GeneratorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
