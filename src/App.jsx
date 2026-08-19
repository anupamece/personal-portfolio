import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import MarqueeStrip from './components/MarqueeStrip/MarqueeStrip'
import EducationSection from './components/EducationSection/EducationSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import PositionsSection from './components/PositionsSection/PositionsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import PreLoader from './components/PreLoader/PreLoader'
import AboutMePage from './components/AboutMePage/AboutMePage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer =setTimeout(()=>{
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  },[]);

  return (
    <Router>
      {loading ? <PreLoader duration={2000}/> : (
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main className="app">
                <HeroSection />
                <MarqueeStrip />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <AchievementsSection />
                <PositionsSection />
                <ContactSection />
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<PortfolioPage />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
