import About from "./components/About";
import Bubble from "./components/Bubble";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Bubble />
    </div>
  );
}
