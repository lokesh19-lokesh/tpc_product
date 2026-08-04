import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomerStories.css';

export function CustomerStories() {
  useEffect(() => {
    // Reset any active product colors to a generic blue for resources
    document.documentElement.style.setProperty('--active-product-color', '#2563eb');
  }, []);

  return (
    <div className="customer-stories-page">
      
      {/* HERO SECTION */}
      <section className="stories-hero">
        <div className="container">
          <h1>How the best teams build the future.</h1>
          <p>
            From global enterprises to hyper-growth startups, discover how innovative companies are using The Patterns Company to solve their hardest operational challenges.
          </p>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="featured-story">
        <div className="container">
          <div className="featured-story-card">
            <div className="featured-image-container">
              <img 
                src="/images/customers/featured.png" 
                alt="Team using The Patterns Company dashboard" 
                className="featured-image"
              />
            </div>
            <div className="featured-content">
              <div className="featured-badge">Featured Story</div>
              <h3 className="featured-quote">
                "The Patterns Company didn't just digitize our workflows; it completely rewired how our executive team makes decisions. We now see problems weeks before they occur."
              </h3>
              <div className="featured-author">Sarah Jenkins</div>
              <div className="featured-role">Chief Operations Officer, GlobalTech Industries</div>
              
              <div className="featured-metrics">
                <div className="metric-item">
                  <h4>40%</h4>
                  <p>Increase in efficiency</p>
                </div>
                <div className="metric-item">
                  <h4>$2.5M</h4>
                  <p>Saved annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES GRID */}
      <section className="stories-grid-section">
        <div className="container">
          <h2>More Success Stories</h2>
          <div className="stories-grid">
            
            <div className="story-card">
              <div className="story-company">Acme Logistics</div>
              <p className="quote">"With their predictive supply chain modules, we eliminated 90% of our stockouts and reduced transit times across all major routes."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

            <div className="story-card">
              <div className="story-company">Starlight Health</div>
              <p className="quote">"Patient flow management used to be our biggest bottleneck. Now, the system automatically triages and allocates beds with zero human error."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

            <div className="story-card">
              <div className="story-company">Pinnacle Manufacturing</div>
              <p className="quote">"By deploying their IoT anomaly detection on our assembly lines, we caught three catastrophic failures before they happened. ROI was achieved in month one."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

            <div className="story-card">
              <div className="story-company">Nexus Financial</div>
              <p className="quote">"Auditing used to take our team three weeks every quarter. With automated compliance reporting, we close the books in just three days."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

            <div className="story-card">
              <div className="story-company">Horizon Retail</div>
              <p className="quote">"The Customer Intelligence suite helped us identify shifting buying patterns instantly. Our seasonal campaigns have never been more targeted or successful."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

            <div className="story-card">
              <div className="story-company">ConstructCore</div>
              <p className="quote">"Managing multi-site projects is chaotic. Having a single dashboard that tracks materials, labor, and budget variances in real-time is a game changer."</p>
              <Link to="#" className="read-more">Read the case study <span>→</span></Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
