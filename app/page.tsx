import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DonateLinks from "@/components/DonateLinks"
import AboutSnippet from "@/components/AboutSnippet"
import Hero from "@/components/Hero"

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
      </main>


      
      <Footer />
    </div>
  )
}
