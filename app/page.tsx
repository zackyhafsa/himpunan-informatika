import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import VisiMisi from "./components/VisiMisi";

export default function Home() {
  return (
    <div>
      <Hero />
      <VisiMisi />
      <Carousel />
      <Accordion />
    </div>
  );
}
