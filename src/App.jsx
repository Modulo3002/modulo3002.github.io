import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import TableDetail from "./pages/TableDetail";
import MapPage from "./pages/MapPage";
//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tafel/:id" element={<TableDetail />} />
          <Route path="/MapOverzicht" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
