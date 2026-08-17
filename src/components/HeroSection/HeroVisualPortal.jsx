import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SiReact, SiNodedotjs, SiFigma, SiMongodb } from 'react-icons/si'
import { FiActivity, FiLayers, FiCpu } from 'react-icons/fi'
import './HeroVisualPortal.css'

function HeroVisualPortal() {
  const containerRef = useRef(null)
  
  // Motion values for tracking cursor position normalized from -0.5 to 0.5
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Smooth spring physics for tilting behavior
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 })
  
  // 3D rotations based on spring movements
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  // Parallax translation transformations for different layers (offset amounts)
  const bgGlowX = useTransform(mouseXSpring, [-0.5, 0.5], [-35, 35])
  const bgGlowY = useTransform(mouseYSpring, [-0.5, 0.5], [-35, 35])
  
  const widgetAX = useTransform(mouseXSpring, [-0.5, 0.5], [32, -32])
  const widgetAY = useTransform(mouseYSpring, [-0.5, 0.5], [32, -32])
  
  const widgetBX = useTransform(mouseXSpring, [-0.5, 0.5], [-48, 48])
  const widgetBY = useTransform(mouseYSpring, [-0.5, 0.5], [-48, 48])
  
  const widgetCX = useTransform(mouseXSpring, [-0.5, 0.5], [56, -56])
  const widgetCY = useTransform(mouseYSpring, [-0.5, 0.5], [-56, 56])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      className="hero-portal-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Parallax background mesh/glow */}
      <motion.div 
        className="hero-portal__bg-glow"
        style={{ x: bgGlowX, y: bgGlowY }}
      />

      {/* Main 3D Card Wrapper */}
      <motion.div
        className="hero-portal__3d-wrap"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Main Portrait Frame */}
        <div className="hero-portal__main-card">
          <div className="hero-portal__image-container">
            <img 
              src="/heroImg/heroimage.png" 
              alt="Anupam Poddar" 
              className="hero-portal__image" 
            />
          </div>
          
          <div className="hero-portal__status-badge">
            <span className="hero-portal__status-dot" />
            <span className="hero-portal__status-text">/SYSTEM ACTIVE/ </span>
          </div>
        </div>

        {/* WIDGET A: Stats Circular Loader (Bottom-Left) */}
        <motion.div 
          className="hero-portal__widget hero-portal__widget--stats"
          style={{ 
            x: widgetAX, 
            y: widgetAY,
            transformZ: 60 
          }}
        >
          <div className="hero-portal__circle-stat">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path 
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path 
                className="circle"
                strokeDasharray="98, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.98 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              />
            </svg>
            <span className="hero-portal__circle-percent">98%</span>
          </div>
          <div className="hero-portal__widget-info">
            <h4 className="hero-portal__widget-title">UX/UI Score</h4>
            <p className="hero-portal__widget-desc">Seamless User Journeys</p>
          </div>
        </motion.div>

        {/* WIDGET B: Tech Stack Matrix (Top-Right) */}
        <motion.div 
          className="hero-portal__widget hero-portal__widget--stack"
          style={{ 
            x: widgetBX, 
            y: widgetBY,
            transformZ: 90 
          }}
        >
          <div className="hero-portal__widget-header">
            <FiCpu className="hero-portal__widget-icon hero-portal__widget-icon--orange" />
            <span className="hero-portal__widget-meta">CORE STACK</span>
          </div>
          
          <div className="hero-portal__tech-grid">
            <div className="hero-portal__tech-item" title="React">
              <SiReact className="tech-react" />
            </div>
            <div className="hero-portal__tech-item" title="Node.js">
              <SiNodedotjs className="tech-node" />
            </div>
            <div className="hero-portal__tech-item" title="MongoDB">
              <SiMongodb className="tech-mongo" />
            </div>
            <div className="hero-portal__tech-item" title="Figma">
              <SiFigma className="tech-figma" />
            </div>
          </div>
        </motion.div>

        {/* WIDGET C: Waveform Activity Feed (Bottom-Right) */}
        <motion.div 
          className="hero-portal__widget hero-portal__widget--activity"
          style={{ 
            x: widgetCX, 
            y: widgetCY,
            transformZ: 40 
          }}
        >
          <div className="hero-portal__widget-header">
            <FiActivity className="hero-portal__widget-icon" />
            <span className="hero-portal__widget-meta">LIVE TELEMETRY</span>
          </div>
          
          <div className="hero-portal__activity-body">
            <div className="hero-portal__waveform">
              <span className="wave-bar" style={{ animationDelay: '0.1s' }} />
              <span className="wave-bar" style={{ animationDelay: '0.4s' }} />
              <span className="wave-bar" style={{ animationDelay: '0.2s' }} />
              <span className="wave-bar" style={{ animationDelay: '0.6s' }} />
              <span className="wave-bar" style={{ animationDelay: '0.3s' }} />
            </div>
            <div className="hero-portal__activity-code">
              <span className="code-line code-line--green">prod_build: ready</span>
              <span className="code-line">latency: 24ms</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroVisualPortal
