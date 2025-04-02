
import { motion } from "framer-motion"
import { Code2, Cpu, Lock, Zap } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built for speed and performance, ensuring your users get the best experience possible."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and regular security audits."
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Developer API",
    description: "Powerful API that lets you integrate and extend functionality as needed."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI-Powered",
    description: "Leverage the latest in artificial intelligence to automate and optimize."
  }
]

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container px-4">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Everything you need to succeed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Powerful features to help you take control of your business
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-8 text-card-foreground"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}