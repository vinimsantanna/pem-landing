import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PEM — Protocolo de Escala Médica | Software para Clínicas",
  description:
    "O software que médicos de alto padrão escolheram para crescer. Agenda inteligente, prontuário eletrônico, receituário digital e gestão financeira em um só lugar.",
  keywords: ["software médico", "prontuário eletrônico", "gestão de clínica", "agenda médica", "receituário digital"],
  authors: [{ name: "Protocolo de Escala Médica" }],
  openGraph: {
    title: "PEM — O software que médicos de alto padrão escolheram",
    description:
      "Agenda inteligente, prontuário eletrônico e gestão financeira completa. 14 dias grátis, sem cartão de crédito.",
    url: "https://usepem.com.br",
    siteName: "PEM",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PEM — Software para Clínicas Médicas",
    description: "Agenda inteligente, prontuário eletrônico e gestão financeira. 14 dias grátis.",
  },
  metadataBase: new URL("https://usepem.com.br"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
