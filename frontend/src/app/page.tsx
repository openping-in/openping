import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Transparency } from "@/components/home/transparency";
import { Cta } from "@/components/home/cta";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-w-0 overflow-x-clip">
        <Hero />
        <Features />
        <HowItWorks />
        <Transparency />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
