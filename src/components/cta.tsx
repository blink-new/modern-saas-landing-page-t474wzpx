
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="border-t py-24">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of satisfied customers who are already using our platform to grow their business.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}