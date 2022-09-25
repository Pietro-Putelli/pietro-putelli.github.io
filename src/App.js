import "./index.css";
import { About, Contacts, Home, Projects } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  document.title = "Pietro Putelli";

  return (
    <>
      <BrowserRouter
      // basename="https://pietroputelli.com"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
