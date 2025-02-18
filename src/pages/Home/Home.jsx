import Layout from "../../components/Layouts/Layout"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import "../../styles/HomeStyle.css"

function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
    </Layout>
  )
}

export default Home