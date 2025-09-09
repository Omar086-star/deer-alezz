import { Button } from "@/components/ui/button"
import DonateLinks from "./DonateLinks"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] bg-cover flex items-center justify-center">
      {/* Background banner image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/deir-al-izz-banner.jpg"
          alt="دير الزور - حملة دير العز"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto bg-ttew px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dedes py-10 text-balance drop-shadow-lg">حملة دير العز</h1>
        <p className="text-xl md:text-3xl font-semibold mb-8    text-accent drop-shadow-md">
          إعادة الأمل والحياة لدير الزور
        </p>

        <div className="max-w-3xl  mx-auto mb-12">
          <p className="text-2xl leading-relaxed dede py-20 drop-shadow-md">
حملة أهلية شعبية برعاية محافظة دير الزور وبالتعاون مع وزارة الثقافة السورية، يشرف عليها مجلس أمناء، وتهدف إلى النهوض بالمحافظة (مدينةً وريفاً) بمشاركة أبنائها ومحبيها من الداخل والخارج.
تركّز الحملة على قطاعات حيوية تشمل: البنية التحتية، الصحة، التعليم، الإسكان، المجتمع، والأمن الغذائي، وتسعى لجمع أكثر من 25 مليون دولار لترسيخ ثقافة التطوع والتكافل وتعزيز المسؤولية الجماعية.          </p>
        </div>

 

        {/* <div className="mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <a href="/campaign">اقرأ المزيد عن الحملة</a>
          </Button>
        </div> */}
      </div>
    </section>
  )
}
