import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Categories from "../components/categories";
import "./bakeryTeam.css";

function BakeryTeam() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const topCards = [
    {
      number: "01",
      title: "What we do",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      number: "02",
      title: "Professionals",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      number: "03",
      title: "Delicious Breads",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      number: "04",
      title: "Our History",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const teamMembers = [
    {
      name: "Sanjay",
      role: "Head Baker",
      image:
        "https://c8.alamy.com/comp/PDD2W6/pictured-jimmy-mccruden-head-baker-news-release-march-2018-meet-edinburghs-top-hot-cro-PDD2W6.jpg",
    },
    {
      name: "Renny",
      role: "Pastry Chef",
      image:
        "https://thumbs.dreamstime.com/b/woman-pastry-chef-preparing-desert-pastries-restaurant-65338238.jpg",
    },
    {
      name: "Meera",
      role: "Cake Specialist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyiUfeGdQWOjgwcNMINySheKEm1RRqmy2wA&s",
    },
    {
      name: "Reena",
      role: "Bread Expert",
      image:
        "https://img.freepik.com/free-photo/woman-examines-fresh-homemade-bread-kitchen-bread-aroma_169016-71018.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bakery-team-page">
        <section className="team-topcards-section">
          <div className="container team-topcards-grid">
            {topCards.map((card, index) => (
              <div
                className="team-topcard reveal-card"
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <span className="team-topcard-number">{card.number}</span>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-hero">
          <div className="container team-hero-container">
            <p className="team-label">OUR TEAM</p>
            <h1>Meet the Team Behind Our Bakery</h1>
            <p className="team-intro">
              Our bakery is powered by a passionate team of skilled bakers and pastry chefs who take pride in creating fresh, high-quality products every day. From handcrafted breads to beautifully decorated cakes and delightful pastries, each item is prepared with dedication, creativity, and attention to detail. Their commitment to excellence ensures that every customer enjoys a memorable and delicious experience.
            </p>
          </div>
        </section>

        <section className="team-grid-section">
          <div className="container team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-story-section">
          <div className="container team-story-container">
            <div className="team-story-image">
              <img
                src="https://www.pexels.com/search/bakery/"
                alt="Bakery staff at work"
              />
            </div>

            <div className="team-story-content">
              <p className="team-label">BAKERY TEAM</p>
              <h2>Baking Excellence with Passion and Care Every Day</h2>
              <p>
                Our dedicated bakery team begins each day with a commitment to creating fresh and delicious baked goods. Working together with skill and enthusiasm, they carefully prepare a variety of breads, cakes, and pastries to ensure customers receive the best quality products.
              </p>
              <p>
                Every step of the baking process is handled with attention and precision, from selecting ingredients to the final presentation. By combining traditional techniques with a passion for baking, our team delivers products that are flavorful, consistent, and made fresh every day.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />
        <Categories noOverlap />
      </main>

      <Footer />
    </>
  );
}

export default BakeryTeam;