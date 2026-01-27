import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import { config } from "./constants/config";

const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Tech = lazy(() => import("./components/sections/Tech"));
const Works = lazy(() => import("./components/sections/Works"));
const Feedbacks = lazy(() => import("./components/sections/Feedbacks"));
const Contact = lazy(() => import("./components/sections/Contact"));
const StarsCanvas = lazy(() =>
  import("./components/canvas/Stars").then((m) => ({ default: m.default }))
);

const SectionFallback = () => <div className="min-h-[1px]" aria-hidden />;

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1d1836",
              color: "#fff",
              border: "1px solid #915EFF",
              borderRadius: "12px",
              padding: "16px",
            },
            success: {
              iconTheme: {
                primary: "#00cea8",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff6b6b",
                secondary: "#fff",
              },
            },
          }}
        />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
