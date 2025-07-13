"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CurriculumViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="outline" size="lg" className="w-full bg-transparent transition-all duration-300 sm:w-auto">
            Visualizar Currículo Completo
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[90vh] w-full dark:bg-gray-800 sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-base text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
            Currículo - Bruno Reis
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
            Visualize meu currículo completo ou faça o download
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild variant="outline" size="sm">
              <a href="/files/bruno-reis-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="mt-4 max-h-[60vh] overflow-y-auto rounded-lg border p-4 transition-colors duration-300 dark:border-gray-600 sm:p-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white sm:text-2xl">
                Bruno Reis
              </h2>
              <div className="mt-2 space-y-1 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                <p>Email: fernandes.bruno56@hotmail.com</p>
                <p>Telefone: 11/983485985</p>
                <p>Endereço: Rua 28 de julho n°28, São Bernardo do Campo, São Paulo 09790505</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                Objetivo
              </h3>
              <p className="mt-1 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                Atuar no desenvolvimento de soluções tecnológicas e sistemas de engenharia, aplicando habilidades em
                programação, análise de dados e otimização de processos para impulsionar projetos inovadores e
                eficientes.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                Histórico profissional
              </h3>
              <div className="mt-2 space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                    WEG - Analista de Vendas
                  </h4>
                  <p className="text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-sm">
                    São Paulo, São Paulo | 03/2023 – 02/2025
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:pl-5 sm:text-sm">
                    <li>Elaboração de planos estratégicos das áreas de marketing e comunicação.</li>
                    <li>Criação de planilhas e dashboards, facilitando o acompanhamento das atividades pela equipe.</li>
                    <li>Criação de KPIS e Indicadores.</li>
                    <li>Extração e tratamento de dados estruturados e não estruturados.</li>
                    <li>
                      Controle dos indicadores de desempenho dos processos, interpretando os dados para avaliar a
                      eficiência dos resultados.
                    </li>
                    <li>Criação de páginas para website e blog utilizando Hybris SAP.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                    MVISIA Visão Computacional - Estagiário em vendas internas
                  </h4>
                  <p className="text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-sm">
                    São Paulo, SP | 05/2022 - 03/2023
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:pl-5 sm:text-sm">
                    <li>
                      Criação de relatórios e planilhas utilizando Power BI e Excel, auxiliando na produção de
                      comunicações e relatórios diversos.
                    </li>
                    <li>
                      Participação em treinamentos a fim de atualizar os conhecimentos na área e impulsionar o
                      desenvolvimento profissional, obtendo maior produtividade.
                    </li>
                    <li>
                      Colaboração com departamentos de desenvolvimento de produtos na criação de materiais de marketing
                      para apresentações de vendas e reuniões com clientes.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                    Csi Cargo Logística Integral S/A - Operador Polivalente
                  </h4>
                  <p className="text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-sm">
                    São Paulo, SP | 12/2019 - 07/2021
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:pl-5 sm:text-sm">
                    <li>
                      Utilização dos Sistemas SAP e WMS Garden para elaboração de tabelas e resolução de problemas na
                      operação.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                  Competências
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:pl-5 sm:text-sm">
                  <li>C# e Python</li>
                  <li>SQL - SQL LITE</li>
                  <li>HTML e CSS</li>
                  <li>Power BI Avançado</li>
                  <li>Microsoft Office Avançado</li>
                  <li>Databricks</li>
                  <li>Inglês Intermediário</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                  Formação acadêmica
                </h3>
                <div className="mt-1 space-y-2 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:text-sm">
                  <div>
                    <p className="font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                      Faculdade Engenheiro Salvador Arena
                    </p>
                    <p>São Bernardo do Campo, SP</p>
                    <p>Engenharia da Computação</p>
                    <p className="text-gray-500 transition-colors duration-300 dark:text-gray-400">
                      08/2020 - 06/2025 (Formado)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                      Etec Lauro Gomes
                    </p>
                    <p>São Bernardo do Campo, SP</p>
                    <p>Técnico Em Eletrônica</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 transition-colors duration-300 dark:text-white">
                      Etec Lauro Gomes
                    </p>
                    <p>São Bernardo do Campo, SP</p>
                    <p>Ensino Médio</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                Certificações
              </h3>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-gray-600 transition-colors duration-300 dark:text-gray-300 sm:pl-5 sm:text-sm">
                <li>Técnico em Eletrônica.</li>
                <li>Power BI Avançado.</li>
                <li>Sales Analytics.</li>
                <li>SQL para ciência de dados.</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
