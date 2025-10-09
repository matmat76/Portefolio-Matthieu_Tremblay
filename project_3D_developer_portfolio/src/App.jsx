import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { About, Contact, Experience, Hero, Navbar, Tech2D, Works, StarsCanvas, Retour, LanguageToggle } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech2D />
          <Works />
          <Retour /> {/* Témoignages AVANT Contact */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <LanguageToggle />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
