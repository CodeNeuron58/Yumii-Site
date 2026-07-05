import { Attribution } from "./Attribution";
import { Background } from "./Background";
import { Faces } from "./Faces";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Personality } from "./Personality";
import { Presence } from "./Presence";
import { Privacy } from "./Privacy";
import { QuickStart } from "./QuickStart";
import { Updates } from "./Updates";

export function Landing() {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Presence />
      <Faces />
      <Privacy />
      <Features />
      <Personality />
      <QuickStart />
      <Updates />
      <Attribution />
      <Footer />
    </>
  );
}
