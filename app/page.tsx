import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Timeline />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
