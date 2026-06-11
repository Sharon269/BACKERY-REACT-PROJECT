import "./styles/bread.css";

function Bread() {
  const breadImages = [
    "https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/Multi-Grain-Seedy-Sandwich-Bread-Edited-5sq.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSvzjaPDIZGNHABw_D0jO_LDIkLvWeEoAYA&s",
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Korb_mit_Br%C3%B6tchen.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXUn3BLxPl6L4ezbMH3yoD2morYnV6SJ4wQ&s",
  ];

  return (
    <section className="bread-section" id="menu">
      <div className="container">
        <div className="bread-header">
          <h2>Our Bread</h2>
          <p>A values-driven bakery</p>
        </div>

        <div className="bread-grid">
          {breadImages.map((image, index) => (
            <div className="bread-card" key={index}>
              <img src={image} alt={`Bread ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bread;