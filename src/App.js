import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Service from './pages/Service';
import Layout from './hoc/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home />}  />
          <Route path="/about" exact element={<About />} />
          <Route path="/service" exact element={<Service />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
