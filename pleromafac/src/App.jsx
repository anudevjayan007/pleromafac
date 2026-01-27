import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import OurStory from "./components/story/Ourstory";
import Services from "./components/services/Services";
import Trainings from "./components/training/Training";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

function App() {
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

      {/* HERO – ONLY section that fills viewport */}
      <section id="hero" className="hero-section">
        <Hero />
      </section>

      {/* STORY */}
      <section id="story" className="section">
        <OurStory />
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <Services />
      </section>

      {/* TRAINING */}
      <section id="training" className="section">
        <Trainings />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
