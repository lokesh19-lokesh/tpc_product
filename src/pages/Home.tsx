import { SEO } from '../components/seo/SEO';
import { Hero } from '../components/home/Hero';
import { TrustedBy } from '../components/home/TrustedBy';
import { OurApproach } from '../components/home/OurApproach';
import { Industries } from '../components/home/Industries';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PatternsLabs } from '../components/home/PatternsLabs';
import { ProductEcosystem } from '../components/home/ProductEcosystem';
import { Marquee } from '../components/home/Marquee';
import { OurBlogs } from '../components/home/OurBlogs';
import { CareersBanner } from '../components/home/CareersBanner';
import { CTA } from '../components/home/CTA';

export function Home() {
  return (
    <main>
      <SEO 
        title="The Patterns Company" 
        description="The Patterns Company delivers enterprise AI solutions, foundational models, and data intelligence platforms designed to scale your operations." 
        keywords="The Patterns Company, AI, enterprise solutions, artificial intelligence, foundational models"
        path="/" 
      />
      <Hero />
      <TrustedBy />
      <OurApproach />
      <ProductEcosystem />
      <Marquee />
      <Industries />
      <WhyChooseUs />
      <OurBlogs />
      <PatternsLabs />
      <CareersBanner />
      <CTA />
    </main>
  );
}
