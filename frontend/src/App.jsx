import { Footer } from "./components/Footer"
import { LenisScroll } from "./components/LenisScroll"
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { BookingProcess } from "./sections/BookingProcess"
import { CTA } from "./sections/CTA"
import { Dishes } from "./sections/Dishes"
import { FAQ } from "./sections/FAQ"
import { Features } from "./sections/Features"
import { HeroSection } from "./sections/HeroSection"
import { Stats } from "./sections/Stats"
import { TestimonalSection } from "./sections/TestimonalSection"
import { Timing } from "./sections/Timing"


function App() {


  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonalSection />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default App
