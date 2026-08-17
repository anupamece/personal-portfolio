import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiJavascript, 
  SiTailwindcss,
  SiFigma,
  SiExpress,
  SiTypescript
} from 'react-icons/si'
import { FaDatabase, FaGithub, FaCodeBranch } from 'react-icons/fa'
import './MarqueeStrip.css'

const marqueeItems = [
  { text: "Hii! I'm Anupam Poddar", type: 'intro' },
  { text: 'React', Icon: SiReact, color: '#61DAFB' },
  { text: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { text: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { text: 'SQL', Icon: FaDatabase, color: '#CA9A7A' },
  { text: 'MySQL', Icon: SiMysql, color: '#00758F' },
  { text: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { text: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { text: 'UI/UX Design', Icon: SiFigma, color: '#F24E1E' },
  { text: 'Express', Icon: SiExpress, color: '#FFFFFF' },
  { text: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { text: 'GitHub', Icon: FaGithub, color: '#FFFFFF' },
  { text: 'Data Structures', Icon: FaCodeBranch, color: '#CA9A7A' }
]

function MarqueeStrip() {
  // Render the track three times to guarantee continuous screen coverage for seamless looping
  const renderTrack = () => (
    <div className="marquee-strip__track">
      {marqueeItems.map((item, idx) => (
        <div key={idx} className="marquee-strip__item">
          {item.type === 'intro' ? (
            <span className="marquee-strip__intro-text">{item.text}</span>
          ) : (
            <>
              {item.Icon && (
                <span className="marquee-strip__icon" style={{ color: item.color }}>
                  <item.Icon />
                </span>
              )}
              <span className="marquee-strip__skill-text">{item.text}</span>
            </>
          )}
          <span className="marquee-strip__separator" aria-hidden="true">&middot;</span>
        </div>
      ))}
    </div>
  )

  return (
    <div className="marquee-strip-wrapper">
      <div className="marquee-strip" aria-label="Anupam Poddar Intro and Skills Strip">
        <div className="marquee-strip__inner">
          {renderTrack()}
          {renderTrack()}
          {renderTrack()}
        </div>
      </div>
    </div>
  )
}

export default MarqueeStrip
