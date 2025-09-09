import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CarouselIntro from "@/components/CarouselIntro"
import DonateLinks from "@/components/DonateLinks"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "الحملة - تفاصيل مشروع إعادة إعمار دير الزور",
  description:
    "تعرف على تفاصيل حملة دير العز ومجالات العمل السبعة لإعادة إعمار دير الزور: البنية التحتية، الأمن، الإسكان، الصحة، التعليم، الأمن الغذائي والخدمات المجتمعية",
  keywords: ["حملة دير العز", "إعادة الإعمار", "دير الزور", "البنية التحتية", "الإسكان", "التعليم", "الصحة"],
  openGraph: {
    title: "الحملة - تفاصيل مشروع إعادة إعمار دير الزور",
    description: "تعرف على تفاصيل حملة دير العز ومجالات العمل السبعة لإعادة إعمار دير الزور",
    images: ["/images/deir-al-izz-banner.jpg"],
  },
}

export default function CampaignPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">حملة دير العز للإعمار</h1>
            <p className="text-xl text-primary font-semibold mb-8 text-balance">مشروع شامل لإعادة بناء دير الزور</p>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">مجالات العمل</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                تشمل حملة دير العز سبعة مجالات رئيسية لإعادة إعمار المدينة وتوفير الخدمات الأساسية للمجتمع
              </p>
            </div>
            <CarouselIntro />
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">تفاصيل الحملة</h2>

              <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                <p className="text-lg mb-6">
                  تأتي حملة دير العز كاستجابة شاملة لحاجة المجتمع في دير الزور لإعادة بناء حياتهم وتطوير مدينتهم. نهدف
                  من خلال هذه الحملة إلى جمع 25 مليون دولار لتنفيذ مشاريع حيوية تغطي جميع جوانب الحياة الأساسية.
                </p>

                <p className="text-lg mb-6">
                  تركز الحملة على سبعة مجالات رئيسية: البنية التحتية التي تشمل إعادة بناء الطرق والجسور وشبكات المياه
                  والكهرباء، والأمن والسلامة من خلال تركيب أنظمة المراقبة المتطورة، والإسكان عبر بناء وترميم 100 منزل
                  للعائلات المتضررة.
                </p>

                <p className="text-lg mb-6">
                  كما تشمل الخدمات الصحية بتجهيز المراكز الطبية بأحدث المعدات بما في ذلك أجهزة الرنين المغناطيسي،
                  والتعليم من خلال إعادة بناء 5 مدارس، والأمن الغذائي عبر إنشاء أفران لإنتاج الخبز وضمان توفير الغذاء
                  الأساسي.
                </p>

                <p className="text-lg mb-8">
                  نؤمن أن إعادة الإعمار ليست مجرد بناء مباني، بل إعادة بناء الأمل والكرامة والمستقبل لآلاف العائلات.
                  مساهمتكم ستكون جزءاً من قصة نجاح حقيقية في إعادة الحياة لهذه المدينة العريقة.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">ساهم في إعادة بناء دير الزور</h3>
                <DonateLinks />

                <div className="mt-8">
                  <Button variant="outline" size="lg" asChild>
                    <a href="/gallery">شاهد صور الحملة</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
