import "./styles/testimonials.css";

function Testimonials() {
  const testimonialData = [
    { name: "ISSAC" },
    { name: "NISSY" },
    { name: "JESSIKA" },
    { name: "HANNA" },
    { name: "WILLIAM" },
    { name: "MARTIN" },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-heading">Testimonials</h2>

        <div className="testimonials-grid">
          {testimonialData.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-mark">“”</div>

              <p>
                Sample text. Click to select the text box. Click again or
                double click to start editing the text.
              </p>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;