import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { TrustedBy } from './components/home/TrustedBy';
import { ProductEcosystem } from './components/home/ProductEcosystem';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ProductEcosystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
