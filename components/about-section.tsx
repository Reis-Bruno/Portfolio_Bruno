"use client"

import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react"

const experiences = [
  { role: "Analista de Inteligência de Mercado / Dados", company: "IMPLACIL", period: "05/2026 — Atual", location: "São Paulo, SP", items: ["Condução de análises exploratórias e estatísticas para identificar padrões de compra e oportunidades comerciais.", "Construção e otimização de consultas analíticas e pipelines em SQL Server integrados ao ERP TOTVS.", "Automação da ingestão de fontes heterogêneas via APIs REST e Power Automate.", "Desenvolvimento de painéis Power BI para diagnósticos de performance e apoio executivo."] },
  { role: "Analista de BI Jr", company: "S.I.N. Implant System", period: "08/2025 — 05/2026", location: "São Paulo, SP", items: ["Desenvolvimento e validação de modelo de Lead Scoring baseado em comportamento e histórico de compras.", "Integração com RD Station para análise de ROI, funil de vendas e jornada do cliente.", "Implementação de governança e Row-Level Security (RLS) para gerentes e representantes.", "Criação de relatórios de alta performance com DAX avançado para metas estratégicas."] },
  { role: "Analista de Vendas (Planejamento & Analytics)", company: "WEG", period: "03/2023 — 02/2025", location: "São Paulo, SP", items: ["Extração, saneamento e consolidação de bases complexas de vendas e mercado.", "Desenvolvimento de estudos de demanda e identificação de padrões históricos para Marketing e Vendas."] },
  { role: "Estagiário Técnico / Comercial", company: "MVISIA Visão Computacional", period: "05/2022 — 03/2023", location: "São Paulo, SP", items: ["Apoio a soluções de visão computacional para a indústria, métricas operacionais e catálogo em SAP Hybris."] },
]

const education = [
  ["Pós-Graduação em Ciência de Dados com IA", "FIAP", "01/2026 — 12/2026 · Cursando"],
  ["Bacharelado em Engenharia da Computação", "Faculdade Engenheiro Salvador Arena", "08/2020 — 06/2025"],
  ["Técnico em Eletrônica", "Etec Lauro Gomes", "Concluído"],
]

const certifications = ["Databricks Fundamentals", "SQL para Ciência de Dados", "Power BI Avançado", "Sales & Business Analytics"]

export default function AboutSection() {
  return <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div className="mb-14 flex items-end justify-between gap-6"><div><p className="eyebrow">Trajetória</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Experiência & formação</h2></div><span className="hidden text-sm text-muted-foreground sm:block">2022 — presente</span></div>
    <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="flex flex-col gap-10">{experiences.map((item) => <article key={`${item.company}-${item.period}`} className="relative border-l border-border pl-6"><span className="absolute -left-[5px] top-1 size-2 rounded-full bg-primary ring-4 ring-background" /><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="font-semibold">{item.role}</h3><p className="mt-1 text-sm text-primary">{item.company} · {item.location}</p></div><time className="text-xs font-medium text-muted-foreground">{item.period}</time></div><ul className="mt-4 flex flex-col gap-2 text-sm leading-6 text-muted-foreground">{item.items.map((point) => <li key={point} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />{point}</li>)}</ul></article>)}</div>
      <aside className="flex flex-col gap-10"><div><h3 className="flex items-center gap-2 font-semibold"><GraduationCap className="text-primary" />Formação acadêmica</h3><div className="mt-5 flex flex-col gap-5">{education.map(([degree, institution, period]) => <div key={degree}><p className="font-medium">{degree}</p><p className="mt-1 text-sm text-muted-foreground">{institution}</p><p className="mt-1 text-xs text-muted-foreground">{period}</p></div>)}</div></div><div><h3 className="flex items-center gap-2 font-semibold"><Award className="text-primary" />Certificações</h3><div className="mt-5 flex flex-wrap gap-2">{certifications.map((cert) => <span key={cert} className="rounded-full border border-border px-3 py-2 text-xs text-muted-foreground">{cert}</span>)}</div></div><div className="rounded-2xl bg-muted p-6"><BriefcaseBusiness className="text-primary" /><p className="mt-5 text-sm leading-6 text-muted-foreground">Perfil orientado a transformar problemas de negócio em métricas, modelos e decisões melhores.</p></div></aside>
    </div>
  </div>
}
