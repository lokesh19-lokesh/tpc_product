const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'company', 'Company.css');
const dir = path.join(__dirname, 'src', 'pages', 'company');

const cssContent = `
.company-page {
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
  background-color: #ffffff;
}

.company-hero {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 8rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #cbd5e1;
}

.company-hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #0f172a;
  letter-spacing: -0.03em;
}

.company-hero p {
  font-size: 1.25rem;
  color: #475569;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.company-section {
  padding: 6rem 0;
}

.company-section-alt {
  padding: 6rem 0;
  background-color: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.15rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
}

/* About Layouts */
.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #0f172a;
}

.about-text p {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  text-align: center;
  transition: transform 0.2s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-icon {
  width: 4rem;
  height: 4rem;
  background: #f0f9ff;
  color: #0284c7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.value-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0f172a;
}

.value-card p {
  color: #64748b;
  line-height: 1.5;
}

/* Careers Layouts */
.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}

.job-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
  text-decoration: none;
}

.job-card:hover {
  border-color: #0ea5e9;
  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.1);
}

.job-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.job-meta {
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.95rem;
}

.job-meta span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.job-apply {
  color: #0ea5e9;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Newsroom Layouts */
.news-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: #0f172a;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: 4rem;
}

.news-featured-img {
  background: url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80') center/cover;
  min-height: 400px;
}

.news-featured-content {
  padding: 4rem 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-tag {
  background: #38bdf8;
  color: #0f172a;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 9999px;
  align-self: flex-start;
  margin-bottom: 1.5rem;
}

.news-featured-content h2 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.news-featured-content p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.news-card {
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.2s;
  background: white;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.news-img {
  height: 200px;
  background-color: #e2e8f0;
  background-size: cover;
  background-position: center;
}

.news-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.news-date {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.5rem;
}

.news-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.news-read-more {
  margin-top: auto;
  color: #0ea5e9;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .about-grid, .news-featured {
    grid-template-columns: 1fr;
  }
  .news-featured-img {
    min-height: 250px;
  }
  .values-grid, .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .company-hero h1 { font-size: 2.5rem; }
  .values-grid, .news-grid {
    grid-template-columns: 1fr;
  }
  .job-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
}
`;

fs.writeFileSync(cssPath, cssContent);
console.log('Created Company.css');

const aboutTsx = `import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#10b981');
  }, []);

  return (
    <main className="company-page">
      <section className="company-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>We are a global team of engineers, designers, and strategists obsessed with building the future of enterprise software.</p>
        </div>
      </section>

      <section className="company-section">
        <div className="container about-grid">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>At The Patterns Company, our mission is to demystify complex technology and turn it into actionable, scalable, and intuitive platforms for enterprises worldwide.</p>
            <p>Founded on the belief that digital transformation shouldn't be a painful, decade-long process, we bring agility, deep technical expertise, and a human-centered design approach to every engagement.</p>
            <Link to="/company/leadership" className="inline-block mt-4 text-primary font-bold">Meet our Leadership &rarr;</Link>
          </div>
          <div className="about-image">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="company-section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide how we build, how we collaborate, and how we treat our clients.</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4>Radical Agility</h4>
              <p>We move fast, iterate quickly, and adapt to changing requirements without missing a beat.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4>Uncompromising Quality</h4>
              <p>We believe in doing things right the first time. Clean code, robust architecture, and flawless design.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Human-Centered</h4>
              <p>Software is built for people. We prioritize accessibility, empathy, and intuitive user experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
fs.writeFileSync(path.join(dir, 'About.tsx'), aboutTsx);
console.log('Created About.tsx');

const careersTsx = `import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

export function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.setProperty('--active-product-color', '#8b5cf6');
  }, []);

  const jobs = [
    { title: 'Senior Backend Engineer (Go/Node)', loc: 'Remote (US/EU)', type: 'Full-time' },
    { title: 'Principal UI/UX Designer', loc: 'New York, NY / Remote', type: 'Full-time' },
    { title: 'Cloud Solutions Architect', loc: 'London, UK', type: 'Full-time' },
    { title: 'Product Marketing Manager', loc: 'San Francisco, CA', type: 'Full-time' },
    { title: 'Data Scientist (GenAI)', loc: 'Remote (Global)', type: 'Full-time' }
  ];

  return (
    <main className="company-page">
      <section className="company-hero">
        <div className="container">
          <h1>Build the future with us</h1>
          <p>Join a remote-first, globally distributed team of passionate builders creating the next generation of enterprise software.</p>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>We are always looking for talented individuals to join our growing team.</p>
          </div>
          
          <div className="jobs-grid">
            {jobs.map((job, i) => (
              <Link to="#" key={i} className="job-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.loc}
                    </span>
                    <span>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="job-apply">
                  Apply Now &rarr;
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary mb-4">Don't see a role that fits your profile?</p>
            <a href="mailto:careers@thepatternscompany.com" className="inline-block border-2 border-gray-300 px-6 py-3 rounded-lg font-bold hover:border-primary hover:text-primary transition-colors">
              Drop your resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
`;
fs.writeFileSync(path.join(dir, 'Careers.tsx'), careersTsx);
console.log('Created Careers.tsx');

const newsroomTsx = `import { useEffect } from 'react';
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
                <div className="news-img" style={{ backgroundImage: \`url('\${item.img}')\` }}></div>
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
`;
fs.writeFileSync(path.join(dir, 'Newsroom.tsx'), newsroomTsx);
console.log('Created Newsroom.tsx');
