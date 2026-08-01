import { useEffect } from 'react';

export function EnterpriseSolutions() {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-product-color', 'var(--accent-orange)');
  }, []);

  return (
    <main style={{ padding: '8rem 2rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Enterprise Solutions</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>This page is currently under construction.</p>
    </main>
  );
}
