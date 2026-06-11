import "./styles/freshBread.css";

function FreshBread() {
  return (
    <section className="freshbread-section">
      <div className="container freshbread-container">
        <div className="freshbread-image-wrapper">
          <div className="freshbread-image-shape">
            <img
              src="https://assets.architecturaldigest.in/photos/60084fd13829163dc3ab540b/16:9/w_2560%2Cc_limit/Mumbai-bakery-breads-1366x768.jpg"
              alt="Fresh baked breads in basket"
              className="freshbread-image"
            />
          </div>
        </div>

        <div className="freshbread-content">
          <p className="freshbread-subtitle">Fresh baked breads</p>

          <h2>Baked fresh daily by bakers with passion</h2>

          <p className="freshbread-text">
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read.
          </p>

          <ul className="freshbread-list">
            <li>Tasty, fresh bread baked daily</li>
            <li>We bake real, clean-label bread</li>
          </ul>

          <button className="freshbread-btn">VIEW PRODUCTS</button>

          <p className="freshbread-credit">
            Image from <span>Freepik</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FreshBread;