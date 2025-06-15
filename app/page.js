import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero className="fade-in" />
      <About className="fade-in delay-1" />
      <Skills className="fade-in delay-2" />
      <Portfolio className="fade-in delay-3" />
      <Contact />
      <Footer />
    </>
  );
}
