import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
