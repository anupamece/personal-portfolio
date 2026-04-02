import Navbar from '../Navbar/Navbar'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import './PortfolioPage.css'

function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="portfolio-page__nav">
        <Navbar />
      </div>
      <section className="portfolio-page__content">
        <ProjectsSection />
      </section>
    </main>
  )
}

export default PortfolioPage
