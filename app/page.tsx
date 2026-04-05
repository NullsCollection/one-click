import Navbar from "./components/Navbar";
import { Hero } from "./components/section/Hero";
import { VideoDemo } from "./components/section/VideoDemo";
import { ProofBar } from "./components/section/ProofBar";
import { Problem } from "./components/section/Problem";
import { BeforeAfter } from "./components/section/BeforeAfter";
import { HowItWorks } from "./components/section/HowItWorks";
import { Features } from "./components/section/Features";
import { Pricing } from "./components/section/Pricing";
import { WhyDifferent } from "./components/section/WhyDifferent";
import { BuiltToLast } from "./components/section/BuiltToLast";
import { GetStarted } from "./components/section/GetStarted";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VideoDemo />
      <ProofBar />
      <Problem />
      <BeforeAfter />
      <HowItWorks />
      <Features />
      {/* <Pricing /> */}
      <WhyDifferent />
      <BuiltToLast />
      <GetStarted />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
