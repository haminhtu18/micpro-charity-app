import Breathe from "@/components/Breathe";
import Campaigns from "@/components/Campaigns";
import Donor from "@/components/Donor";
import Helping from "@/components/Helping";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Helping />
      <Donor />
      <Breathe />
      <Testimonial />
      <Campaigns />
      <Join />
    </>
  );
}
