import { Routes, Route } from "react-router-dom";
import { FancyHeader } from "./components/FancyHeader";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <>
      <FancyHeader />
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
