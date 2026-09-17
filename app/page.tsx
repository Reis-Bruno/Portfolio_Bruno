"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BarChart3, Database, Download, Linkedin, Mail, Menu, MessageCircle, Sparkles, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import AboutSection from "@/components/about-section"
import { ThemeToggle } from "@/components/theme-toggle"

const skills = [
  { title: "Business Intelligence", detail: "Power BI, DAX avançado, Power Query e storytelling", icon: BarChart3 },
  { title: "Dados & ETL", detail: "SQL Server, APIs REST, Power Automate e pipelines", icon: Database },
  { title: "Advanced Analytics", detail: "Python, Databricks e modelagem preditiva", icon: Sparkles },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)
  const handleDownloadCV = () => window.open("/files/bruno-reis-cv.pdf", "_blank")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
          <Link href="#inicio" className="group flex items-center gap-3" aria-label="Voltar ao início">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">BR</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Bruno Reis<span className="text-primary">.</span></span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {[["Sobre", "#sobre"], ["Experiência", "#experiencia"], ["Projetos", "#projetos"], ["Contato", "#contato"]].map(([label, href]) => <Link key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={handleDownloadCV} className="hidden sm:inline-flex"><Download data-icon="inline-start" />Currículo</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menu">{mobileMenuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        <AnimatePresence>{mobileMenuOpen && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-border/70 px-5 py-5 md:hidden"><div className="flex flex-col gap-4"><Link href="#sobre" onClick={closeMobileMenu}>Sobre</Link><Link href="#experiencia" onClick={closeMobileMenu}>Experiência</Link><Link href="#projetos" onClick={closeMobileMenu}>Projetos</Link><Link href="#contato" onClick={closeMobileMenu}>Contato</Link><Button onClick={handleDownloadCV}>Baixar currículo</Button></div></motion.nav>}</AnimatePresence>
      </motion.header>

      <main id="inicio">
        <section className="relative overflow-hidden border-b border-border/70">
          <div className="pointer-events-none absolute -right-32 -top-40 size-[32rem] rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-32">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary"><span className="size-2 rounded-full bg-primary" />Disponível para oportunidades</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">Dados que viram <span className="text-primary">decisões.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Sou Bruno Reis, profissional de dados especializado em Business Intelligence e Inteligência de Mercado. Transformo bases complexas em indicadores claros, análises acionáveis e soluções preditivas.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link href="#projetos">Explorar projetos <ArrowUpRight data-icon="inline-end" /></Link></Button><Button variant="outline" size="lg" onClick={handleDownloadCV}>Baixar currículo <Download data-icon="inline-end" /></Button></div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"><span>São Bernardo do Campo, SP</span><span>Inglês avançado</span><span>FIAP · Ciência de Dados</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] border border-primary/20" /><div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted"><Image src="/images/bruno-reis.png" alt="Bruno Reis" fill priority className="object-cover object-top grayscale-[18%]" /></div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card p-4 shadow-xl"><p className="text-2xl font-semibold">3+ anos</p><p className="text-xs text-muted-foreground">em dados e analytics</p></div>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow">Perfil profissional</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Analítico por natureza.<br />Orientado a impacto.</h2></div><div><p className="text-xl leading-9 text-muted-foreground">Com formação em Engenharia da Computação e especialização em Ciência de Dados e IA, atuo na interseção entre negócio, tecnologia e dados.</p><p className="mt-6 leading-7 text-muted-foreground">Minha experiência passa por modelagem dimensional, construção de dashboards executivos, governança e segurança com RLS, integração de APIs e automação de rotinas. Também aplico Python e machine learning para levar as análises além do descritivo.</p><div className="mt-9 grid gap-4 sm:grid-cols-3">{skills.map((skill) => { const Icon = skill.icon; return <div key={skill.title} className="rounded-2xl border border-border bg-card p-5"><Icon className="mb-6 text-primary" /><h3 className="font-semibold">{skill.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{skill.detail}</p></div> })}</div></div></div></section>

        <section id="experiencia"><AboutSection /></section>
        <section id="projetos" className="border-y border-border/70 bg-muted/35"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><p className="eyebrow">Seleção de trabalhos</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projetos em destaque</h2><p className="max-w-sm text-sm leading-6 text-muted-foreground">Dashboards e análises desenvolvidos para responder perguntas reais de negócio.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-2"><ProjectCard title="Relação de Vendas Detalhadas" description="Dashboard interativo para análise de vendas por período, produto e região." embedUrl="https://app.powerbi.com/view?r=eyJrIjoiMTA2YmQwZTEtZTlhMy00M2U3LWEzMjAtZThkMDc0YmFjMGUwIiwidCI6IjAxYzUzZDA1LWVlYjgtNDMwYi05MThkLWRlMmNlYjFiNWE1ZCJ9" /><ProjectCard title="Projeto PRCJB" description="Indicadores de desempenho, tendências e métricas-chave para acompanhamento estratégico." embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmE1OWQxZjgtZGYyOC00NmQ1LWJkYTMtMmYzZmI5ZWFhMzFiIiwidCI6IjAxYzUzZDA1LWVlYjgtNDMwYi05MThkLWRlMmNlYjFiNWE1ZCJ9" /></div></div></section>

        <section id="contato" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Vamos conversar</p><h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Tem um desafio de dados?</h2><p className="mt-5 max-w-lg leading-7 opacity-80">Estou aberto a oportunidades em BI, Inteligência de Mercado e Ciência de Dados.</p></div><div className="mt-8 flex flex-wrap gap-3 lg:mt-0"><Button asChild variant="secondary"><Link href="mailto:fernandes.bruno56@hotmail.com"><Mail data-icon="inline-start" />Enviar e-mail</Link></Button><Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link href="https://www.linkedin.com/in/bruno-reis-580a351b6" target="_blank" rel="noopener noreferrer"><Linkedin data-icon="inline-start" />LinkedIn</Link></Button></div></div><div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground"><span className="flex items-center gap-2"><Mail />fernandes.bruno56@hotmail.com</span><span className="flex items-center gap-2"><MessageCircle />(11) 98348-5985</span></div></section>
      </main>
      <footer className="border-t border-border/70"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Bruno Reis</span><span>Business Intelligence · Dados · Analytics</span></div></footer>
    </div>
  )
}

