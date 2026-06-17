import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
// import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import CtaBand from "../sections/CtaBand";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <main>
        <Hero />
        <Stats />
        {/* <About /> */}
        <Services />
        <Projects />
        <CtaBand />
        {/* <Contact /> */}
      </main>
    </>
  );
}
