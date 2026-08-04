import { SEO } from '../../components/seo/SEO';
export function Leadership() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO 
        title="Leadership" 
        description="Learn more about The Patterns Company: our mission, leadership, and careers. Join us in building the future of AI." 
        keywords="Leadership, The Patterns Company, AI, enterprise solutions, company"
        path="/company/leadership" 
      />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Leadership</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>This page is currently under construction.</p>
    </main>
  );
}
