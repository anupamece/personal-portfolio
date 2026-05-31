import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import projectsData from '../../data/projectsData.json'
import { fadeUp, staggerFast, staggerParent } from '../../utils/motion'
import './PortfolioPage.css'

function ProjectCard({ project }) {
  return (
    <motion.article className="project-grid-card" variants={fadeUp}>
      <div className="project-grid-card__image-shell">
        <img
          className="project-grid-card__image"
          src={project.image}
          alt={`${project.title} preview`}
        />
      </div>

      <div className="project-grid-card__content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <div className="project-grid-card__actions">
          <a
            className="project-grid-card__button project-grid-card__button--primary"
            href={project.exploreLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiArrowUpRight aria-hidden="true" />
            Explore
          </a>
          <a
            className="project-grid-card__button project-grid-card__button--ghost"
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectsRow({ title, subtitle, projects }) {
  return (
    <motion.div className="projects-grid-row" variants={fadeUp}>
      <motion.div className="projects-grid-row__header" variants={fadeUp}>
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </motion.div>

      <motion.div className="projects-grid-row__cards" variants={staggerFast}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.id || idx} project={project} />
        ))}
      </motion.div>
    </motion.div>
  )
}

function PortfolioPage() {
  return (
    <div className="portfolio-page-wrapper">

      <main className="portfolio-page">
        <motion.div 
          className="portfolio-container"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {/* Back button */}
          <motion.div variants={fadeUp} className="portfolio__back-btn-wrap">
            <Link to="/" className="portfolio__back-btn">
              <FiArrowLeft className="portfolio__back-icon" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.header className="portfolio__header" variants={fadeUp}>
            <span className="portfolio__eyebrow">// PROJECT ARCHIVE</span>
            <h1 className="portfolio__title">My Projects</h1>
            <p className="portfolio__subtitle">
              A comprehensive showcase of my major applications, frontend builds, and coding experiments.
            </p>
          </motion.header>

          {/* Layout Grid */}
          <div className="portfolio__layout">
            <ProjectsRow
              title="Major Projects"
              subtitle="Featured Work"
              projects={projectsData.majorProjects}
            />
            <ProjectsRow
              title="Minor Projects"
              subtitle="Smaller Builds"
              projects={projectsData.minorProjects}
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default PortfolioPage
