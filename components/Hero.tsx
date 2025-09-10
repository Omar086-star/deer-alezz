// import { Button } from "@/components/ui/button"
// import DonateLinks from "./DonateLinks"
// import Image from "next/image"
// import { Section } from "lucide-react"

// export default function Hero() {
//   return (
//     <section className="relative min-h-[60vh] bg-cover flex items-center justify-center">
//       {/* Background banner image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/deir-al-izz-banner.jpg"
//           alt="دير الزور - حملة دير العز"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>
// <div className="relative items-end py-ttt">
//         <div className="relative z-10 container mx-auto bg-ttew px-4 text-center text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6 dedes py-10 text-balance drop-shadow-lg">حملة دير العز</h1>
//         <p className="text-xl md:text-3xl font-semibold mb-8    text-accent drop-shadow-md">
//           إعادة الأمل والحياة لدير الزور
//         </p>


 

//         <div className="mt-12">
//           <Button
//             variant="outline"
//             size="lg"
//             asChild
//             className="bg-white/10 border-white/30 text-white hover:bg-white/20"
//           >
//             <a href="/campaign">اقرأ المزيد عن الحملة</a>
//           </Button>
//         </div>
//       </div>
// </div>

//     </section>


//   )
// }



// components/Hero.tsx
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      {/* الخلفية */}
      <Image
        src="/images/deir-al-izz-banner.jpg"
        alt="دير الزور - حملة دير العز"
        fill
        className="object-cover"
        priority
      />

      {/* تدرّج من الأسفل لتحسين قابلية القراءة */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* النص مثبت أسفل الصورة */}
      <div className="absolute inset-x-0 bottom-8 md:bottom-12 z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
              حملة دير العز
            </h1>
            <p className="text-lg md:text-2xl font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
              إعادة الأمل والحياة لدير الزور
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
