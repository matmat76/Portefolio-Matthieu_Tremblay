import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { About, Contact, Experience, Hero, Navbar, Tech2D, Works, StarsCanvas, Retour, LanguageToggle, Calisthenics, Languages, Desires } from './components';

const App = () => {
  const [viewMode, setViewMode] = useState('professionnel');

  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About viewMode={viewMode} setViewMode={setViewMode} />
          
          {viewMode === 'professionnel' ? (
            <>
              <Experience />
              <Tech2D />
              <Retour /> {/* Témoignages */}
            </>
          ) : (
            <>
              <Works />
              <Calisthenics />
              <Languages />
              <Desires />
            </>
          )}

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
