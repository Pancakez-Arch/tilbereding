import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Heart, Zap, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-900">Treningsglede AS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#hjem" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Hjem
            </Link>
            <Link href="#treningsokter" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Treningsøkter
            </Link>
            <Link href="#ansatte" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Våre Ansatte
            </Link>
            <Link href="#kontakt" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Kontakt
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Logg inn
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Bli medlem
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hjem" className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Velkommen til Treningsglede
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Din reise til et <span className="text-purple-600">sunnere</span> og{" "}
                    <span className="text-purple-600">sterkere</span> deg
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Hos Treningsglede AS tilbyr vi varierte treningsøkter både innendørs og utendørs. Vårt mål er å
                    skape en inkluderende og motiverende atmosfære hvor alle kan trives og nå sine treningsmål.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                    Start din reise i dag
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50"
                  >
                    Se våre treningsøkter
                  </Button>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Fornøyde medlemmer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Ukentlige økter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5</div>
                    <div className="text-sm text-gray-600">Års erfaring</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Treningsglede medlemmer som trener sammen"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold">4.9/5 stjerner</div>
                      <div className="text-sm text-gray-600">Fra våre medlemmer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Hvorfor velge Treningsglede?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi tilbyr mer enn bare trening - vi skaper et fellesskap hvor alle kan blomstre
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Inkluderende miljø</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Alle er velkommen hos oss, uansett treningsnivå eller bakgrunn. Vi skaper et trygt og støttende
                    miljø for alle.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Varierte treningsøkter</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Fra høyintensiv intervalltrening til rolig yoga - vi har noe for enhver smak og ethvert fitnessnivå.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-purple-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Erfarne instruktører</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Våre sertifiserte instruktører har lang erfaring og brenner for å hjelpe deg nå dine mål på en trygg
                    måte.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Sessions Preview */}
        <section id="treningsokter" className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Våre treningsøkter</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Utforsk vårt brede utvalg av treningsøkter - både innendørs og utendørs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="HIIT trening"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">HIIT Trening</CardTitle>
                    <Badge className="bg-green-100 text-green-800">Innendørs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Høyintensiv intervalltrening som gir maksimal effekt på kort tid.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      45 min
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      8/12 plasser
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Utendørs yoga"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Utendørs Yoga</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">Utendørs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Rolig yoga i naturens vakre omgivelser for kropp og sjel.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      60 min
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      15/20 plasser
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Styrketrening"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Styrketrening</CardTitle>
                    <Badge className="bg-green-100 text-green-800">Innendørs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Bygg muskler og styrke med veiledning fra erfarne instruktører.
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      50 min
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      6/10 plasser
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Se alle treningsøkter og meld deg på
              </Button>
            </div>
          </div>
        </section>

        {/* Staff Preview */}
        <section id="ansatte" className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Møt vårt team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Våre dedikerte og erfarne instruktører er her for å støtte deg på din treningsreise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Emma Hansen"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-xl">Emma Hansen</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    Hovedinstruktør & Grunnlegger
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    10+ års erfaring innen fitness og personlig trening. Spesialist på HIIT og styrketrening.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-green-200 to-blue-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Lars Andersen"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-xl">Lars Andersen</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    Yoga & Mindfulness Instruktør
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sertifisert yoga-instruktør med fokus på mindfulness og stressreduksjon gjennom bevegelse.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-orange-200 to-red-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Sofia Eriksen"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-xl">Sofia Eriksen</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    Utendørs & Funksjonell Trening
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ekspert på utendørs aktiviteter og funksjonell trening som forbedrer dagliglivets bevegelser.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="border-purple-200 hover:bg-purple-50">
                Møt hele teamet
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Klar til å starte din treningsreise?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bli med i Treningsglede-familien i dag og opplev forskjellen et støttende treningsfellesskap kan gjøre for
              din helse og trivsel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Bli medlem nå
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600"
              >
                Book en prøvetime
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontakt" className="bg-gray-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Treningsglede AS</span>
              </div>
              <p className="text-gray-400 mb-4">
                Skaper treningsglede og bygger et sterkt fellesskap hvor alle kan trives og nå sine mål.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Treningsgata 123, 0123 Oslo</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Treningsøkter</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HIIT Trening
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Yoga
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Styrketrening
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Utendørs aktiviteter
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Om oss</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Vårt team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Våre verdier
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Medlemskap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontakt oss
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Telefon: +47 123 45 678</li>
                <li>E-post: hei@treningsglede.no</li>
                <li>Åpningstider:</li>
                <li>Man-Fre: 06:00-22:00</li>
                <li>Lør-Søn: 08:00-20:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Treningsglede AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
