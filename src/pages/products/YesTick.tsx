import { useEffect } from 'react';
import { Send, Users, MessageSquare, Bot, Share2, BarChart, Zap, Bell, Shield, Check, Crown } from 'lucide-react';
import './YesTick.css';

export function YesTick() {
  useEffect(() => {
    // Set the navbar product color to green
    document.documentElement.style.setProperty('--active-product-color', '#22c55e');
    // Ensure body background is dark for this page
    document.body.style.backgroundColor = '#0f1115';
    
    return () => {
      // Clean up on unmount
      document.body.style.backgroundColor = '';
    };
  }, []);

  const features = [
    {
      title: 'Bulk Messaging',
      description: 'Send thousands of personalized WhatsApp messages with template support, scheduling, and real-time queue delivery.',
      icon: <Send />,
      color: '#22c55e' // Green
    },
    {
      title: 'Contact Management',
      description: 'Import, segment, and manage contacts with tags, opt-in tracking, CSV uploads, and smart deduplication.',
      icon: <Users />,
      color: '#3b82f6' // Blue
    },
    {
      title: 'Template Builder',
      description: 'Create and submit WhatsApp message templates with the Meta approval workflow integrated directly.',
      icon: <MessageSquare />,
      color: '#a855f7' // Purple
    },
    {
      title: 'AI Auto Replies',
      description: 'Set smart keyword-based auto-replies and chatbot flows that engage customers 24/7 without manual effort.',
      icon: <Bot />,
      color: '#f97316' // Orange
    },
    {
      title: 'Visual Workflows',
      description: 'Drag-and-drop automation builder. Trigger sequences, delays, and branching logic based on user behavior.',
      icon: <Share2 />,
      color: '#ec4899' // Pink
    },
    {
      title: 'Real-time Analytics',
      description: 'Track delivery, read rates, conversion, and campaign ROI with beautiful, live dashboards.',
      icon: <BarChart />,
      color: '#eab308' // Yellow
    },
    {
      title: 'Instant Campaigns',
      description: 'Launch campaigns immediately or schedule for perfect timing. Built with a robust queue-based delivery engine.',
      icon: <Zap />,
      color: '#22c55e' // Green
    },
    {
      title: 'Live Inbox',
      description: 'Two-way messaging inbox for your team to handle incoming replies, support queries, and conversations in real time.',
      icon: <Bell />,
      color: '#3b82f6' // Blue
    },
    {
      title: 'Enterprise Security',
      description: 'End-to-end encryption, role-based access control, and GDPR-compliant data handling for peace of mind.',
      icon: <Shield />,
      color: '#6b7280' // Grey
    }
  ];

  return (
    <div className="yestick-page">
      {/* Hero Section */}
      <section className="yestick-hero">
        <div className="floating-icons">
          <Send className="float-icon icon-1" />
          <MessageSquare className="float-icon icon-2" />
          <Bot className="float-icon icon-3" />
          <Zap className="float-icon icon-4" />
          <Bell className="float-icon icon-5" />
          <Users className="float-icon icon-6" />
        </div>
        
        <div className="container relative z-10">
          <div className="product-badge">
            <span className="dot"></span>
            YesTick AI
          </div>
          <h1>
            Everything You Need to<br />
            <span>Rule WhatsApp Marketing</span>
          </h1>
          <p>
            Built for businesses of all sizes — from solo entrepreneurs to enterprise teams sending millions of messages every month.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="https://yestickai.com/" target="_blank" rel="noopener noreferrer" className="btn-yestick-large">
              Visit YesTick ↗
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="yestick-features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card dark-card">
                <div 
                  className="feature-icon-wrapper" 
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="yestick-pricing">
        <div className="container">
          <div className="pricing-header">
            <h2>
              Simple Plans,<br />
              <span>Extraordinary Results</span>
            </h2>
            <p>No hidden fees. No contracts. Cancel anytime.</p>
          </div>

          <div className="pricing-grid">
            {/* Free Plan */}
            <div className="pricing-card dark-card">
              <div className="pricing-icon" style={{ backgroundColor: '#374151', color: '#d1d5db' }}>
                <Zap />
              </div>
              <div className="pricing-title-group">
                <h3>Free Trial</h3>
                <p>Explore basic features</p>
              </div>
              <div className="price">Free</div>
              <a href="https://yestickai.com/" target="_blank" rel="noopener noreferrer" className="btn-yestick-secondary">
                Start Free Trial
              </a>
              <ul className="pricing-features">
                <li><Check className="check-icon" /> 10 Contacts</li>
                <li><Check className="check-icon" /> Connect WhatsApp Business</li>
                <li><Check className="check-icon" /> Basic Messaging</li>
              </ul>
            </div>

            {/* Paid Plan */}
            <div className="pricing-card dark-card highlighted">
              <div className="most-popular">MOST POPULAR</div>
              <div className="pricing-icon" style={{ backgroundColor: '#1e3a8a', color: '#60a5fa' }}>
                <Crown />
              </div>
              <div className="pricing-title-group">
                <h3>Paid Plan</h3>
                <p>Unlock full potential</p>
              </div>
              <div className="price">
                ₹30,000<span>/year</span>
              </div>
              <a href="https://yestickai.com/" target="_blank" rel="noopener noreferrer" className="btn-yestick">
                Upgrade Now
              </a>
              <ul className="pricing-features">
                <li><Check className="check-icon" /> Send bulk WhatsApp campaigns</li>
                <li><Check className="check-icon" /> Manage chats & set up simple greeting / OOO automations</li>
                <li><Check className="check-icon" /> Unlimited Messages (Based on your WhatsApp Number)</li>
                <li><Check className="check-icon" /> Unlimited Contacts</li>
                <li><Check className="check-icon" /> Auto Replies</li>
                <li><Check className="check-icon" /> Auto Work flows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="yestick-cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-subtitle">GET STARTED TODAY</span>
            <h2>Ready to 10x Your <span>WhatsApp Outreach?</span></h2>
            <p>Join 50,000+ businesses already using Yestick AI to drive sales and engagement.</p>
            <a href="https://yestickai.com/" target="_blank" rel="noopener noreferrer" className="btn-yestick-large">
              Start Free — No Card Needed ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
