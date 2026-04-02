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
    <section className="skills-section" id="skills-section">
      <div className="skills-section__header">
        <span className="skills-section__eyebrow">Skill Matrix</span>
        <h2>Technical and Professional Skills</h2>
        <p>
          The technologies I build with and the core strengths I bring to product teams.
        </p>
      </div>

      <div className="skills-groups" aria-label="Skills grouped by category">
        {skillGroups.map((group) => (
          <article className="skills-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skills-group__grid">
              {group.items.map(({ name, Icon, color }) => (
                <div className="skill-pill" key={name}>
                  <span className="skill-pill__icon" aria-hidden="true" style={{ color }}>
                    <Icon />
                  </span>
                  <span className="skill-pill__label">{name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
