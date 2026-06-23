import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/index";
import Index1 from "./components/index1";
import Index2 from "./components/index2";
import Index3 from "./components/index3";

import EmebetachinMezmur1 from "./pages/emebetachin/mezmur1";
import GetachinMezmur1 from "./pages/getachin/mezmur1";
import MariamMariam from "./pages/emebetachin/mariammariam";
import EnatAlegn from "./pages/emebetachin/enatalegn"
import EnteBehilina from './pages/emebetachin/entebehlina'
import Yegetayenat from "./pages/emebetachin/yegetayenat";
import Yamilakenat from "./pages/emebetachin/yamilakenat";
import Home  from './Home';
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Index />} />
        <Route path="/index1" element={<Index1 />} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/index3" element={<Index3/>}/>

        <Route path="/yemebetachinmezmur1" element={<EmebetachinMezmur1 />} />
        <Route path="/yegetamezmur1" element={<GetachinMezmur1 />} />
        <Route path="/mariammariam" element={<MariamMariam />} />
        <Route path="/enatalegn" element={<EnatAlegn/>}/>
        <Route path="/entebehlina" element={<EnteBehilina/>}/>
        <Route path="/yegetaye" element={<Yegetayenat/>}/>
        <Route path="/yamilakenat" element={<Yamilakenat/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

