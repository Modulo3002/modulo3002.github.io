import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TableDetail from "./pages/TableDetail";
import MapPage from "./pages/MapPage";
import About from "./pages/About";


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/tafel/:id" element={<TableDetail />} />
          <Route path="/MapOverzicht" element={<MapPage />} />
          <Route path="/about" element={<About/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
