import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import TrainingsPage from "./pages/trainingsPage/trainingsPage";
import KnowledgePage from "./pages/KnowledgePage/KnowledgePage";



function App() {
    const { pathname } = useLocation();

  // ✅ scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-gradient-to-br from-gray-950 via-rose-950/20 to-slate-900 text-white">

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
