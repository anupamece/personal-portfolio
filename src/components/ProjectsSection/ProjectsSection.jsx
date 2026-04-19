import { motion } from 'framer-motion'
import projectsData from '../../../projectsData.json'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import './ProjectsSection.css'
import { fadeUp, staggerFast, staggerParent, viewportOnce } from '../../utils/motion'

function ProjectCard({ project, variant }) {
  return (
    <motion.article className={`project-card project-card--${variant}`} variants={fadeUp}>
      <div className="project-card__image-shell">
        <img
          className="project-card__image"
          src={project.image}
          alt={`${project.title} preview`}
        />
      </div>

      <div className="project-card__content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <div className="project-card__actions">
          <a
            className="project-card__button project-card__button--primary"
            href={project.exploreLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiArrowUpRight aria-hidden="true" />
            Explore
          </a>
          <a
            className="project-card__button project-card__button--ghost"
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" />
            GitHub Repo
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectsRow({ title, subtitle, projects, variant }) {
  return (
    <motion.div className="projects-row" variants={fadeUp}>
      <motion.div className="projects-row__header" variants={fadeUp}>
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </motion.div>

      <motion.div className="projects-row__cards" variants={staggerFast}>
        {projects.map((project) => (
          <ProjectCard key={`${variant}-${project.id}`} project={project} variant={variant} />
        ))}
      </motion.div>
    </motion.div>
  )
}

function ProjectsSection() {
  return (
    <motion.section
      className="projects-section"
      id="portfolio-section"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="projects-section__header" variants={fadeUp}>
        <motion.span className="projects-section__eyebrow" variants={fadeUp}>Work Archive</motion.span>
        <motion.h2 variants={fadeUp}>Projects Section</motion.h2>
        <motion.p variants={fadeUp}>
          A split showcase of flagship builds and smaller experiments, each one
          contributing to my frontend journey.
        </motion.p>
      </motion.div>

      <motion.div className="projects-layout" variants={staggerFast}>
        <ProjectsRow
          title="Major Projects"
          subtitle="Featured Work"
          projects={projectsData.majorProjects}
          variant="major"
        />
        <ProjectsRow
          title="Minor Projects"
          subtitle="Smaller Builds"
          projects={projectsData.minorProjects}
          variant="minor"
        />
      </motion.div>
    </motion.section>
  )
}

export default ProjectsSection
