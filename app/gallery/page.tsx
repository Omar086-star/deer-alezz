// app/gallery/page.tsx
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CarouselGallery from "@/components/CarouselGallery"
import DonateLinks from "@/components/DonateLinks"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "معرض الصور -  حملة دير العز",
  description:
    "شاهد صور مشاريع حملة دير العز وإنجازات إعادة الإعمار في دير الزور. صور من الميدان توثق التقدم في البنية التحتية والإسكان والتعليم والصحة",
  keywords: ["معرض الصور", "حملة دير العز", "إنجازات", "مشاريع الإعمار", "دير الزور"],
  openGraph: {
    title: "معرض الصور -  حملة دير العز",
    description: "شاهد صور  حملة دير العز من أجل إعادة الإعمار في دير الزور",
    images: ["./images/deir-al-izz-banner.jpg"], // مسار مطلق داخل public/
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bger">
      <Header />
<Hero/>
      <main className="bger ">
        {/* Hero Section */}
        <section className="bg-gradient-to-b color1   from-card to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl color2 font-bold   text-foreground mb-6 text-balance">
              معرض صور الحملة
            </h1>
            <p className="text-xl   color2 text-primary font-semibold mb-8 text-balance">
              شاهد صور حملة دير العز من أجل  إعادة الإعمار
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16  ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground color1 mb-4">صور من الميدان</h2>
              <p className="text-lg text color1 max-w-2xl mx-auto leading-relaxed">
                مجموعة من الصور التي توثق سياق الحملة  في مختلف المجالات من البنية التحتية إلى التعليم
                والصحة
              </p>
            </div>

            <CarouselGallery />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8"> الحملة بالأرقام</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24</div>
                <div className="text-muted-foreground">  حي مدممر</div>
              </div>
                            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">   مشفى خارج الخدمة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">289</div>
                <div className="text-muted-foreground">    مدرسة غير فعالة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20400</div>
                <div className="text-muted-foreground">    منزل بحاجة للترميم في ريف ديرالزور</div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bger bg-background">
          <div className="container mx-auto bger px-4 text-center">
            <h2 className="text-3xl font-bold color1 mb-6">كن جزءاً من قصة النجاح</h2>
            <p className="text-lg color1 mb-8 max-w-2xl mx-auto">
              مساهمتك ستساعد في إنجاز  عدة مشاريع تهدف لإعادة الأمل لآلاف العائلات في دير الزور
            </p>

            <DonateLinks />

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="/campaign">تعرف على الحملة</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/">العودة للرئيسية</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
