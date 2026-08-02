import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Contact />
      <ScrollToTopButton />
    </div>
  );
}
