import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import EducationSection from './components/EducationSection/EducationSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import PositionsSection from './components/PositionsSection/PositionsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import PreLoader from './components/PreLoader/PreLoader'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer =setTimeout(()=>{
        setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
},[]);

  return (
    <>
      {loading ? <PreLoader duration={3000}/> : (
        <>
          <Navbar />
          <main className="app">
            <HeroSection />
            <ScrollIndicator targetId="home-next-section" />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <PositionsSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}

export default App
