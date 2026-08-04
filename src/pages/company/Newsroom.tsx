import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

export function Newsroom() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#3b82f6');
  }, []);

  const news = [
    { title: 'The Patterns Company launches YesTick for global enterprises', date: 'August 02, 2026', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Product Launch' },
    { title: 'Why we are adopting a remote-first culture permanently', date: 'July 15, 2026', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Culture' },
    { title: 'The state of Cloud Native Development in 2026', date: 'June 28, 2026', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', tag: 'Industry Insight' }
  ];

  return (
    <main className="company-page">
      {/* Premium Hero Section */}
      <section className="about-hero">
        <div className="container hero-container">
          <div className="about-hero-content">
            <span className="hero-overline">Media Center</span>
            <h1 className="hero-title">Welcome to the <span className="text-gradient">Newsroom</span></h1>
            <p className="hero-subtitle">
              Press releases, company announcements, industry insights, and media resources for journalists and partners.
            </p>
          </div>
        </div>
        <div className="hero-background-pattern"></div>
      </section>

      {/* Featured News Section */}
      <section className="company-section featured-section">
        <div className="container">
          <div className="news-featured">
            <div className="news-featured-img"></div>
            <div className="news-featured-content">
              <span className="news-tag">Press Release</span>
              <h2>The Patterns Company secures $45M Series B funding to accelerate AI integration</h2>
              <p>We are thrilled to announce our latest funding round led by top-tier venture capital firms. This capital will allow us to double down on our Generative AI offerings and expand our footprint globally.</p>
              <Link to="#" className="news-read-more-link">Read full press release &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="company-section-alt media-kit-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Press Resources</span>
            <h2>Media Kit</h2>
            <p>Download our official brand assets, logos, and executive headshots for your publications.</p>
          </div>
          
          <div className="media-kit-grid">
            <div className="media-card modern-card">
              <div className="media-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h4>Brand Logos</h4>
              <p>High-resolution SVGs and PNGs of our primary logomark and wordmark.</p>
              <button className="btn-download">Download .ZIP</button>
            </div>

            <div className="media-card modern-card">
              <div className="media-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h4>Press Kit</h4>
              <p>Company fact sheet, executive bios, and high-quality photography.</p>
              <button className="btn-download">Download .ZIP</button>
            </div>
            
            <div className="media-card modern-card">
              <div className="media-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4>Brand Guidelines</h4>
              <p>Our official guide to typography, colors, and logo usage.</p>
              <button className="btn-download">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Grid */}
      <section className="company-section updates-section">
        <div className="container">
          <div className="section-header">
            <span className="section-overline">Recent</span>
            <h2>Latest Updates</h2>
          </div>
          <div className="news-grid">
            {news.map((item, i) => (
              <Link to="#" key={i} className="news-card">
                <div className="news-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                <div className="news-content">
                  <span className="news-tag-small">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-read-more">Read article &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
