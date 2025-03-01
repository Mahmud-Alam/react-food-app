import { useRef } from "react";
import Layout from "/src/components/layouts/Layout";
import HeroSection from "/src/components/home/HeroSection";
import AboutSection from "/src/components/home/AboutSection";
import MenuSection from "/src/components/home/MenuSection";
import PromotionSection from "/src/components/home/PromotionSection";
import ShopSection from "/src/components/home/ShopSection";
import BrandSection from "/src/components/home/BrandSection";
import ReviewSection from "/src/components/home/ReviewSection";
import ContactSection from "/src/components/home/ContactSection";
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
