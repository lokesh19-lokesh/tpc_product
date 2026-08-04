import { LegalLayout } from './LegalLayout';
import { Link } from 'react-router-dom';

export function TrustCenter() {
  return (
    <LegalLayout title="Trust Center" lastUpdated="April 20, 2026">
      <h2>Security is our Foundation</h2>
      <p>
        At The Patterns Company, we understand that deploying AI in an enterprise environment requires absolute trust. Our Trust Center outlines the comprehensive security, compliance, and privacy controls we have implemented to protect your most sensitive data.
      </p>
      <p>
        For a more detailed technical breakdown of our infrastructure, please visit our <Link to="/resources/security">Security Architecture</Link> page.
      </p>

      <h2>1. Compliance & Certifications</h2>
      <p>We maintain strict compliance with global security frameworks to ensure your data is handled in accordance with industry best practices:</p>
      <ul>
        <li><strong>SOC 2 Type II:</strong> We undergo annual independent third-party audits to verify the security, availability, and confidentiality of our platform.</li>
        <li><strong>ISO 27001:</strong> Our information security management system is certified to meet international standards.</li>
        <li><strong>GDPR & CCPA Compliant:</strong> We provide robust tools for data residency, subject access requests, and data deletion workflows to help you maintain regulatory compliance.</li>
        <li><strong>HIPAA Readiness:</strong> For our healthcare clients, we offer Business Associate Agreements (BAAs) and ensure all protected health information (PHI) is handled appropriately.</li>
      </ul>

      <h2>2. Data Encryption</h2>
      <p>
        We utilize military-grade encryption to protect your data at every stage of its lifecycle:
      </p>
      <ul>
        <li><strong>Data in Transit:</strong> All communications between you, our APIs, and our web applications are encrypted via TLS 1.3.</li>
        <li><strong>Data at Rest:</strong> All databases, backups, and file storage are encrypted at rest using AES-256 encryption.</li>
        <li><strong>Key Management:</strong> We utilize AWS Key Management Service (KMS) with strict rotation policies and access controls. Enterprise customers have the option to bring their own keys (BYOK).</li>
      </ul>

      <h2>3. AI Model Isolation</h2>
      <p>
        The biggest concern with Enterprise AI is data leakage. We guarantee strict isolation:
      </p>
      <ul>
        <li><strong>Zero Training on Customer Data:</strong> We do not use your proprietary data to train our shared foundational models.</li>
        <li><strong>Tenant Isolation:</strong> Your data, vector embeddings, and fine-tuned models are logically isolated from all other tenants in our cloud architecture.</li>
        <li><strong>Ephemeral Processing:</strong> Prompts and completions are processed in memory and are not logged or stored unless explicitly configured by your organization's retention policies.</li>
      </ul>

      <h2>4. Platform Reliability</h2>
      <p>
        We guarantee a 99.99% uptime SLA for all Enterprise customers. Our infrastructure is deployed across multiple availability zones with automated failover and continuous health monitoring. 
      </p>
      <p>
        Check our real-time <Link to="/resources/status">System Status</Link> for current operational metrics and past incident reports.
      </p>
      
      <h2>5. Vulnerability Management</h2>
      <p>
        We operate a continuous vulnerability management program, including static code analysis, dependency scanning, and regular third-party penetration testing. We also run a public bug bounty program to incentivize responsible disclosure of security flaws.
      </p>
    </LegalLayout>
  );
}
