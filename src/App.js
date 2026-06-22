import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/index";
import Index1 from "./components/index1";
import Index2 from "./components/index2";

import EmebetachinMezmur1 from "./pages/emebetachin/mezmur1";
import GetachinMezmur1 from "./pages/getachin/mezmur1";
import Home  from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Index />} />
        <Route path="/index1" element={<Index1 />} />
        <Route path="/index2" element={<Index2 />} />

        <Route path="/yemebetachinmezmur1" element={<EmebetachinMezmur1 />} />
        <Route path="/yegetamezmur1" element={<GetachinMezmur1 />} />
      </Routes>
    </BrowserRouter>
  );
}

