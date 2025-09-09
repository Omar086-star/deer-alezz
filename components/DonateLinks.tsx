// components/DonateLinks.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type DonationLink = {
  name: string
  url: string
  color: string
  logo: string        // مسار الشعار داخل public/
  logoBg?: string     // خلفية اختيارية للشعار
}

const donationLinks: DonationLink[] = [
  {
    name: "فريق ملهم",
    url: "https://molhamteam.com/campaigns/774",
    color: "bg-accent hover:bg-accent/90 textDeer",
    logo: "/logos/mul.png",
    logoBg: "bg-white/90",
  },
  {
    name: "انصر",
    url: "deiralezz.onsur.org", // ← أضفت https://
    color: "bg-accent hover:bg-accent/90 textDeer",
    logo: "/logos/ons.png",
    logoBg: "bg-white/90",
  },
  {
    name: " مؤسسة الأصول   ",
    url: "https://wa.me/963969457695 ",
    color: "bg-accent hover:bg-accent/90 textDeer",
    logo: "/logos/as.png",
    logoBg: "bg-white/90",
  },


    {
    name: " شام كاش     ",
    url: "/ShamCash",
    color: "bg-accent hover:bg-accent/90 textDeer",
    logo: "/logos/ShamCash-01.png",
    logoBg: "bg-white/90",
  },
]

export default function DonateLinks() {
  return (
    <div className="grid py-20 bgeE grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {donationLinks.map((link, index) => (
        <Button
          key={index}
          asChild
          className={`${link.color} h-44 md:h-52 text-lg bgeborder font-semibold rounded-2xl shadow-sm transition-all`}
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`التبرع عبر ${link.name}`}
            className="flex flex-col items-center justify-center w-full h-full text-center gap-3"
          >
            {/* السطر الأول: النص + رمز الخروج */}
            <span className="inline-flex items-center justify-center gap-2">
              <span className="whitespace-nowrap">التبرع عبر {link.name}</span>
              <ExternalLink className="w-5 h-5 opacity-80" />
            </span>

            {/* السطر الثاني: الشعار كبير على امتداد الزر */}
            <div
              className={`relative w-full h-24 md:h-28 rounded-xl ring-1 ring-black/5 px-3 ${link.logoBg ?? ""}`}
            >
              <Image
                src={link.logo}
                alt={`شعار ${link.name}`}
                fill
                className="object-contain bgeborder"
                sizes="(max-width: 768px) 80vw, 320px"
                priority={false}
              />
            </div>
          </a>
        </Button>
      ))}
    </div>
  )
}
