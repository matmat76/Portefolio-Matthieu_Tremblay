import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { About, Contact, Experience, Hero, Navbar, Tech2D, Works, StarsCanvas, Retour, LanguageToggle } from './components';

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
              <Works />
              <Retour /> {/* Témoignages */}
            </>
          ) : (
            <div className="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10 min-h-[50vh] flex flex-col items-center justify-center">
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Section Personnelle</h2>
              <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mt-4">À venir prochainement...</p>
            </div>
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
