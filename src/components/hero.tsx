
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-200 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Launching on ProductHunt 🚀
            </span>
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
              The modern way to
              <span className="gradient-text"> build SaaS</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Build, launch, and scale your SaaS product in record time. Everything you need to go from zero to profit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex items-center gap-8"
          >
            <p className="text-sm text-muted-foreground">Trusted by teams at</p>
            <div className="flex gap-8">
              {['Microsoft', 'Google', 'Meta', 'Apple'].map((company) => (
                <span key={company} className="text-lg font-semibold opacity-50">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}