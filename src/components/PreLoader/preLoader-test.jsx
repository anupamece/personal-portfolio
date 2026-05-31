import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './preLoader-test.css'

function PreLoaderTest({
  duration = 2500,
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let startTimestamp = null
    let animationFrameId = null

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const elapsed = timestamp - startTimestamp
      const progressPercent = Math.min((elapsed / duration) * 100, 100)

      setProgress(Math.floor(progressPercent))

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [duration])

  const getStatusText = (prog) => {
    if (prog < 30) return 'INITIALIZING'
    if (prog < 60) return 'LOADING ASSETS'
    if (prog < 90) return 'COMPILING MODULES'
    return 'READY'
  }

  return (
    <motion.div
      className="preloader-test"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      exit={{
        opacity: 0,
        y: -60,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1]
        }
      }}
    >
      <div 
        className="preloader-test__content"
        style={{ '--preloader-duration': `${duration}ms` }}
      >
        <motion.div
          className="preloader-test__wordmark"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Opening technical bracket */}
          <span className="preloader-test__bracket">&lt;</span>
          
          {/* Main name with outline and fill states */}
          <span className="preloader-test__name">
            <span className="preloader-test__outline">Anupam</span>
            <span className="preloader-test__fill preloader-test__fill--base">Anupam</span>
            <span className="preloader-test__fill preloader-test__fill--glow">Anupam</span>
          </span>

          {/* Closing technical bracket */}
          <span className="preloader-test__bracket">/&gt;</span>
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="preloader-test__progress-bar">
          <div className="preloader-test__progress-fill"></div>
        </div>

        {/* Loading details */}
        <div className="preloader-test__status">
          <span className="preloader-test__status-text">{getStatusText(progress)}</span>
          <span className="preloader-test__status-percentage">{String(progress).padStart(2, '0')}%</span>
        </div>
      </div>
    </motion.div>
  )
}

export default PreLoaderTest
