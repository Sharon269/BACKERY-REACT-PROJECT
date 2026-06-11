import "./styles/promo.css";

function Promo() {
  return (
    <section className="promo-section">
      <div className="container promo-container">
        <div className="promo-image-box">
          <img
            src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80"
            alt="Baker kneading dough"
            className="promo-image"
          />
        </div>

        <div className="promo-card">
          <h2>
            We've had one goal: to bake the best tasting breads, cakes and
            pastries.
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="promo-credit">
            Image from <span>Freepik</span>
          </p>

          <button className="promo-btn">VIEW PRODUCTS</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;