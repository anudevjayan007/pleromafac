import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Hero from "../../components/hero/Hero";
import OurStory from "../../components/story/Ourstory";
import Services from "../../components/services/Services";
import Trainings from "../../components/training/Training";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: window.innerWidth < 768 ? -72 : -80,
      });
    }
  }, [location]);

  return (
    <>
      <section id="hero" className="hero-section">
        <Hero />
      </section>

      <section id="story" className="section">
        <OurStory />
      </section>

      <section id="services" className="section">
        <Services />
      </section>

      <section id="training" className="section">
        <Trainings />
      </section>
    </>
  );
}
