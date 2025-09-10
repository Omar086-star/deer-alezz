// components/Footer.tsx
import { FaWhatsapp, FaInstagram, FaFacebook, FaXTwitter, FaTelegram } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-tte bbbb  relative">
      {/* شريط علوي مستقيم يغطي الفراغ الأبيض */}
      <div
        aria-hidden="true"
        className="absolute -top-[20px] left-0 right-0 h-[20px] bg-[#dea045] pointer-events-none"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">حملة دير العز</h3>
            <p className="text-xl">
              حملة أهلية شعبية لإعادة إعمار دير الزور وإعادة الأمل للمجتمع
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-xl">الرئيسية</a></li>
              <li><a href="/campaign" className="text-xl">الحملة</a></li>
              <li><a href="/gallery" className="text-xl">الصور</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-4">تواصل معنا</h4>
            <p className="text-xl mb-3">للاستفسارات والمعلومات الإضافية</p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/963968158705"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors ring-1 ring-black/5"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

              <a
                href="https://t.me/Deer_alezz"
                target="_blank" rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors ring-1 ring-black/5"
                title="Telegram"
              >
                <FaTelegram className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/deir_alezz?igsh=M2c2MzdtYWM1Znky"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full text-white flex items-center justify-center hover:opacity-90 transition-opacity ring-1 ring-black/5 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/DeirAlEzz"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors ring-1 ring-black/5"
                title="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              <a
                href="https://x.com/Deir_AlEzz?t=J_oKtKEZO7Nh5qEd-HRCKw&s=09"
                target="_blank" rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors ring-1 ring-black/5"
                title="Twitter / X"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border text-l mt-8 pt-8 text-center">
          <p>&copy; 2025 حملة دير العز. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
