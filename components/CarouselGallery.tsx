// components/WavyMarquee.tsx
"use client"

import Image from "next/image"

type Item = { src: string; alt?: string }

const baseItems: Item[] = [
  { src: "/logos/1.jpg", alt: "صورة 1" },
  { src: "/logos/2.jpg", alt: "صورة 2" },
  { src: "/logos/3.jpg", alt: "صورة 3" },
  { src: "/logos/4.jpg", alt: "صورة 4" },
  { src: "/logos/5.jpg", alt: "صورة 5" },
    { src: "/logos/6.jpg", alt: "صورة 1" },
  { src: "/logos/7.jpg", alt: "صورة 2" },
  { src: "/logos/8.jpg", alt: "صورة 3" },
  { src: "/logos/9.jpg", alt: "صورة 4" },
  { src: "/logos/10.jpg", alt: "صورة 5" },
]

const tilt = ["-rotate-6", "-rotate-3", "rotate-0", "rotate-2", "rotate-3"]
const wave = ["translate-y-2", "-translate-y-1", "translate-y-0", "translate-y-1", "-translate-y-2"]

export default function WavyMarquee({
  items = baseItems,
  durationSec = 35,               // غيّر السرعة كما تحب
  cardWidth = { sm: 230, md: 280, lg: 340 }, // عرض البطاقة px
  cardHeight = { sm: 260, md: 320, lg: 380 },// ارتفاع البطاقة px
}: {
  items?: Item[]
  durationSec?: number
  cardWidth?: { sm: number; md: number; lg: number }
  cardHeight?: { sm: number; md: number; lg: number }
}) {
  // مسار واحد بداخله نسختان من العناصر (A ثم A) → التحريك -50% = بدون فجوة
  const doubled = [...items, ...items]

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      {/* تدرّج يغطي الحواف (اختياري) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-16 z-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-16 z-20 bg-gradient-to-l from-background to-transparent" />

      {/* حاوية الرؤية مع padding لظهور peek يمين/يسار */}
      <div className="overflow-hidden px-6 md:px-10">
        {/* المسار: نسخة A + نسخة A ثانية، يتحرك هو نفسه */}
        <div
          className="flex gap-4 md:gap-6 will-change-transform animate-marquee"
          style={{ ["--dur" as any]: `${durationSec}s` }}
        >
          {doubled.map((it, i) => (
            <div
              key={i}
              className={[
                "relative shrink-0",
                "rounded-[26px] overflow-hidden shadow-xl ring-1 ring-black/5 bg-background",
                "transition-transform duration-300 hover:scale-[1.03]",
                tilt[i % tilt.length],
                wave[i % wave.length],
              ].join(" ")}
              style={{
                width: `clamp(${cardWidth.sm}px, 20vw, ${cardWidth.lg}px)`,
                height: `clamp(${cardHeight.sm}px, 28vw, ${cardHeight.lg}px)`,
              }}
            >
              <Image
                src={it.src}
                alt={it.alt ?? `image-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 360px"
                unoptimized
                onError={(e) => {
                  (e.target as HTMLImageElement).setAttribute("src", "/placeholder.svg")
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* أنماط الحركة */}
      <style jsx global>{`
        @keyframes marquee {
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee var(--dur, 25s) linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused; /* اختياري */
        }
      `}</style>
    </div>
  )
}
