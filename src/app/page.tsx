import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Dores } from "@/components/sections/Dores"
import { Funcionalidades } from "@/components/sections/Funcionalidades"
import { Numeros } from "@/components/sections/Numeros"
import { Depoimentos } from "@/components/sections/Depoimentos"
import { Planos } from "@/components/sections/Planos"
import { FAQ } from "@/components/sections/FAQ"
import { CTAFinal } from "@/components/sections/CTAFinal"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Dores />
        <Funcionalidades />
        <Numeros />
        <Depoimentos />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
