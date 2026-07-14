import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Boutique } from "@/components/Boutique";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { BookingCTA } from "@/components/BookingCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { localBusinessSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <TrustBar />
        <Services />
        <Boutique />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <About />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
