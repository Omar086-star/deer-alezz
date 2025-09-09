// app/mri/page.tsx
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DonateLinks from "@/components/DonateLinks"
import Hero from "@/components/Hero"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "مشروع تركيب جهاز رنين مغناطيسي (MRI) في دير الزور | حملة دير العز",
  description:
    "أهمية توريد وتركيب جهاز رنين مغناطيسي (MRI) في دير الزور: الأسباب، الأهداف، النطاق، النتائج، والخطة الزمنية والميزانية.",
  openGraph: {
    title: "مشروع تركيب جهاز رنين مغناطيسي (MRI) في دير الزور",
    description:
      "تحسين التشخيص والخدمات الصحية عبر تركيب جهاز MRI وتشغيله وتدريب الكوادر وربطه بـ PACS في محافظة دير الزور.",
    images: ["/images/deir-al-izz-banner.jpg"],
  },
}

type Block = {
  id: string
  title: string
  lines: string[]
}

const blocks: Block[] = [
  {
    id: "summary",
    title: "الملخص التنفيذي",
    lines: [
      "توريد وتركيب جهاز رنين مغناطيسي (MRI) مع تجهيز الموقع الكامل والتشغيل.",
      "خدمة تشخيصية نوعية داخل دير الزور تقلّل الإحالات وتسرّع العلاج.",
      "ربط الخدمة بنظام PACS وتدريب الكوادر لضمان الاستدامة.",
    ],
  },
  {
    id: "context",
    title: "الخلفية والسياق",
    lines: [
      "تضرّر النظام الصحي وانخفاض الوصول للتصوير المتقدم.",
      "تأخر تشخيص الحالات العصبية والوعائية والأورام.",
      "ارتفاع كلفة السفر والضغط على مرافق خارجية.",
    ],
  },
  {
    id: "need",
    title: "المشكلة والحاجة",
    lines: [
      "غياب MRI محلياً يعيق القرارات العلاجية الدقيقة.",
      "أعباء مالية وزمنية على الأسر جرّاء السفر.",
      "حاجة لبروتوكولات حديثة وربط رقمي للنتائج.",
    ],
  },
  {
    id: "why",
    title: "لماذا الآن؟ (الأهمية)",
    lines: [
      "تحسين النتائج الصحية عبر تشخيص دقيق وسريع.",
      "تقليل الإحالات والسفر وتكاليف العلاج.",
      "دعم تخصصات: الأعصاب، العظام، الأورام، الطوارئ.",
      "بناء قدرات محلية ورافعة للنظام الصحي.",
    ],
  },
  {
    id: "goals",
    title: "الهدف العام والأهداف الخاصة",
    lines: [
      "الهدف: خدمة MRI مستدامة وآمنة وعادلة الوصول.",
      "توريد 1.5T مع Coils أساسية وتأهيل الموقع.",
      "تدريب التشغيل والقراءة وربط PACS.",
      "تشغيل تجريبي ثم توسع تدريجي وخطة صيانة.",
    ],
  },
  {
    id: "kpis",
    title: "النتائج ومؤشرات الأداء",
    lines: [
      "خفض وقت الانتظار إلى 3–5 أيام تدريجياً.",
      "≈ 500–800 فحص بالربع الأول مع نمو.",
      "انخفاض الإحالات خارج المحافظة.",
      "SOPs مكتوبة وتدريب 6–10 كوادر.",
    ],
  },
  {
    id: "scope",
    title: "نطاق العمل والمخرجات",
    lines: [
      "توريد جهاز MRI وCoils للرأس/العمود/الأطراف/البطن.",
      "محطة عمل وربط DICOM/PACS وتخزين مناسب.",
      "RF Shielding وغرف وتحكم وHVAC وUPS/مولّد.",
      "سلامة: كشف معادن، مناطق أمان، خطة Quench.",
    ],
  },
  {
    id: "specs",
    title: "المواصفات الفنية الإرشادية",
    lines: [
      "مغناطيس 1.5 تسلا بفتحة مريحة وكفاءة هيليوم.",
      "تدرّجات/إرسال-استقبال لبروتوكولات عامة.",
      "Coils أساسية مع إمكانية التوسّع.",
      "اتصال DICOM واندماج مع PACS.",
    ],
  },
  {
    id: "site",
    title: "متطلبات الموقع",
    lines: [
      "تقييم بنيوي ومساحات التصوير والتحكم والمسارات.",
      "عزل كهرومغناطيسي وأرضيّة وموانع تسريب.",
      "قدرة كهربائية مستقرة وUPS/مولّد.",
      "بيئة حرارية وصوتية ملائمة (HVAC).",
    ],
  },
  {
    id: "timeline",
    title: "الخطة الزمنية (تقديرية)",
    lines: [
      "تصميم وتقييم موقع: 4–6 أسابيع.",
      "مدني/كهرباء/Shielding: 8–10 أسابيع.",
      "توريد وشحن وتخليص: 8–12 أسبوعاً.",
      "تركيب/اختبار/قبول: 2–3 أسابيع + تشغيل تجريبي.",
    ],
  },
  {
    id: "budget",
    title: "الميزانية التقديرية (USD)",
    lines: [
      "MRI + Coils + محطة عمل: 900K–1.3M.",
      "أعمال وتجهيزات الموقع: 200K–400K.",
      "UPS/مولّد/طاقة: 60K–150K.",
      "تركيب/شحن/تأمين: 60K–120K. تدريب: 30K–60K.",
      "صيانة/ضمان: 80K–150K. الإجمالي: 1.33–2.18M.",
    ],
  },
  {
    id: "governance",
    title: "الحوكمة والمشتريات",
    lines: [
      "لجنة فنية/طبية/هندسية لتقييم المواصفات.",
      "طرح تنافسي بشروط تأهيل وخبرة تركيب.",
      "FAT/SAT وخطة قبول وجداول تسليم.",
      "عقود خدمة وصيانة وقطع غيار ودعم هيليوم.",
    ],
  },
  {
    id: "sustain",
    title: "الاستدامة وخطة التشغيل",
    lines: [
      "تمويل مختلط + رسوم رمزية تغطي التشغيل جزئياً.",
      "عقد صيانة سنوي وخطة توريد هيليوم.",
      "جداول مرنة مع نمو الطاقة التشغيلية.",
      "شراكات تعليمية مع جامعات وجمعيات.",
    ],
  },
  {
    id: "risks",
    title: "إدارة المخاطر",
    lines: [
      "تأخر التوريد: موردون بدائل وشروط واضحة.",
      "انقطاع الكهرباء: UPS/مولّد واحتياط.",
      "نقص الكوادر: تدريب واستبقاء ومناوبات.",
      "كلفة التشغيل: دعم موجّه ورسوم متدرجة.",
    ],
  },
  {
    id: "me",
    title: "الرصد والتقييم (M&E)",
    lines: [
      "مؤشرات: عدد الفحوصات/الانتظار/الإحالات/الرضى/جودة الصور.",
      "تقارير شهرية وربع سنوية ومراجعات بروتوكول.",
      "تدقيق جودة الصور والتقارير (Peer Review).",
    ],
  },
  {
    id: "comms",
    title: "التواصل والشفافية",
    lines: [
      "نشر ملخصات أداء وعدالة الوصول.",
      "قصص نجاح تراعي الخصوصية.",
      "تحديثات مرئية للمانحين والمجتمع.",
    ],
  },
  {
    id: "legal",
    title: "التراخيص والمتطلبات القانونية",
    lines: [
      "الالتزام بأنظمة وزارة الصحة والسلامة المغناطيسية.",
      "تصاريح الإنشاء والتجهيز وفق القوانين.",
    ],
  },
  {
    id: "stakeholders",
    title: "أصحاب المصلحة والشركاء",
    lines: [
      "الوزارة/المديرية، المستشفى المستضيف، المنظمات الداعمة.",
      "المجتمع المحلي، الموردون، الجهات الأكاديمية.",
    ],
  },
  {
    id: "assumptions",
    title: "افتراضات وحدود",
    lines: [
      "استقرار لوجستي وتوافر الإمدادات.",
      "قابلية الموقع للمواصفات الفنية.",
      "التزام الشركاء بالصيانة والتمويل التشغيلي.",
    ],
  },
]

