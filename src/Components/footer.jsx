import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-brand">
          <p className="brand-top">HOMEMADE CAKE</p>
          <div className="brand-logo">BAKERY</div>
          <p className="brand-bottom">SINCE 2018</p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Bakery Menu</a></li>
              <li><a href="#contact">Visit Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Allergens</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Have Your Say</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Get In Touch</h3>
            <ul className="contact-list">
              <li>📍 14 E 12th St, New York, NY 10007, United States</li>
              <li>✉ hi@bakery.com</li>
              <li>📞 +1 (234) 567-8910</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Subscribe</h3>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter a valid email address"
              />
              <button type="button">SEND A MESSAGE</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Images from <span>Freepik</span>
          </p>

          <div className="footer-socials">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;