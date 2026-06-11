import "./styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">FRESH BREAD & BAKED GOODS</p>

          <h1 className="hero-title">Baked fresh daily</h1>

          <div className="hero-info">
            <p>📍 KAKINADA, Andhra Pradesh</p>
            <p>📞 9581563911</p>
          </div>

          <div className="hero-hours">
            <p><strong>Monday - Wednesday:</strong> 9am - 10pm</p>
            <p><strong>Thursday - Saturday:</strong> 9am - 8pm</p>
            <p><strong>Sunday:</strong> 9am - 6pm</p>
          </div>

          <button className="hero-btn">VIEW PRODUCTS</button>

          {/* <p className="hero-credit">
            Image from <span>Freepik</span>
          </p> */}
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-shape">
            <img
              src="https://plus.unsplash.com/premium_photo-1665669263531-cdcbe18e7fe4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFrZXJ5fGVufDB8fDB8fHww"
              alt="Fresh bakery bread"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;