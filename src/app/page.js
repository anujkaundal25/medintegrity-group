import About from "@/component/home/About";
import Commitments from "@/component/home/Commitments";
import Contact from "@/component/home/Contact";
import CTA from "@/component/home/CTA";
import Faq from "@/component/home/Faq";
import Hero from "@/component/home/Hero";
import Services from "@/component/home/Services";
import Testimonials from "@/component/home/Testimonials";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />

      {/* leadership */}
      {/* <Leadership/> */}

      {/* service */}
      <Services />


      {/* why choose us */}
      <WhyChooseUs />

      {/* Commitment,International Focus,Independence Matters */}
      {/* <Commitments/> */}

      {/* Testimonials */}
      <Testimonials />

      {/* cta */}
      <CTA />

      {/* faq */}
      <Faq />

      {/* contact */}
      {/* <Contact /> */}
    </div>
  );
}
