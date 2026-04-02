import { FaBolt, FaGlobe } from 'react-icons/fa6'
import './PositionsSection.css'

const positions = [
  {
    id: 1,
    title: 'Web Dev Executive',
    organization: 'Shaurya, NIT Raipur',
    period: '2024 - 2025',
    description:
      'Served as Web Development Executive for the college sports committee, contributing to the design and upkeep of the official Shaurya website.',
    responsibilities: [
      'Worked on event pages, UI improvements, and website maintenance',
      'Collaborated with tech and design teams for better performance and engagement',
      'Supported smooth digital presence for committee activities and updates',
    ],
    Icon: "/positionLogo/shaurya.png",
  },
  {
    id: 2,
    title: 'Executive',
    organization: 'EEA, NIT Raipur',
    period: '2024 - 2025',
    description:
      'Contributed as an Executive in the Electrical Engineering Association, helping organize student-focused technical and engagement activities.',
    responsibilities: [
      'Coordinated events, technical sessions, and student participation',
      'Supported workshops, seminars, and practical learning initiatives',
      'Helped strengthen technical engagement and peer collaboration',
    ],
    Icon: FaBolt,
  },
]

function PositionsSection() {
  return (
    <section className="positions-section" id="positions-section">
      <div className="positions-section__header">
        <span className="positions-section__eyebrow">Leadership & Ownership</span>
        <h2>Positions & Responsibilities</h2>
        <p>
          A view into the roles I have taken on and the responsibilities I have
          handled while building projects, working with teams, and contributing
          to technical communities.
        </p>
      </div>

      <div className="positions-grid" aria-label="Positions and responsibilities">
        {positions.map(({ id, title, organization, period, description, responsibilities, Icon }) => (
          <article className="position-card" key={id}>
            <div className="position-card__icon-shell" aria-hidden="true">
              {typeof Icon === 'string' ? (
                <img src={Icon} alt={title} className="position-card__icon position-card__icon--image" />
              ) : (
                <Icon className="position-card__icon position-card__icon--glyph" />
              )}
            </div>

            <div className="position-card__meta">
              <span className="position-card__period">{period}</span>
              <span className="position-card__org">{organization}</span>
            </div>

            <h3>{title}</h3>
            <p className="position-card__description">{description}</p>

            <ul className="position-card__list">
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PositionsSection
