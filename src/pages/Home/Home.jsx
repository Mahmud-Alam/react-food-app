import Layout from "../../components/Layouts/Layout"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import "../../styles/HomeStyle.css"
import MenuSection from "./MenuSection"

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
    </Layout>
  )
}

export default Home