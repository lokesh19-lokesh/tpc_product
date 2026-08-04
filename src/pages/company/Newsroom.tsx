import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

export function Newsroom() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#3b82f6');
  }, []);

  const news = [
    { title: 'The Patterns Company launches YesTick for global enterprises', date: 'August 02, 2026', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'Why we are adopting a remote-first culture permanently', date: 'July 15, 2026', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { title: 'The state of Cloud Native Development in 2026', date: 'June 28, 2026', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <main className="company-page">
      <section className="company-hero">
        <div className="container">
          <h1>Newsroom</h1>
          <p>Press releases, company announcements, and media resources.</p>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          
          <div className="news-featured">
            <div className="news-featured-img"></div>
            <div className="news-featured-content">
              <span className="news-tag">Press Release</span>
              <h2>The Patterns Company secures $45M Series B funding to accelerate AI integration</h2>
              <p>We are thrilled to announce our latest funding round led by top-tier venture capital firms. This capital will allow us to double down on our Generative AI offerings...</p>
              <Link to="#" className="text-sky-400 font-bold hover:text-sky-300">Read full press release &rarr;</Link>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-900">Latest Updates</h3>
          <div className="news-grid">
            {news.map((item, i) => (
              <Link to="#" key={i} className="news-card">
                <div className="news-img" style={{ backgroundImage: `url('${item.img}')` }}></div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <div className="news-read-more">Read article &rarr;</div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
