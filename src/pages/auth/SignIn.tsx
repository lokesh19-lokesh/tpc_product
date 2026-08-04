import { SEO } from '../../components/seo/SEO';
export function SignIn() {
  return (
    <main style={{ padding: '8rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <SEO 
        title="Sign In" 
        description="Learn more about Sign In at The Patterns Company. We provide enterprise solutions for auth." 
        keywords="Sign In, The Patterns Company, AI, enterprise solutions, auth"
        path="/auth/sign-in" 
      />
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>SignIn</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>This page is currently under construction.</p>
    </main>
  );
}
