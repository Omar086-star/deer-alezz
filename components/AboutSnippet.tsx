import { Card, CardContent } from "@/components/ui/card"

const goals = [
  {
    title: "الهدف المالي",
    description: "جمع أكثر من 25 مليون دولار    ",
    icon: " ",
  },
  {
    title: "المجالات",
    description: "7 مجالات رئيسية",
    icon: " ",
  },
  {
    title: "المستفيدون",
    description: "أهالي محافظة ديرالزور   ",
    icon: " ",
  },
]

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">نبذة عن الحملة</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
هي حملة أهلية شعبية، برعاية محافظة دير الزور، وبالتعاون مع وزارة الثقافة السورية، وبإشراف مجلس أمناء يضم شخصيات اعتبارية، تسعى للنهوض بمحافظة دير الزور (ريفاً ومدينة) من تحت الركام، بمشاركة أبناء المحافظة ومحبيها من الداخل والخارج، وبدعم الجهات الشريكة تنطلق الحملة من قيم النخوة والتكافل التي عُرفت بها دير الزور، لترسّخ ثقافة التطوّع وروح المبادرة، وتعزّز مفهوم المسؤولية الجماعية.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {goals.map((goal, index) => (
            <Card key={index} className="text-center derer">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h3 className="text-xl font-semibold bg-ttex mb-2">{goal.title}</h3>
                <p className="text-primary bg-ttex font-bold text-lg">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
