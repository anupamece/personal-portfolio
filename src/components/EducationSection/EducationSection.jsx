import educationData from '../../../educationData.json'
import './EducationSection.css'

const getInstituteLogo = (index) => {
  if (index < 2) {
    return '/educationLogos/jnv_logo.png'
  }

  return '/educationLogos/NIT_logo.png'
}

function EducationSection() {
  return (
    <section className="education-section" id="home-next-section">
      <div className="education-section__header">
        <span className="education-section__eyebrow">Academic Journey</span>
        <h2>Education-Background</h2>
        <p>
          A quick walkthrough of the institutions and milestones that shaped my
          learning path.
        </p>
      </div>

      <div className="education-timeline" aria-label="Education timeline">
        <div className="education-timeline__line" />
        {educationData.map((item, index) => (
          <article
            key={item.id}
            className={`education-card ${index % 2 === 0 ? 'education-card--top' : 'education-card--bottom'}`}
          >
            <span className="education-card__node" aria-hidden="true" />
            <div className="education-card__stage-shell">
              <img
                className="education-card__stage-logo"
                src={item.logo}
                alt={`${item.level} stage icon`}
              />
            </div>

            <div className="education-card__content">
              <h3>{item.level}</h3>

              <div className="education-card__logo-shell">
                <img
                  className="education-card__logo"
                  src={getInstituteLogo(index)}
                  alt={`${item.institute} logo`}
                />
              </div>

              <h4>{item.institute}</h4>

              <div className="education-card__meta">
                <span className="education-card__period">{item.period}</span>
                <span className="education-card__score">{item.score}</span>
              </div>

              <div className="education-card__achievement">
                <span>Key Achievement</span>
                <p>{item.keyAchievement}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
