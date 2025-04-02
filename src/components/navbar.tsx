
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./navigation-menu"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold">
            SaaSly
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#features"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#pricing"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#testimonials"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}