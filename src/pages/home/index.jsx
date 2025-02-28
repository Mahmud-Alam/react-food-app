import { useRef } from "react";
import Layout from "../../components/layouts/Layout";
import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import MenuSection from "../../components/home/MenuSection";
import PromotionSection from "../../components/home/PromotionSection";
import ShopSection from "../../components/home/ShopSection";
import BrandSection from "../../components/home/BrandSection";
import ReviewSection from "../../components/home/ReviewSection";
import ContactSection from "../../components/home/ContactSection";
import "../../styles/HomeStyle.css";

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
