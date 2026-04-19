import { motion } from 'framer-motion'
import './PreLoader.css'

function PreLoader({
  duration = 2500,
  label = '<Anupam/>',
}) {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 0, y: 140 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      exit={{
        opacity: 0,
        y: -180,
        transition: {
          duration: 0.9,
          ease: [0.7, 0, 0.84, 0],
        },
      }}
    >
      <div
        className="preloader__wordmark"
        style={{ '--preloader-duration': `${duration}ms` }}
      >
        <span className="preloader__outline">{label}</span>
        <span className="preloader__fill preloader__fill--base">{label}</span>
        <span className="preloader__fill preloader__fill--glow">{label}</span>
      </div>
    </motion.div>
  )
}

export default PreLoader
