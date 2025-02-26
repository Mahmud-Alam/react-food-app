import Layout from "../../components/layouts/Layout"
import HeroSection from "../../components/home/HeroSection"
import AboutSection from "../../components/home/AboutSection"
import MenuSection from "../../components/home/MenuSection"
import PromotionSection from "../../components/home/PromotionSection"
import ShopSection from "../../components/home/ShopSection"
import BrandSection from "../../components/home/BrandSection"
import "../../styles/HomeStyle.css"
import ReviewSection from "../../components/home/ReviewSection"

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <PromotionSection/>
      <ShopSection/>
      <BrandSection/>
      <ReviewSection/>
    </Layout>
  )
}

export default Home