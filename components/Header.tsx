// components/Header.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const NAV = [
  { href: "/", label: "الرئيسية" },
  { href: "/campaign", label: "الحملة" },
  { href: "/gallery", label: "الصور" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/90 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* الشعار */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/deir-al-izz-logo.jpg"
              alt="حملة دير العز"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* روابط الديسكتوب + زر التبرع (يظهر من md+) */}
          <div className="hidden md:flex items-center gap-6">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="text-xl hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}

            {/* زر تبرع الآن */}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/donateNow" className="text-white text-lg">
                تبرع الآن
              </Link>
            </Button>
          </div>

          {/* زر قائمة الموبايل */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              onClick={() => setOpen((v) => !v)}
              className="h-10 w-10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* طبقة خلفية لإغلاق القائمة عند الضغط خارجها */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* لوحة قائمة الموبايل */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full z-50 origin-top bg-background border-b border-border transition-all ${
          open ? "opacity-100 scale-y-100" : "pointer-events-none opacity-0 scale-y-95"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col divide-y divide-border">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* بإمكانك إضافة زر تبرع في الموبايل هنا أيضًا إن رغبت */}
            <li className="pt-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/donateNow">تبرع الآن</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
