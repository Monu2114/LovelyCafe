import React, { useEffect } from "react";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { SignatureGallery } from "./components/SignatureGallery";
import { MaterialLibrary } from "./components/MaterialLibrary";
import { MenuAccordion } from "./components/MenuAccordion";
import { StoriesGrid } from "./components/StoriesGrid";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#F8F5EF] min-h-screen w-full relative">
      <Navigation />

      <main>
        <Hero />
        <Philosophy />
        <SignatureGallery />
        <MaterialLibrary />
        <MenuAccordion />
        <StoriesGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
