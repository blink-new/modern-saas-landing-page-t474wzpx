
import { CTA } from "./components/cta"
import { Features } from "./components/features"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Pricing } from "./components/pricing"
import { Testimonials } from "./components/testimonials"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App