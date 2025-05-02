import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Calendar, ChevronRight, Clock} from "lucide-react"

export function News() {

    const newsItems = [
        {
            title: "Médecine du travail : Interventions en entreprise",
            description: "Médiatèque",
            date: "15 Mars 2024",
            readTime: "5 min de lecture",
            image: ""
        },
        {
            title: "Médecine du travail : Interventions en entreprise\n" +
                "  Participation du cabinet Prevent Care Medical au 3ème Congrès Scientifique de la SMIT",
            description: "Actualités",
            date: "28 Février 2024",
            readTime: "8 min de lecture",
            image: ""
        },
        {
            title: " Participation du Cabinet Prevent Care Medical au 3ème Congrès Scientifique de la SMIT\n" +
                "  Formation aux gestes de premiers secours",
            description: "Actualités, Médiatèques",
            date: "10 Février 2024",
            readTime: "3 min de lecture",
            image: ""
        },
    ]

    return (
        <section id="news" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Actualités</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Restez informé des dernières nouvelles et événements concernant la médecine du travail.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <Card key={index} className="shadow-md hover:shadow-lg transition">
                            <div clip="padding-box" side="top" pb="current">
                                <img
                                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                    alt="Bold typography"
                                    style={{
                                        display: "block",
                                        objectFit: "cover",
                                        width: "100%",
                                        height: 200,
                                        backgroundColor: "var(--gray-5)",
                                    }}
                                />
                            </div>
                            <CardHeader>
                                <p className="text-gray-400 text-balance font-semibold hover:text-green-800">{item.description}</p>
                                <CardDescription className="flex items-center gap-4 mt-2">
                                    <span className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-1"/>
                                        {item.date}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1"/>
                                        {item.readTime}
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="text-xl font-extrabold text-indigo-800">{item.title}</CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="bg-red-600 hover:bg-indigo-800">
                        Voir toutes les actualités
                        <ChevronRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}
