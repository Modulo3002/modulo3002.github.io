import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TableDetail from "./pages/TableDetail";
import MapPage from "./pages/MapPage";
import About from "./pages/About";
import ListOverview from "./pages/ListOverview"


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/tafel/:id" element={<TableDetail />} />
          <Route path="/lijstoverzicht" element={<ListOverview />} />
          <Route path="/over" element={<About/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
