import Layout from "../../components/Layouts/Layout"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import "../../styles/HomeStyle.css"
import MenuSection from "./MenuSection"
import PromotionSection from "./PromotionSection"

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <PromotionSection/>
    </Layout>
  )
}

export default Home