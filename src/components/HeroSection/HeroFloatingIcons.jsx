import { motion } from 'framer-motion'
import {
  Code,
  Cpu,
  Terminal,
  Sparkles,
  Monitor,
  Braces,
  Globe,
  FolderCode,
  Database,
  Settings,
  Layers,
  Compass,
  Smartphone,
  Blocks
} from 'lucide-react'

const icons = [
  { Icon: Code, top: '12%', left: '8%', size: 36, delay: 0 },
  { Icon: Cpu, top: '24%', left: '42%', size: 28, delay: 1.5 },
  { Icon: Terminal, top: '68%', left: '12%', size: 34, delay: 0.8 },
  { Icon: Sparkles, top: '48%', left: '72%', size: 26, delay: 2.2 },
  { Icon: Monitor, top: '76%', left: '78%', size: 30, delay: 1.2 },
  { Icon: Braces, top: '82%', left: '38%', size: 28, delay: 1.8 },
  { Icon: Globe, top: '8%', left: '82%', size: 32, delay: 0.5 },
  { Icon: FolderCode, top: '35%', left: '18%', size: 30, delay: 2.5 },
  { Icon: Database, top: '88%', left: '18%', size: 32, delay: 1.0 },
  { Icon: Settings, top: '56%', left: '32%', size: 28, delay: 0.3 },
  { Icon: Layers, top: '20%', left: '68%', size: 30, delay: 1.7 },
  { Icon: Compass, top: '60%', left: '86%', size: 28, delay: 2.9 },
  { Icon: Smartphone, top: '42%', left: '48%', size: 32, delay: 0.7 },
  { Icon: Blocks, top: '88%', left: '84%', size: 30, delay: 1.4 },
]

function HeroFloatingIcons() {
  return (
    <div className="hero-floating-icons" aria-hidden="true" style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {icons.map((item, index) => {
        const { Icon, top, left, size, delay } = item
        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              top,
              left,
              color: 'var(--accent)',
              opacity: 0.22,
            }}
            animate={{
              y: [0, -22, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 7 + index * 2.2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay,
            }}
          >
            <Icon size={size} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default HeroFloatingIcons
