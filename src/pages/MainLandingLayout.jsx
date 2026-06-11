import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Bread from "../components/bread";
import About from "../components/about";
import Promo from "../components/promo";
import FreshBread from "../components/freshBread";
import Pastries from "../components/pastries";
import Testimonials from "../components/testimonials";
import Categories from "../components/categories";
import Footer from "../components/footer";

function MainLandingLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Bread />
      <About />
      <Promo />
      <FreshBread />
      <Pastries />
      <Testimonials />
      <Categories />
      <Footer />
    </>
  );
}

export default MainLandingLayout;