import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Audience from './components/Audience';
import FutureVision from './components/FutureVision';
import Trust from './components/Trust';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import PilotForm from './components/PilotForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#101C2C] text-[#F4F7FA] selection:bg-[#3978E8] selection:text-white">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#3978E8] focus:text-white focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Audience />
        <FutureVision />
        <Trust />
        <Team />
        <Testimonials />
        <PilotForm />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
