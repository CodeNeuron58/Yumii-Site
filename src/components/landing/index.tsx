import { Features } from "./Features";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Integrations } from "./Integrations";
import { QuickStart } from "./QuickStart";
import { Testimonials } from "./Testimonials";
import { Updates } from "./Updates";

export function Landing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 flex flex-col gap-12 md:gap-24 relative">
      <Header />
      <Hero />
      <QuickStart />
      <Features />
      <Testimonials />
      <Updates />
      <Integrations />
    </div>
  );
}