export default function MRIProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero/>

      <div className="text-center mb-10"> <h1 className="text-3xl py-5 md:text-4xl font-extrabold text-[#045b4c] mb-4">
            مشروع تركيب جهاز رنين مغناطيسي (MRI) في دير الزور
          </h1> 
          
          </div>
            <div className="text-center mb-10"> <h1 className="text-3xl md:text-4xl font-extrabold text-[#045b9c] mb-4">
سيتم تحديث المعلومات قريبا           </h1> 
          
          </div>   

      <main dir="rtl" className="container mx-auto px-4 py-10">
       
        {/* <section className="text-center mb-10">

          <p className="text-[#045b4c] opacity-80 max-w-3xl mx-auto text-[17px]">
            خطوة محورية لتحسين دقة التشخيص وسرعته وتعزيز عدالة الوصول محلياً، مع خفض الإحالات والسفر وتكاليف العلاج.
          </p>
        </section> */}
{/*  
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blocks.map((b) => (
              <div
                key={b.id}
                className="aspect-square rounded-2xl border-2 border-[#045b4c] bg-[#045b4c]/5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-full flex-col">
                   <div className="px-4 py-3 border-b border-[#dea045]/60 bg-[#dea045]/15 rounded-t-2xl">
                    <h3 className="font-extrabold text-[#045b4c] text-xl md:text-2xl leading-snug">
                      {b.title}
                    </h3>
                  </div>

                   <div className="flex-1 overflow-auto p-4">
                    <ul className="list-disc pr-5 space-y-2 text-[17px] leading-relaxed">
                      {b.lines.map((line, i) => (
                        <li key={i} className="text-foreground">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

 
        {/* <section className="mt-10">
          <div className="text-center mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#045b4c]">
              ادعم توفير خدمة MRI في دير الزور
            </h3>
            <p className="text-[17px] text-[#045b4c] opacity-80">
              مساهمتك تُسرّع توفير خدمة تشخيصية منقذة وتخفّف أعباء المرضى والأسر.
            </p>
          </div>
          <DonateLinks />
          <p className="text-xs text-muted-foreground text-center mt-4">
            * الأرقام والمواصفات إرشادية وقابلة للتحديث بعد تقييم الموقع واستطلاع السوق.
          </p>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}
