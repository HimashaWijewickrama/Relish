import About from "@/components/about";
import Hero from "@/components/hero";
import ReservationSection from "@/components/ReservationSection";
import SpecialMenu from "@/components/SpecialMenu";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SpecialMenu />
      <ReservationSection />
      <Testimonials />
    </>
  );
}
