import { Attribution } from "./Attribution";
import { Background } from "./Background";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Integrations } from "./Integrations";
import { Personality } from "./Personality";
import { QuickStart } from "./QuickStart";
import { Updates } from "./Updates";

export function Landing() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Personality />
      <QuickStart />
      <Features />
      <Attribution />
      <Updates />
      <Integrations />
      <Footer />
    </>
  );
}
