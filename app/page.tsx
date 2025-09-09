import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DonateLinks from "@/components/DonateLinks"
import AboutSnippet from "@/components/AboutSnippet"
import Hero from "@/components/Hero"
import ProjectsSwiper from "@/components/ProjectsSwiper"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero/>
 <section className=" bger">
<DonateLinks/>

    </section>

        <AboutSnippet />

              <ProjectsSwiper />

      </main>


      
      <Footer />
    </div>
  )
}
