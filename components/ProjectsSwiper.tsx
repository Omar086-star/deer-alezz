// components/ProjectsSwiper.tsx
"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// أنماط Swiper الافتراضية
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type ProjectStatus = "Active" | "Suspended" | "Non-active"

type ProjectCard = {
  title: string
  href: string
  image: string
  status: ProjectStatus
}

const projects: ProjectCard[] = [
  {
    title: "صيانة وترميم  100 مدرسة في محافظة ديرالزور   ",
    href: "/projetsE",
    image: "/images/sh.png",
    status: "Non-active",
  },
  {
    title:
      "    مشروع تركيب جهاز رنين مغناطيسي وجهاز قثطرة قلبية (MRI) في دير الزور",
    href: "/projetsM",
    image: " /images/irm.png",
    status: "Non-active",
  },
  {
    title: "إنشاء فرن آلي وترميم آخر في محافظة دير الزور  ",
    href: "/projetsB",
    image: "/images/ber.png",
    status: "Non-active",
  },
 
  {
    title: "تعبيد الطرقات الأساسية في محافظة ديرالزور  ",
    href: "/projetsR",
    image: "/images/routs.png",
    status: "Non-active",
  },
  {
    title: "تركيب كاميرات مراقبة في محافظة ديرالزور  ",
    href: "/projetsC",
    image: "/images/cam.png",
    status: "Non-active",
  },
]

const statusStyles: Record<ProjectStatus, string> = {
  Active:
    "inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 text-xs font-semibold px-3 py-1",
  Suspended:
    "inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1",
  "Non-active":
    "inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1",
}

export default function ProjectsSwiper() {
  return (
    <div className="relative">
<div className="flexxxx ">
    <h1 className="  flexxxxy justfy-center">مشاريعنا القادمة </h1>
</div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={25}
        slidesPerView={1.1}
        loop
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: 25 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
        className="!pb-10" // مساحة للنقاط
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
                {/* شارة الحالة + الصورة */}
                <div className="relative xxlx">
                  <div className="absolute left-2 top-2 z-10">
                    <span className={statusStyles[p.status]}>
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          p.status === "Active"
                            ? "bg-green-500"
                            : p.status === "Suspended"
                            ? "bg-gray-400"
                            : "bg-amber-500"
                        }`}
                      />
                      {p.status}
                    </span>
                  </div>

                  <Image
                    src={p.image}
                    alt={p.title}
                    width={800}
                    height={820}
                    className="h-100 xxlxy w-full object-cover md:h-64 lg:h-56"
                    unoptimized
                    // لو عايز تستخدم تحسين Next/Image فعلياً، فعّل remotePatterns في next.config.js
                  />
                </div>

                {/* العنوان */}
                <div className="p-4">
                  <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
