import { LegalLayout } from './LegalLayout';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 12, 2026">
      <h2>1. Introduction</h2>
      <p>
        At The Patterns Company ("we," "us," or "our"), we are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise AI solutions.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information that you voluntarily provide to us, including but not limited to:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you request a demo or contact sales.</li>
        <li><strong>Account Data:</strong> Credentials and user profile information when you register for our platform.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our platform, including IP addresses, browser types, and access times.</li>
        <li><strong>Customer Data:</strong> Data submitted by our enterprise clients to be processed by our AI models, which is governed by strict enterprise agreements.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect for various business purposes, including:</p>
      <ul>
        <li>To provide, maintain, and improve our AI platform and services.</li>
        <li>To process transactions and send related administrative information.</li>
        <li>To respond to your inquiries and provide customer support.</li>
        <li>To send you promotional materials and newsletters (you can opt-out at any time).</li>
        <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
      </ul>

      <h2>4. Data Sharing and Disclosure</h2>
      <p>
        We do not sell your personal data. We may share your information in the following situations:
      </p>
      <ul>
        <li><strong>With Service Providers:</strong> We may share data with third-party vendors who perform services on our behalf (e.g., cloud hosting, analytics).</li>
        <li><strong>For Legal Reasons:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
        <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
      </ul>

      <h2>5. AI Model Training</h2>
      <p>
        The Patterns Company strictly separates customer data from foundational model training. We do <strong>not</strong> use your proprietary enterprise data to train our foundational models unless explicitly agreed upon in a custom enterprise contract. Your data remains yours.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We implement enterprise-grade security measures designed to protect your personal information. This includes end-to-end encryption, regular security audits, and strict access controls. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h2>7. Your Privacy Rights</h2>
      <p>
        Depending on your location (e.g., GDPR in Europe, CCPA in California), you may have the following rights regarding your personal data:
      </p>
      <ul>
        <li>The right to access, update, or delete the information we have on you.</li>
        <li>The right of rectification (correcting inaccurate data).</li>
        <li>The right to object to or restrict processing.</li>
        <li>The right to data portability.</li>
      </ul>
      <p>To exercise these rights, please contact us at privacy@thepatternscompany.com.</p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
      </p>
    </LegalLayout>
  );
}
