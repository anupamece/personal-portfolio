import {
  FaCode,
  FaLaptopCode,
  FaMedal,
  FaRankingStar,
  FaStar,
  FaTrophy,
} from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import './AchievementsSection.css'

const achievements = [
  {
    id: 1,
    title: 'LeetCode Max Rating',
    value: '1671',
    description: 'Reached a peak LeetCode contest rating of 1671 through consistent problem solving and contests.',
    Icon: FaRankingStar,
    color: '#FFB347',
    profile:"https://leetcode.com/u/ansec__07/"
  },
  {
    id: 2,
    title: 'LeetCode Problems Solved',
    value: '450+',
    description: 'Solved more than 450 LeetCode questions spanning arrays, dynamic programming, graphs, and contests.',
    Icon: FaCode,
    color: '#F7DF1E',
    profile:"https://leetcode.com/u/ansec__07/"
  },
  {
    id: 3,
    title: 'Competitive Problems Solved',
    value: '600+',
    description: 'Crossed 600 solved problems across multiple competitive programming platforms.',
    Icon: FaLaptopCode,
    color: '#61DAFB',
  },
  {
    id: 4,
    title: 'CodeChef Rating',
    value: '3 Star | 1690',
    description: 'Achieved 3-star status on CodeChef with a highest rating of 1690.',
    Icon: FaStar,
    color: '#8B5CF6',
    profile:"https://www.codechef.com/users/gaggle_deer_50"
  },
  {
    id: 5,
    title: 'Codeforces Rating',
    value: 'Pupil | 1390',
    description: 'Reached Pupil rank on Codeforces with a maximum rating of 1390.',
    Icon: FaMedal,
    color: '#60A5FA',
    profile:"https://codeforces.com/profile/anupampoddar97"
  },
  {
    id: 6,
    title: 'SIH Internal Hackathon',
    value: 'Qualified',
    description: 'Qualified the SIH internal hackathon round through strong team execution and idea presentation.',
    Icon: FaTrophy,
    color: '#22C55E',
    // profile:
  },
  {
    id: 7,
    title: 'EY Techathon 6.0',
    value: 'Prefinalist',
    description: 'Advanced to the prefinalist stage in EY Techathon 6.0.',
    Icon: FaRankingStar,
    color: '#FB7185',
    profile:"https://unstop.com/competitions/crp-ey-techathon-60-ey-1552002",
  },
]

function AchievementsSection() {
  return (
    <section className="achievements-section" id="achievements-section">
      <div className="achievements-section__header">
        <span className="achievements-section__eyebrow">Competitive Profile</span>
        <h2>Achievements Section</h2>
        <p>
          Milestones from coding contests, practice platforms, and hackathons
          that reflect consistency, growth, and competitive problem solving.
        </p>
      </div>

      <div className="achievements-grid" aria-label="Achievements list">
        {achievements.map((obj) => (
          <article className="achievement-card" key={obj.id}>
            <div className="achievement-card__icon-shell" aria-hidden="true">
              <obj.Icon className="achievement-card__icon" style={{ color: obj.color }} />
            </div>
            <div className="achievement-card__content">
              <span className="achievement-card__value">{obj.value}</span>
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
              <a
                className="achievement-card__link"
                href={obj.profile || '#'}
                aria-label={`Explore ${obj.title}`}
                target="_blank"
                rel="noreferrer"
              >
                <FiArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
