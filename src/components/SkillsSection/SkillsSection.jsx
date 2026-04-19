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
} from 'react-icons/si'
import { FaBrain, FaCss3Alt, FaPeopleCarryBox, FaUsers } from 'react-icons/fa6'
import { MdOutlineSchedule, MdPsychology } from 'react-icons/md'
import './SkillsSection.css'
import { deckUnfold, fadeUp, staggerFast, staggerParent, viewportLate } from '../../utils/motion'

const skillGroups = [
  {
    title: 'Computer Languages',
    items: [
      { name: 'C++', Icon: SiCplusplus, color: '#659AD2' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Tools and Libraries',
    items: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'ReactJS', Icon: SiReact, color: '#61DAFB' },
      { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { name: 'Shadcn UI', Icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'ThreeJS (Basics)', Icon: SiThreedotjs, color: '#FFFFFF' },
      { name: 'React Native (Beginner)', Icon: SiReacthookform, color: '#61DAFB' },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Leadership', Icon: FaUsers, color: '#FF9A3D' },
      { name: 'Team Work', Icon: FaPeopleCarryBox, color: '#FFA94D' },
      { name: 'Strong Problem Solving', Icon: MdPsychology, color: '#FFB347' },
      { name: 'Analytical Thinking', Icon: FaBrain, color: '#FF8C42' },
      { name: 'Time Management', Icon: MdOutlineSchedule, color: '#FFD166' },
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
      <motion.div className="skills-section__header" variants={fadeUp}>
        <motion.span className="skills-section__eyebrow" variants={fadeUp}>Skill Matrix</motion.span>
        <motion.h2 variants={fadeUp}>Technical and Professional Skills</motion.h2>
        <motion.p variants={fadeUp}>
          The technologies I build with and the core strengths I bring to product teams.
        </motion.p>
      </motion.div>

      <motion.div className="skills-groups" aria-label="Skills grouped by category" variants={staggerFast}>
        {skillGroups.map((group, index) => (
          <motion.article className="skills-group" key={group.title} variants={deckUnfold} custom={index}>
            <h3>{group.title}</h3>
            <motion.div className="skills-group__grid" variants={staggerFast}>
              {group.items.map(({ name, Icon, color }) => (
                <motion.div className="skill-pill" key={name} variants={fadeUp}>
                  <span className="skill-pill__icon" aria-hidden="true" style={{ color }}>
                    <Icon />
                  </span>
                  <span className="skill-pill__label">{name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default SkillsSection
