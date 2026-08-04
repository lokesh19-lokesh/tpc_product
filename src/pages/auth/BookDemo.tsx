import { SEO } from '../../components/seo/SEO';
export function BookDemo() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO 
        title="Book Demo" 
        description="Learn more about Book Demo at The Patterns Company. We provide enterprise solutions for auth." 
        keywords="Book Demo, The Patterns Company, AI, enterprise solutions, auth"
        path="/auth/book-demo" 
      />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>BookDemo</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>This page is currently under construction.</p>
    </main>
  );
}
