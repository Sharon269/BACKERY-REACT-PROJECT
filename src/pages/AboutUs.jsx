import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./aboutUs.css";

function AboutUs() {
  const infoCards = [
    {
      title: "Our Mission",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Our Principles",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Our Values",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Our History",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="aboutus-page">
        <section className="aboutus-hero">
          <div className="container aboutus-hero-container">
            <div className="aboutus-hero-left">
              <p className="aboutus-label">ABOUT US</p>
              <h1>We make homemade breads and cakes</h1>
              <p className="aboutus-text">
                Sample text. Click to select the Text Element. Build a clean
                bakery story page with strong typography, soft neutral colors,
                and spacious content blocks.
              </p>
              <button className="aboutus-btn">LEARN MORE</button>
              <p className="aboutus-credit">
                Image from <span>Freepik</span>
              </p>
            </div>

            <div className="aboutus-hero-right">
              <div className="aboutus-hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=80"
                  alt="Bakery team member"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="aboutus-info">
          <div className="container aboutus-info-grid">
            {infoCards.map((item, index) => (
              <div className="aboutus-info-card" key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="aboutus-story">
          <div className="container aboutus-story-container">
            <div className="aboutus-story-left">
              <p className="aboutus-story-label">TITLE</p>
              <h2>Fresh Ingredients, Great Taste</h2>
              <p>
                We use simple, high-quality ingredients like flour, water, yeast, and salt
                to create fresh bread, rolls, and baked goods every day.
                
                
              </p>
              <p>
                Our products are carefully prepared and baked to ensure great flavor,
                freshness, and quality. From soft rolls to artisan breads, we focus on
                delivering delicious treats that customers can enjoy with every bite.
              </p>
            </div>

            <div className="aboutus-story-right">
              <div className="aboutus-story-image-wrap">
                <img
                  src="https://www.foodie.com/img/gallery/best-bakery-every-state-list/l-intro-1769788908.jpg"
                  alt="Fresh bread products"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;