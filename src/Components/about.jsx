import "./styles/about.css";

function About() {
  const aboutItems = [
    "Our People",
    "Our Values",
    "Our History",
    "Our Culture",
  ];

  return (
    <section className="about-section" id="gallery">
      <div className="container about-container">
        <div className="about-content">
          <h2>About Bakery</h2>

          <p className="about-text">
            We work hard every day to provide fresh and high-quality products for our customers. Our team focuses on making everything with care and attention to detail. We aim to create a friendly experience and ensure every customer leaves satisfied.
          </p>

          <div className="about-grid">
            {aboutItems.map((item, index) => (
              <div className="about-item" key={index}>
                <h3>{item}</h3>
                <div className="about-line"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image-wrapper">
          <div className="about-image-shape">
            <img
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
              alt="Baker preparing bread"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;