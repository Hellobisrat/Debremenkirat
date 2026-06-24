import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./components/index";
import Index1 from "./components/index/emebetachin/index1";
import Index2 from "./components/index2";
import Index3 from "./components/index/emebetachin/index3";
import Index4 from "./components/index/emebetachin/index4"

import EmebetachinMezmur1 from "./pages/emebetachin/lemariam";
import GetachinMezmur1 from "./pages/getachin/mezmur1";
import MariamMariam from "./pages/emebetachin/mariammariam";
import EnatAlegn from "./pages/emebetachin/enatalegn"
import EnteBehilina from './pages/emebetachin/entebehlina'
import Yegetayenat from "./pages/emebetachin/yegetayenat";
import Yamilakenat from "./pages/emebetachin/yamilakenat";
import Sebatu from "./pages/emebetachin/sebatumentolat";
import Yesidik from "./pages/emebetachin/yestedikber"
import DingilBedinglina from "./pages/emebetachin/dingilbedingilina";
import Kibebe from "./pages/emebetachin/kibebe";
import TimketeZemedene from "./pages/emebetachin/timkitezemedene";
import Sidetish from "./pages/emebetachin/sidetish";
import Gelilaetwi from "./pages/emebetachin/gelilaetewi";
import Adaminlemadan from "./pages/emebetachin/adaminlemadan";
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
        <Route path="/index4" element={<Index4/>}/>

        <Route path="/yemebetachinmezmur1" element={<EmebetachinMezmur1 />} />
        <Route path="/yegetamezmur1" element={<GetachinMezmur1 />} />
        <Route path="/mariammariam" element={<MariamMariam />} />
        <Route path="/enatalegn" element={<EnatAlegn/>}/>
        <Route path="/entebehlina" element={<EnteBehilina/>}/>
        <Route path="/yegetaye" element={<Yegetayenat/>}/>
        <Route path="/yamilakenat" element={<Yamilakenat/>}/>
        <Route path="/sebatumentolat" element={<Sebatu/>}/>
        <Route path="/yesidke" element={<Yesidik/>}/>
        <Route path="/bedingilina" element={<DingilBedinglina/>}/>
        <Route path="/timkite" element={<TimketeZemedene/>}/>
        <Route path="/sidetish" element={<Sidetish/>}/>
        <Route path="/kibebe" element={<Kibebe/>}/>
        <Route path="/gelilaetewi" element={<Gelilaetwi/>}/>
        <Route path="/adaminlemadan" element={<Adaminlemadan/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

