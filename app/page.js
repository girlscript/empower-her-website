import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Guides from "./sections/Guide";

export default function Home() {
  return (
    <div className="relative w-screen overflow-hidden flex flex-col font-poppins scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Guides />
      <Contact />
      <Footer />
    </div>
  );
}
