import { useEffect } from 'react';
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
