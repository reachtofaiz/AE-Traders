import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Blog />
      <About />
      <Testimonials />
      <Footer />

    </main>

  );
}
