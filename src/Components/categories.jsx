import "./styles/categories.css";

function Categories() {
  const categoryData = [
    {
      title: "Breads",
      image:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/Multi-Grain-Seedy-Sandwich-Bread-Edited-5sq.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "Cookies",
      image:
        "https://www.simplyrecipes.com/thmb/H3j9svznweYmxrfrfAW34jG280Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Copycat-Subway-Chocolate-Chip-Cookies--8-a40444af559346edb461ff762eb7dabc.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "Pastries",
      image:
        "https://patelbakery.in/wp-content/uploads/2021/06/chocolate-pastry-2-new.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
  ];

  return (
    <section className="categories-section" id="contact">
      <div className="categories-bg-top"></div>
      <div className="categories-bg-bottom"></div>

      <div className="container categories-container">
        <div className="categories-grid">
          {categoryData.map((item, index) => (
            <div className="category-card" key={index}>
              <div className="category-image-wrap">
                <img src={item.image} alt={item.title} className="category-image" />
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="categories-text-row">
          {categoryData.map((item, index) => (
            <div className="category-text-block" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="categories-bottom">
          <div className="newsletter-box">
            <h2>Sign up for the newsletter</h2>
            <p>
              Want to be the first to read our news? Subscribe to the newsletter
              to keep abreast of all events.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter a valid email address"
              />
              <button type="button">SUBMIT</button>
            </form>

            <div className="social-icons">
              <span>f</span>
              <span>🐦</span>
              <span>◎</span>
              <span>in</span>
              <span>p</span>
            </div>
          </div>

          <div className="hours-box">
            <h2>Hours & Location</h2>

            <div className="contact-links">
              <p>14 E 12th St,</p>
              <p>New York, NY 10007</p>
              <p>(123) 456-2253</p>
            </div>

            <div className="working-hours">
              <p>Monday - Sunday</p>
              <p>7:00am - 8:00pm</p>
            </div>

            <p className="hours-credit">
              Image from <span>Freepik</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;