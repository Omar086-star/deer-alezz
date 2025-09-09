import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
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

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-xl hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/campaign" className="text-xl hover:text-primary transition-colors">
              الحملة
            </Link>
            <Link href="/gallery" className="text-xl hover:text-primary transition-colors">
              الصور
            </Link>
          </div>

          {/* <Button className="bg-primary hover:bg-primary/90">تبرع الآن</Button> */}
        </nav>
      </div>
    </header>
  )
}
