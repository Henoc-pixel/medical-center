import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, Calendar } from "lucide-react"

export function Training() {
  const trainings = [
    {
      title: "Secourisme en milieu de travail",
      description: "Formation aux premiers secours adaptée au contexte professionnel",
      duration: "2 jours",
      participants: "10-15 personnes",
      date: "Sur demande",
    },
    {
      title: "Gestion du stress professionnel",
      description: "Techniques pour gérer le stress et prévenir l'épuisement professionnel",
      duration: "1 jour",
      participants: "8-12 personnes",
      date: "Sur demande",
    },
    {
      title: "Ergonomie au poste de travail",
      description: "Adaptation du poste de travail pour prévenir les troubles musculo-squelettiques",
      duration: "1 jour",
      participants: "8-12 personnes",
      date: "Sur demande",
    },
  ]

  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Formations</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nous proposons des formations adaptées aux besoins des entreprises pour améliorer la santé et la sécurité au
            travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{training.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{training.description}</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm">{training.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm">{training.participants}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm">{training.date}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">Demander un devis pour une formation</Button>
        </div>
      </div>
    </section>
  )
}
