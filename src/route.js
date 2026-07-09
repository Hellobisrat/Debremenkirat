import Home from "./Home";
import Index from "./components/index";
import Index1 from "./components/index/emebetachin/index1";
import Index2 from "./components/index2";
import Index3 from "./components/index/emebetachin/index3";
import Index4 from "./components/index/emebetachin/index4";
import Index5 from "./components/index/emebetachin/index5";
import Index6 from "./components/index/emebetachin/index6";
import Index7 from "./components/index/emebetachin/index7";
import IndexA from "./components/indexA";
import IndexB from "./components/indexB";
import IndexC from "./components/indexC";
import SongPage from "./pages/songPage";
import Yesamintu from "./pages/yesamintu";


export const routes = [
  { path: "/", element: <Home /> },
  { path: "/index", element: <Index /> },
  { path: "/index1", element: <Index1 /> },
  { path: "/index2", element: <Index2 /> },
  { path: "/index3", element: <Index3 /> },
  { path: "/index4", element: <Index4 /> },
  { path: "/index5", element: <Index5 /> },
  { path: "/index6", element: <Index6 /> },
  { path: "/index7", element: <Index7 /> },
  { path: "/indexA", element: <IndexA /> },
  { path: "/indexB", element: <IndexB /> },
  { path: "/indexC", element: <IndexC /> },
  { path: "/song/:category/:id", element: <SongPage /> },
  { path: "/yesamintu", element: <Yesamintu /> },
];
