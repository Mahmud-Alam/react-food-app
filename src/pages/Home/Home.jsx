import Layout from "../../components/Layouts/Layout"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import MenuSection from "./MenuSection"
import PromotionSection from "./PromotionSection"
import ShopSection from "./ShopSection"
import "../../styles/HomeStyle.css"
import BrandSection from "./BrandSection"

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <PromotionSection/>
      <ShopSection/>
      <BrandSection/>
    </Layout>
  )
}

export default Home