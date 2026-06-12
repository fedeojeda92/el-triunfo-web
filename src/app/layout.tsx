import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import Providers from "@/components/Providers"
import Navbar from "@/components/Navbar"
import WhatsAppButton from "@/components/WhatsAppButton"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "El Triunfo | Ropa y Calzado en Berazategui",
  description:
    "Tienda de ropa y calzado de marca en Berazategui. Zapatillas, borcegos, buzos y remeras. 2 locales: Juan María Gutiérrez y Barrio Marítimo. Lunes a sábado de 9 a 20hs.",
  keywords:
    "ropa berazategui, calzado berazategui, zapatillas berazategui, tienda ropa quilmes, el triunfo berazategui, buzos barrio maritimo",
  openGraph: {
    title: "El Triunfo | Ropa y Calzado en Berazategui",
    description:
      "Zapatillas, borcegos, buzos y remeras de marca. 2 locales en Berazategui.",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "El Triunfo",
              description: "Tienda de ropa y calzado de marca en Berazategui",
              telephone: "+5491124652183",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Juan María Gutiérrez",
                  addressLocality: "Berazategui",
                  addressRegion: "Buenos Aires",
                  addressCountry: "AR",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Barrio Marítimo",
                  addressLocality: "Berazategui",
                  addressRegion: "Buenos Aires",
                  addressCountry: "AR",
                },
              ],
              openingHours: "Mo-Sa 09:00-20:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased bg-[#0a0a0a] text-white">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
