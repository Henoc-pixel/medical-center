import Link from "next/link"
import {Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail} from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-green-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 align-middle">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="relative h-10 w-10 mr-2">
                                <div
                                    className="absolute inset-0 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-white font-bold">PCM</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">CABINET</h3>
                                <p className="text-xs text-white/70">PREVENT CARE MEDICAL</p>
                            </div>
                        </div>
                        <p className="text-white/70 mb-4">
                            Centre médical spécialisé en médecine du travail en Côte d'Ivoire.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/70 hover:text-white">
                                <Facebook size={18}/>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white">
                                <Instagram size={18}/>
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white">
                                <Twitter size={18}/>
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white">
                                <Linkedin size={18}/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">LIENS UTILES</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white/70 hover:text-white">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-white/70 hover:text-white">
                                    Prestations
                                </Link>
                            </li>
                            <li>
                                <Link href="/rendezvous" className="text-white/70 hover:text-white">
                                    Prendre un RDV
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-white/70 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3></h3>
                        <ul className="space-y-2 mt-10">
                            <li>
                                <Link href="/presentation" className="text-white/70 hover:text-white">
                                    Présentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/formation" className="text-white/70 hover:text-white">
                                    Formations
                                </Link>
                            </li>
                            <li>
                                <Link href="/actualite" className="text-white/70 hover:text-white">
                                    Actualités
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">NEWSLETTER</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-white/70"/>
                                <span className="text-white/70">Abidjan Cocody Angre - <br/>
                                    Djorobite Bessikoi
                                </span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-2 text-white/70"/>
                                <span className="text-white/70">+225 01 53 88 66 72</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 mr-2 text-white/70"/>
                                <span className="text-white/70">contact@cabinet-pcm.ci</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
                    <p>© 2025 Cabinent Prevent Care Medical</p>
                </div>
            </div>
        </footer>
    )
}
