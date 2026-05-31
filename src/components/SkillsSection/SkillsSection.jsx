import { motion } from 'framer-motion'
import {
  SiBootstrap,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiMongoose,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa6'
import { TbApi } from 'react-icons/tb'
import './SkillsSection.css'
import { deckUnfold, fadeUp, staggerFast, staggerParent, viewportLate } from '../../utils/motion'

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', Icon: SiCplusplus, color: '#659AD2' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'ReactJS', Icon: SiReact, color: '#61DAFB' },
      { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Shadcn UI', Icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'ThreeJS (Basics)', Icon: SiThreedotjs, color: '#FFFFFF' },
      { name: 'React Native (Beginner)', Icon: SiReacthookform, color: '#61DAFB' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Mongoose', Icon: SiMongoose, color: '#880000' },
      { name: 'REST API', Icon: TbApi, color: '#00BCD4' },
      { name: 'Socket.io', Icon: SiSocketdotio, color: '#FFFFFF' },
      { name: 'SQL', Icon: SiMysql, color: '#00758F' },
    ],
  },
]

function SkillsSection() {
  return (
    <motion.section
      className="skills-section"
      id="skills-section"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportLate}
    >
      <div className="skills-container">
        
        {/* Left Side Content */}
        <motion.div className="skills-left" variants={fadeUp}>
          <span className="skills-section__eyebrow">Skill Matrix</span>
          <h2>Technical and Professional Skills</h2>
          <p>
            The technologies I build with and the core strengths I bring to product teams.
            I focus on styling flexibility, fluid visual feedback, and structuring
            maintainable frontend solutions.
          </p>
        </motion.div>

        {/* Right Side Categories */}
        <motion.div className="skills-right" aria-label="Skills grouped by category" variants={staggerFast}>
          {skillGroups.map((group, index) => (
            <motion.article className="skills-category-group" key={group.title} variants={fadeUp} custom={index}>
              <h3>{group.title}</h3>
              <div className="skills-list-plain">
                {group.items.map(({ name, Icon, color }) => (
                  <motion.div className="skill-item-plain" key={name} variants={fadeUp}>
                    <span className="skill-item-plain__icon" aria-hidden="true" style={{ color }}>
                      <Icon />
                    </span>
                    <span className="skill-item-plain__label">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}

export default SkillsSection
