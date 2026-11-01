import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
// import Layout from './hoc/Layout';
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainContent>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/service" exact element={<Service />} />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
}

export default App;
