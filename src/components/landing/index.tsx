import { Background } from "./Background";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Integrations } from "./Integrations";
import { QuickStart } from "./QuickStart";
import { Testimonials } from "./Testimonials";
import { Updates } from "./Updates";

export function Landing() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <QuickStart />
      <Features />
      <Testimonials />
      <Updates />
      <Integrations />
      <Footer />
    </>
  );
}
