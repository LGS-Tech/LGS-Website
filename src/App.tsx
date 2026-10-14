import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AIInsights } from './components/sections/AIInsights';
import { CTA } from './components/sections/CTA';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { LiveDashboard } from './components/sections/LiveDashboard';
import { Pricing } from './components/sections/Pricing';
import { Splash } from './components/animations/Splash';

function App() {
  return (
    <>
      <Splash />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <LiveDashboard />
          <Features />
          <AIInsights />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
