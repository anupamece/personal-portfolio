import projectsData from '../../../projectsData.json'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import './ProjectsSection.css'

function ProjectCard({ project, variant }) {
  return (
    <article className={`project-card project-card--${variant}`}>
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
    </article>
  )
}

function ProjectsRow({ title, subtitle, projects, variant }) {
  return (
    <div className="projects-row">
      <div className="projects-row__header">
        <span>{subtitle}</span>
        <h3>{title}</h3>
      </div>

      <div className="projects-row__cards">
        {projects.map((project) => (
          <ProjectCard key={`${variant}-${project.id}`} project={project} variant={variant} />
        ))}
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section className="projects-section" id="portfolio-section">
      <div className="projects-section__header">
        <span className="projects-section__eyebrow">Work Archive</span>
        <h2>Projects Section</h2>
        <p>
          A split showcase of flagship builds and smaller experiments, each one
          contributing to my frontend journey.
        </p>
      </div>

      <div className="projects-layout">
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
      </div>
    </section>
  )
}

export default ProjectsSection
