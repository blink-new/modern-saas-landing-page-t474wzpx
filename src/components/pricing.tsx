
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and small teams",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1GB storage"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for growing businesses",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom domain",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "Unlimited storage",
      "SLA",
      "On-premise deployment"
    ]
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <div className="container px-4">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-muted-foreground"
          >
            Choose the plan that best fits your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-8"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}