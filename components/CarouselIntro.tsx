// components/CarouselIntro.tsx
"use client"

import useEmblaCarousel from "embla-carousel-react"

const IMAGES = [
  "/camping/1.jpg",
  "/camping/2.jpg",
  "/camping/3.jpg",
  "/camping/4.jpg",
  "/camping/5.jpg",
  "/camping/6.jpg",
  "/camping/7.jpg",
  "/camping/8.jpg",
  "/camping/9.jpg",
  "/camping/10.jpg",
]

export default function CarouselIntro() {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    slidesToScroll: 1,
    // لا نستخدم direction هنا لأن 8.1.6 قد لا يدعمها — سنضبط LTR على الـviewport
  })

  const prev = () => embla?.scrollPrev()
  const next = () => embla?.scrollNext()

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* أسهم التنقل */}
      <button
        type="button"
        aria-label="السابق"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center backdrop-blur"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="التالي"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center backdrop-blur"
      >
        ›
      </button>

      {/* مهم: إجبار الاتجاه LTR حتى مع صفحة RTL */}
      <div ref={viewportRef} dir="ltr" className="overflow-hidden rounded-2xl">
        {/* المسار */}
        <div className="flex">
          {IMAGES.map((src, i) => (
            // شريحة = عرض كامل
            <div key={i} className="basis-full shrink-0 grow-0">
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[1260px]">
                <img
                  src={src}
                  alt={`slide-${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
