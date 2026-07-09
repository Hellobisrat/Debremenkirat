import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./route.js";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export default function App() {
  return (
     <BrowserRouter>
      <Navbar />

      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
