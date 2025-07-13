"use client"

import { Briefcase, GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedSection, FadeInUp } from "@/components/animated-section"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
}

interface CertificationItem {
  name: string
}

export default function AboutSection() {
  const experiences: ExperienceItem[] = [
    {
      title: "Analista de Vendas",
      company: "WEG",
      location: "São Paulo, SP",
      period: "03/2023 – 02/2025",
      description: [
        "Elaboração de planos estratégicos das áreas de marketing e comunicação.",
        "Criação de planilhas e dashboards, facilitando o acompanhamento das atividades pela equipe.",
        "Criação de KPIs e Indicadores.",
        "Extração e tratamento de dados estruturados e não estruturados.",
        "Controle dos indicadores de desempenho dos processos, interpretando os dados para avaliar a eficiência dos resultados.",
        "Criação de páginas para website e blog utilizando Hybris SAP.",
      ],
    },
    {
      title: "Estagiário em vendas internas",
      company: "MVISIA Visão Computacional",
      location: "São Paulo, SP",
      period: "05/2022 - 03/2023",
      description: [
        "Criação de relatórios e planilhas utilizando Power BI e Excel, auxiliando na produção de comunicações e relatórios diversos.",
        "Participação em treinamentos a fim de atualizar os conhecimentos na área e impulsionar o desenvolvimento profissional, obtendo maior produtividade.",
        "Colaboração com departamentos de desenvolvimento de produtos na criação de materiais de marketing para apresentações de vendas e reuniões com clientes.",
      ],
    },
    {
      title: "Operador Polivalente",
      company: "Csi Cargo Logística Integral S/A",
      location: "São Paulo, SP",
      period: "12/2019 - 07/2021",
      description: [
        "Utilização dos Sistemas SAP e WMS Garden para elaboração de tabelas e resolução de problemas na operação.",
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      degree: "Engenharia da Computação",
      institution: "Faculdade Engenheiro Salvador Arena",
      location: "São Bernardo do Campo, SP",
      period: "08/2020 - 06/2025 (Formado)",
    },
    {
      degree: "Técnico Em Eletrônica",
      institution: "Etec Lauro Gomes",
      location: "São Bernardo do Campo, SP",
      period: "Concluído",
    },
    {
      degree: "Ensino Médio",
      institution: "Etec Lauro Gomes",
      location: "São Bernardo do Campo, SP",
      period: "Concluído",
    },
  ]

  const certifications: CertificationItem[] = [
    { name: "Técnico em Eletrônica" },
    { name: "Power BI Avançado" },
    { name: "Sales Analytics" },
    { name: "SQL para ciência de dados" },
  ]

  return (
    <section id="sobre-detalhado" className="container mx-auto px-4 py-12 md:py-16">
      <AnimatedSection>
        <h2 className="mb-6 text-2xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:mb-8 sm:text-3xl">
          Sobre Mim
        </h2>
      </AnimatedSection>

      <div className="mb-8 sm:mb-12">
        <FadeInUp>
          <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-xl">
            <Briefcase className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Experiência Profissional
          </h3>
        </FadeInUp>
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="rounded-lg border bg-white p-4 shadow-sm transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-6"
              >
                <div className="mb-3 flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white sm:text-base">
                      {exp.title}
                    </h4>
                    <p className="text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <span className="self-start rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-300 sm:px-3">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500 sm:h-1.5 sm:w-1.5"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <FadeInUp>
          <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-xl">
            <GraduationCap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Formação Acadêmica
          </h3>
        </FadeInUp>
        <div className="space-y-3 sm:space-y-4">
          {education.map((edu, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="rounded-lg border bg-white p-3 shadow-sm transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-4"
              >
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white sm:text-base">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                      {edu.institution} | {edu.location}
                    </p>
                  </div>
                  <span className="self-start rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-300 sm:px-3">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <div>
        <FadeInUp>
          <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-xl">
            <Award className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Certificações
          </h3>
        </FadeInUp>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {certifications.map((cert, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-lg border bg-white p-3 text-center shadow-sm transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 sm:p-4"
              >
                <p className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                  {cert.name}
                </p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
