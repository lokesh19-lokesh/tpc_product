import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingScrollButton } from './components/layout/FloatingScrollButton';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';

// Products
import { PatternsOS } from './pages/products/PatternsOS';
import { MintLeafAI } from './pages/products/MintLeafAI';
import { YesTick } from './pages/products/YesTick';
import { PickMySchoolAI } from './pages/products/PickMySchoolAI';
import { PatternsLabs } from './pages/products/PatternsLabs';
import { EnterpriseSolutions } from './pages/products/EnterpriseSolutions';

// Industries
import { Manufacturing } from './pages/industries/Manufacturing';
import { Healthcare } from './pages/industries/Healthcare';
import { Education } from './pages/industries/Education';
import { Retail } from './pages/industries/Retail';
import { Hospitality } from './pages/industries/Hospitality';
import { Construction } from './pages/industries/Construction';

// Solutions
import { Operations } from './pages/solutions/Operations';
import { SalesCRM } from './pages/solutions/SalesCRM';
import { Finance } from './pages/solutions/Finance';
import { PredictiveMaintenance } from './pages/solutions/PredictiveMaintenance';
import { CustomerIntelligence } from './pages/solutions/CustomerIntelligence';
import { Compliance } from './pages/solutions/Compliance';
import { CloudServices } from './pages/solutions/CloudServices';
import { DevSecOps } from './pages/solutions/DevSecOps';
import { CloudNative } from './pages/solutions/CloudNative';
import { PlatformEngineering } from './pages/solutions/PlatformEngineering';
import { AgileDevOps } from './pages/solutions/AgileDevOps';
import { UiUxDesign } from './pages/solutions/UiUxDesign';
import { MobileAppDev } from './pages/solutions/MobileAppDev';
import { NetworkServices } from './pages/solutions/NetworkServices';
import { CyberSecurity } from './pages/solutions/CyberSecurity';
import { DigitalEnterpriseApps } from './pages/solutions/DigitalEnterpriseApps';
import { DataAndAI } from './pages/solutions/DataAndAI';
import { DigitalStrategy } from './pages/solutions/DigitalStrategy';
import { EngineeringRD } from './pages/solutions/EngineeringRD';
import { EnterprisePlatforms } from './pages/solutions/EnterprisePlatforms';

// Resources
import { Documentation } from './pages/resources/Documentation';
import { CustomerStories } from './pages/resources/CustomerStories';
import { Security } from './pages/resources/Security';
import { Status } from './pages/resources/Status';
import { Support } from './pages/resources/Support';

// Company
import { About } from './pages/company/About';
import { Careers } from './pages/company/Careers';
import { Leadership } from './pages/company/Leadership';
import { Partners } from './pages/company/Partners';
import { Investors } from './pages/company/Investors';
import { Contact } from './pages/company/Contact';
import { Newsroom } from './pages/company/Newsroom';

// Legal & Auth
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';
import { Cookies } from './pages/legal/Cookies';
import { TrustCenter } from './pages/legal/TrustCenter';
import { Accessibility } from './pages/legal/Accessibility';
import { SignIn } from './pages/auth/SignIn';
import { BookDemo } from './pages/auth/BookDemo';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Products */}
          <Route path="/products/patterns-os" element={<PatternsOS />} />
          <Route path="/products/mint-leaf-ai" element={<MintLeafAI />} />
          <Route path="/products/yestick" element={<YesTick />} />
          <Route path="/products/pick-my-school-ai" element={<PickMySchoolAI />} />
          <Route path="/products/patterns-labs" element={<PatternsLabs />} />
          <Route path="/products/enterprise-solutions" element={<EnterpriseSolutions />} />

          {/* Industries */}
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/industries/construction" element={<Construction />} />

          {/* Solutions */}
          <Route path="/solutions/operations" element={<Operations />} />
          <Route path="/solutions/sales-crm" element={<SalesCRM />} />
          <Route path="/solutions/finance" element={<Finance />} />
          <Route path="/solutions/predictive-maintenance" element={<PredictiveMaintenance />} />
          <Route path="/solutions/customer-intelligence" element={<CustomerIntelligence />} />
          <Route path="/solutions/compliance" element={<Compliance />} />
          <Route path="/solutions/cloud-services" element={<CloudServices />} />
          <Route path="/solutions/devsecops" element={<DevSecOps />} />
          <Route path="/solutions/cloud-native" element={<CloudNative />} />
          <Route path="/solutions/platform-engineering" element={<PlatformEngineering />} />
          <Route path="/solutions/agile-devops" element={<AgileDevOps />} />
          <Route path="/solutions/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/solutions/mobile-app-dev" element={<MobileAppDev />} />
          <Route path="/solutions/network-services" element={<NetworkServices />} />
          <Route path="/solutions/cyber-security" element={<CyberSecurity />} />
          <Route path="/solutions/digital-enterprise-apps" element={<DigitalEnterpriseApps />} />
          <Route path="/solutions/data-and-ai" element={<DataAndAI />} />
          <Route path="/solutions/digital-strategy" element={<DigitalStrategy />} />
          <Route path="/solutions/engineering-rd" element={<EngineeringRD />} />
          <Route path="/solutions/enterprise-platforms" element={<EnterprisePlatforms />} />

          {/* Resources */}
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/customer-stories" element={<CustomerStories />} />
          <Route path="/resources/security" element={<Security />} />
          <Route path="/resources/status" element={<Status />} />
          <Route path="/resources/support" element={<Support />} />

          {/* Company */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/partners" element={<Partners />} />
          <Route path="/company/investors" element={<Investors />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/newsroom" element={<Newsroom />} />
          <Route path="/resources/newsroom" element={<Newsroom />} />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/trust-center" element={<TrustCenter />} />
          <Route path="/accessibility" element={<Accessibility />} />

          {/* Auth / Demo */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/book-demo" element={<BookDemo />} />

        </Routes>
        <Footer />
        <FloatingScrollButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
