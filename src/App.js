import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}  />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
