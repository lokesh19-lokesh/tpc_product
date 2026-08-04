import { SEO } from '../../components/seo/SEO';
import { LegalLayout } from './LegalLayout';

export function Accessibility() {
  return (
    <LegalLayout title="Accessibility Statement" lastUpdated="May 10, 2026">
      <SEO 
        title="Accessibility" 
        description="Read the Accessibility for The Patterns Company. We are committed to transparency, privacy, and compliance." 
        keywords="Accessibility, The Patterns Company, AI, enterprise solutions, legal"
        path="/legal/accessibility" 
      />
      <h2>Our Commitment to Accessibility</h2>
      <p>
        The Patterns Company is committed to making our website's content accessible and user-friendly to everyone. We believe that technology, particularly AI, should empower all individuals regardless of their physical or cognitive abilities.
      </p>

      <h2>1. Conformance Status</h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
      </p>
      <p>
        The Patterns Company website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to increase the accessibility and usability of our website and applications.
      </p>

      <h2>2. Accessibility Features</h2>
      <p>We are continuously implementing features to improve the accessibility of our platform, including:</p>
      <ul>
        <li><strong>Keyboard Navigation:</strong> Ensuring all interactive elements are accessible via keyboard functionality.</li>
        <li><strong>Screen Reader Compatibility:</strong> Implementing ARIA attributes and semantic HTML to ensure compatibility with modern screen readers.</li>
        <li><strong>Color Contrast:</strong> Designing UI components with sufficient color contrast ratios to assist users with visual impairments.</li>
        <li><strong>Text Resizing:</strong> Allowing the site to be fully functional even when zoomed up to 200%.</li>
        <li><strong>Alternative Text:</strong> Providing descriptive alternative text for all meaningful images.</li>
      </ul>

      <h2>3. Ongoing Efforts</h2>
      <p>
        Accessibility is an ongoing effort. We regularly conduct internal audits using automated tools and manual testing to identify and resolve accessibility barriers. We are currently focusing our efforts on improving the accessibility of our complex data visualization dashboards within the core application.
      </p>

      <h2>4. Feedback and Contact</h2>
      <p>
        If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please call our Customer Service team at +91-9392557785 or email our team at <a href="mailto:info@thepatternscompany.com">info@thepatternscompany.com</a> with “Disabled Access” in the subject line.
      </p>
      <p>
        Please provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies.
      </p>
    </LegalLayout>
  );
}
