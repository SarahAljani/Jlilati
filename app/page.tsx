import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import LocationMapWrapper from "@/components/LocationMapWrapper";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Services />
      <LocationMapWrapper />
      <Footer />
    </main>
  );
}
