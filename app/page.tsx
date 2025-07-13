"use client"

import Image from "next/image"
import Link from "next/link"
import { Download, Linkedin, Mail, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import AboutSection from "@/components/about-section"
import CurriculumViewer from "@/components/curriculum-viewer"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection, FadeInUp, SlideInLeft, SlideInRight } from "@/components/animated-section"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/90"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
            Bruno Reis
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#sobre"
                  className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/files/bruno-reis-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Currículo
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="h-9 w-9">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95 md:hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-4">
                  <Link
                    href="#sobre"
                    onClick={closeMobileMenu}
                    className="block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="#projetos"
                    onClick={closeMobileMenu}
                    className="block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Projetos
                  </Link>
                  <Link
                    href="#contato"
                    onClick={closeMobileMenu}
                    className="block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Contato
                  </Link>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent transition-all duration-300"
                  >
                    <Link href="/files/bruno-reis-cv.pdf" download onClick={closeMobileMenu}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Currículo
                    </Link>
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        {/* Hero Section */}
        <section id="sobre" className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
            <SlideInLeft>
              <div className="text-center md:text-left">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-4xl md:text-5xl">
                  Análise de Dados & Dashboards Power BI
                </h1>
                <p className="mb-6 text-base text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-lg">
                  Olá, sou Bruno Reis, analista de dados e formado em Engenharia da Computação. Especializado em
                  transformar informações complexas em insights acionáveis através de visualizações interativas e
                  dashboards intuitivos com Power BI.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 md:justify-start">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="w-full transition-all duration-300 sm:w-auto">
                      <Link href="#projetos">Ver Projetos</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full transition-all duration-300 bg-transparent sm:w-auto"
                    >
                      <Link href="/files/bruno-reis-cv.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                <div className="mt-6">
                  <CurriculumViewer />
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-200 transition-all duration-300 dark:border-gray-700 sm:h-64 sm:w-64 md:h-80 md:w-80"
                >
                  <Image src="/images/bruno-reis.png" alt="Bruno Reis" fill className="object-cover" priority />
                </motion.div>
              </div>
            </SlideInRight>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-50 py-12 transition-colors duration-300 dark:bg-gray-800 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:mb-12 sm:text-3xl">
                Habilidades & Expertise
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
              {[
                { title: "Power BI", desc: "Dashboards interativos e relatórios analíticos" },
                { title: "SQL", desc: "Consultas e manipulação de bancos de dados" },
                { title: "C# e Python", desc: "Desenvolvimento de aplicações" },
                { title: "HTML/CSS", desc: "Desenvolvimento web" },
                { title: "Microsoft Office", desc: "Excel, Word, PowerPoint avançado" },
                { title: "Databricks", desc: "Processamento e análise de dados" },
                { title: "Inglês", desc: "Nível intermediário" },
                { title: "Análise de Dados", desc: "Extração e tratamento de dados" },
              ].map((skill, index) => (
                <FadeInUp key={skill.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="rounded-lg bg-white p-4 text-center shadow-sm transition-all duration-300 dark:bg-gray-700 sm:p-6"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-base">
                      {skill.title}
                    </h3>
                    <p className="text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                      {skill.desc}
                    </p>
                  </motion.div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Detailed */}
        <AboutSection />

        {/* Projects Section */}
        <section id="projetos" className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <AnimatedSection>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-3xl">
              Projetos em Destaque
            </h2>
            <p className="mb-8 text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:mb-12">
              Confira alguns dos meus trabalhos recentes com Power BI
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <FadeInUp delay={0.2}>
              <ProjectCard
                title="Relação de Vendas Detalhadas"
                description="Dashboard interativo para análise detalhada de vendas, permitindo filtros por período, produto e região."
                embedUrl="https://app.powerbi.com/view?r=eyJrIjoiMTA2YmQwZTEtZTlhMy00M2U3LWEzMjAtZThkMDc0YmFjMGUwIiwidCI6IjAxYzUzZDA1LWVlYjgtNDMwYi05MThkLWRlMmNlYjFiNWE1ZCJ9"
              />
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <ProjectCard
                title="Projeto PRCJB"
                description="Análise completa de indicadores de desempenho para o projeto PRCJB, com visualizações de tendências e métricas-chave."
                embedUrl="https://app.powerbi.com/view?r=eyJrIjoiZmE1OWQxZjgtZGYyOC00NmQ1LWJkYTMtMmYzZmI5ZWFhMzFiIiwidCI6IjAxYzUzZDA1LWVlYjgtNDMwYi05MThkLWRlMmNlYjFiNWE1ZCJ9"
              />
            </FadeInUp>
          </div>
          <FadeInUp delay={0.6}>
            <div className="mt-8 text-center sm:mt-12">
              <p className="mb-4 text-gray-600 transition-colors duration-300 dark:text-gray-300">
                Espaço reservado para futuros projetos
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="transition-all duration-300 bg-transparent">
                  Ver Todos os Projetos
                </Button>
              </motion.div>
            </div>
          </FadeInUp>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-gray-50 py-12 transition-colors duration-300 dark:bg-gray-800 md:py-16">
          <div className="container mx-auto px-4">
            <FadeInUp>
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:mb-12 sm:text-3xl">
                Entre em Contato
              </h2>
            </FadeInUp>
            <div className="mx-auto max-w-md">
              <FadeInUp delay={0.2}>
                <div className="rounded-lg bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-gray-700 sm:p-8">
                  <div className="mb-6 flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="transition-all duration-300 bg-transparent"
                        >
                          <Link
                            href="www.linkedin.com/in/bruno-reis-580a351b6"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="transition-all duration-300 bg-transparent"
                        >
                          <Link href="mailto:fernandes.bruno56@hotmail.com">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
                        <strong>Email:</strong> fernandes.bruno56@hotmail.com
                      </p>
                      <p className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
                        <strong>Telefone:</strong> (11) 98348-5985
                      </p>
                      <p className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
                        <strong>Localização:</strong> São Bernardo do Campo, SP
                      </p>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white"
                        >
                          Nome
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm transition-colors duration-300 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-400"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm transition-colors duration-300 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-400"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm transition-colors duration-300 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-gray-400"
                        placeholder="Como posso ajudar?"
                      ></textarea>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" className="w-full transition-all duration-300">
                        Enviar Mensagem
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t bg-white py-6 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 sm:py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-400">
            © {new Date().getFullYear()} Bruno Reis. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
