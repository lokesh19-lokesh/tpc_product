import './OurBlogs.css';

export function OurBlogs() {
  const newsItems = [
    { text: "PatternsOS transforms manufacturing with machine-level telemetry, predictive maintenance, and intelligent production planning.", link: "/patterns-os" },
    { text: "MintLeafAI brings intelligence to healthcare, streamlining patient flow, documentation, and revenue cycle management.", link: "/mint-leaf-ai" },
    { text: "YesTick redefines conversational CRM, bringing pipeline management and customer support directly into WhatsApp.", link: "/yestick" },
    { text: "PickMySchoolAI provides an end-to-end intelligence layer for modern education, from initial enquiry to learning outcomes.", link: "/pick-my-school" }
  ];

  const blogPosts = [
    { title: "PatternsOS", image: "/patternsos_blog.png", link: "/patterns-os" },
    { title: "MintLeafAI", image: "/mintleafai_blog.png", link: "/mint-leaf-ai" },
    { title: "YesTick", image: "/yestick_blog.png", link: "/yestick" },
    { title: "PickMySchoolAI", image: "/pickmyschoolai_blog.png", link: "/pick-my-school" }
  ];

  return (
    <section className="our-blogs-section">
      <div className="blogs-container">
        <div className="blogs-header">
          <h2 className="blogs-title">OUR BLOGS</h2>
          <div className="blogs-title-underline"></div>
        </div>
        
        <div className="blogs-content">
          {/* Left Column: In the news */}
          <div className="news-column">
            <h3 className="news-title">In the news</h3>
            <div className="news-list">
              {newsItems.map((item, index) => (
                <a href={item.link} key={index} className="news-item">
                  <p className="news-text">{item.text}</p>
                  <span className="news-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Blog Grid */}
          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <a href={post.link} key={index} className="blog-card" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="blog-overlay"></div>
                <h4 className="blog-card-title">{post.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
