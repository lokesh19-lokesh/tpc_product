import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { TrustedBy } from './components/home/TrustedBy';
import { OurApproach } from './components/home/OurApproach';
import { Industries } from './components/home/Industries';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { ProductEcosystem } from './components/home/ProductEcosystem';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurApproach />
        <ProductEcosystem />
        <Industries />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
