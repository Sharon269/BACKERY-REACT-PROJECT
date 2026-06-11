import "./styles/pastries.css";

function Pastries() {
  const pastryItems = [
    {
      title: "CROISSANT",
      image:
        "https://victoriajunction.in/wp-content/uploads/2023/08/croissant-chocolate-2.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "BROWNIES",
      image:
        "https://bakewithshivesh.com/wp-content/uploads/2024/08/960E4D82-3A2F-436E-89AA-26F56A856DFE.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "CINNAMON BUN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Qu0vAF4GgA-nFxLQca7gHmrnGNklAhewBA&s",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
    {
      title: "TURKISH BAGELS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZ-XOPinsFMG9k9u5HZL8hWhZn_uXzoTsgA&s",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
     {
      title: "PUFFS",
      image:
        "https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1-1.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
     {
      title: "TURKISH BAGELS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhWiAXS5CCfV34T3IkPHtnLlZge7DgW4V3Q&s",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
     {
      title: "TURKISH BAGELS",
      image:
        "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },
     {
      title: "COOKIES",
      image:
        "https://www.tasteofhome.com/wp-content/uploads/2024/08/Chocolate-Caramel-Cookies_EXPS_TOHcom24_9459_MD_P2_07_24_1b.jpg",
      text: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    },  
  ];

  return (
    <section className="pastries-section">
      <div className="container">
        <h2 className="pastries-heading">Brownies, Pastries, etc</h2>

        <div className="pastries-grid">
          {pastryItems.map((item, index) => (
            <div className="pastry-card" key={index}>
              <div className="pastry-image-wrap">
                <img src={item.image} alt={item.title} className="pastry-image" />
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="/">more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pastries;