import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Building, BookOpen, ShieldAlert } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
      title: "Examens médicaux",
      description: "Examens d'embauche, périodiques, de reprise et de pré-reprise du travail.",
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Visites des lieux de travail",
      description: "Visites des lieux de travail pour identifier les risques professionnels.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Éducation sanitaire",
      description: "Sensibilisation et éducation sanitaire des travailleurs.",
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-blue-600" />,
      title: "Évaluation des risques",
      description: "Évaluation des risques professionnels et mise en place de mesures préventives.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Prestations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2 pt-6 flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
