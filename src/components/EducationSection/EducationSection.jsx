import { motion } from 'framer-motion'
import educationData from '../../../educationData.json'
import './EducationSection.css'
import { deckUnfold, fadeUp, staggerParent, viewportLate } from '../../utils/motion'

const getInstituteLogo = (index) => {
  if (index < 2) {
    return '/educationLogos/jnv_logo.png'
  }

  return '/educationLogos/NIT_logo.png'
}

function EducationSection() {
  return (
    <motion.section
      className="education-section"
      id="home-next-section"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportLate}
    >
      <motion.div className="education-section__header" variants={fadeUp}>
        <motion.span className="education-section__eyebrow" variants={fadeUp}>Academic Journey</motion.span>
        <motion.h2 variants={fadeUp}>Education-Background</motion.h2>
        <motion.p variants={fadeUp}>
          A quick walkthrough of the institutions and milestones that shaped my
          learning path.
        </motion.p>
      </motion.div>

      <motion.div className="education-timeline" aria-label="Education timeline">
        <div className="education-timeline__line" />
        {educationData.map((item, index) => (
          <motion.article
            key={item.id}
            className={`education-card ${index % 2 === 0 ? 'education-card--top' : 'education-card--bottom'}`}
            variants={deckUnfold}
            custom={index}
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
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default EducationSection
