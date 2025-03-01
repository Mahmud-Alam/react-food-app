import { useRef } from "react";
import Layout from "/src/components/layouts/Layout.jsx";
import HeroSection from "/src/components/home/HeroSection.jsx";
import AboutSection from "/src/components/home/AboutSection.jsx";
import MenuSection from "/src/components/home/MenuSection.jsx";
import PromotionSection from "/src/components/home/PromotionSection.jsx";
import ShopSection from "/src/components/home/ShopSection.jsx";
import BrandSection from "/src/components/home/BrandSection.jsx";
import ReviewSection from "/src/components/home/ReviewSection.jsx";
import ContactSection from "/src/components/home/ContactSection.jsx";
import "/src/styles/HomeStyle.css";

function Home() {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const shopRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Layout
      aboutRef={aboutRef}
      menuRef={menuRef}
      shopRef={shopRef}
      contactRef={contactRef}
    >
      <HeroSection />
      <AboutSection ref={aboutRef} />
      <MenuSection ref={menuRef} />
      <PromotionSection />
      <ShopSection ref={shopRef} />
      <BrandSection />
      <ReviewSection />
      <ContactSection ref={contactRef} />
    </Layout>
  );
}

export default Home;
