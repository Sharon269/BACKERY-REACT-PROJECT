import "./styles/features.css";

function Features() {
  const featureData = [
    {
      icon: "🥖",
      title: "Baked Fresh Daily",
      text: "Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft.",
    },
    {
      icon: "🍞",
      title: "Great Value",
      text: "With the most competitive prices on the market we are able to deliver great value without compromising on taste.",
    },
    {
      icon: "🏛️",
      title: "Institutions",
      text: "We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow.",
    },
    {
      icon: "🛵",
      title: "Delivery To Your Door",
      text: "Fresh bakery items delivered quickly to your home with care, quality packaging, and reliable service every day.",
    },
    {
      icon: "📦",
      title: "No Order Too Large",
      text: "Whether it is a family order or a large event, we can prepare and supply baked products in the quantity you need.",
    },
  ];

  return (
    <section className="features-section" id="about">
      <div className="container">
        <h2 className="features-heading">
          We bake fresh, handmade bread, pastries and cakes every day
        </h2>

        <div className="features-grid">
          {featureData.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;