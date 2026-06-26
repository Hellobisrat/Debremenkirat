import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/index";
import Index1 from "./components/index/emebetachin/index1";
import Index2 from "./components/index2";
import Index3 from "./components/index/emebetachin/index3";
import Index4 from "./components/index/emebetachin/index4";
import Index5 from "./components/index/emebetachin/index5";
import Index6 from "./components/index/emebetachin/index6";

import Home from "./Home";
import SongPage from "./pages/songPage";
import Yesamintu from "./pages/yesamintu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Index />} />
        <Route path="/index1" element={<Index1 />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/index3" element={<Index3 />} />
        <Route path="/index4" element={<Index4 />} />
        <Route path="/index5" element={<Index5/>}/>
        <Route path="/index6" element={<Index6/>}/>

        {/* The ONLY song route you want */}
        <Route path="/song/:category/:id" element={<SongPage />} />

        <Route path="/yesamintu" element={<Yesamintu />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
