"use client"

import { useState } from "react"
import { Expand, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  title: string
  description: string
  embedUrl: string
}

export default function ProjectCard({ title, description, embedUrl }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="text-base text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-gray-100 transition-colors duration-300 dark:border-gray-600 dark:bg-gray-700">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="h-6 w-6 rounded-full border-4 border-gray-300 border-t-gray-600 dark:border-gray-600 dark:border-t-gray-300 sm:h-8 sm:w-8"
                ></motion.div>
              </div>
            )}
            <iframe
              title={title}
              width="100%"
              height="100%"
              src={embedUrl}
              frameBorder="0"
              allowFullScreen={true}
              onLoad={() => setIsLoading(false)}
              className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
            ></iframe>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 p-4 sm:flex-row sm:justify-between sm:space-y-0 sm:p-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full transition-all duration-300 bg-transparent sm:w-auto"
            >
              <a href={embedUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir
              </a>
            </Button>
          </motion.div>
          <Dialog>
            <DialogTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full transition-all duration-300 bg-transparent sm:w-auto"
                >
                  <Expand className="mr-2 h-4 w-4" />
                  Expandir
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[90vh] w-full dark:bg-gray-800 sm:max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-base text-gray-900 transition-colors duration-300 dark:text-white sm:text-lg">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
                  {description}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-[16/10] w-full">
                <iframe
                  title={title}
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  frameBorder="0"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
