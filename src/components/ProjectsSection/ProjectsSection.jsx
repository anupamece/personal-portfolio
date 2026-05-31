import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projectsData from '../../data/projectsData.json'
import { FiArrowUpRight, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './ProjectsSection.css'
import { fadeUp, staggerParent, viewportOnce } from '../../utils/motion'

const allProjects = [...projectsData.majorProjects, ...projectsData.minorProjects]

function CarouselCard({ project }) {
  return (
    <div className="carousel-card">
      <div className="carousel-card__header">
        <h4>{project.title}</h4>
      </div>
      <div className="carousel-card__image-shell">
        <img
          className="carousel-card__image"
          src={project.image}
          alt={`${project.title} preview`}
        />
        <div className="carousel-card__overlay">
          <p className="carousel-card__description">{project.description}</p>
          <div className="carousel-card__actions">
            <a
              className="carousel-card__button carousel-card__button--primary"
              href={project.exploreLink}
              target="_blank"
              rel="noreferrer"
            >
              <FiArrowUpRight aria-hidden="true" />
              Explore
            </a>
            <a
              className="carousel-card__button carousel-card__button--ghost"
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Focus mask overlay to dim out-of-focus cards */}
      <div className="carousel-card__focus-mask" />
    </div>
  )
}

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1)
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, allProjects.length - visibleCards)

  // Adjust current index if screen size changes and index becomes out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [visibleCards, maxIndex, currentIndex])

  // Auto Scroll logic
  useEffect(() => {
    if (isPaused || maxIndex === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0
        }
        return prev + 1
      })
    }, 4000) // Scroll every 4 seconds

    return () => clearInterval(timer)
  }, [maxIndex, isPaused])

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  // Click on a slide to focus it
  const handleCardClick = (idx) => {
    if (visibleCards === 3) {
      const relativePos = idx - currentIndex
      if (relativePos === 0) {
        prevSlide()
      } else if (relativePos === 2) {
        nextSlide()
      }
    } else if (visibleCards === 2) {
      const relativePos = idx - currentIndex
      if (relativePos === 0 && currentIndex > 0) {
        prevSlide()
      } else if (relativePos === 1 && currentIndex < maxIndex) {
        nextSlide()
      }
    }
  }

  // Swipe handlers
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <motion.section
      className="projects-section"
      id="portfolio-section"
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div className="projects-section__header" variants={fadeUp}>
        <motion.span className="projects-section__eyebrow" variants={fadeUp}>Work Showcase</motion.span>
        <motion.h2 variants={fadeUp}>My Projects</motion.h2>
        <motion.p variants={fadeUp}>
          Explore a showcase of my design builds, web experiments, and applications.
          Hover over each card to view a description and access repositories.
        </motion.p>
      </motion.div>

      {/* Carousel container */}
      <motion.div 
        className="projects-carousel" 
        variants={fadeUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left/Right blend edge gradient overlays */}
        <div className="projects-carousel__edge-overlay projects-carousel__edge-overlay--left" />
        <div className="projects-carousel__edge-overlay projects-carousel__edge-overlay--right" />

        {/* Navigation buttons */}
        <button 
          className="carousel-btn carousel-btn--left" 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <button 
          className="carousel-btn carousel-btn--right" 
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>

        {/* Carousel mask / track */}
        <div className="projects-carousel__track-mask">
          <div 
            className="projects-carousel__track"
            style={{ 
              transform: `translate3d(-${currentIndex * (100 / visibleCards)}%, 0, 0)`,
              transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            {allProjects.map((project, idx) => {
              // Calculate focus status
              let statusClass = 'focus';
              if (visibleCards === 3) {
                const relativePos = idx - currentIndex;
                if (relativePos === 1) {
                  statusClass = 'focus';
                } else {
                  statusClass = 'blur';
                }
              } else if (visibleCards === 2) {
                const relativePos = idx - currentIndex;
                if (relativePos === 0 || relativePos === 1) {
                  statusClass = 'focus';
                } else {
                  statusClass = 'blur';
                }
              } else if (visibleCards === 1) {
                const relativePos = idx - currentIndex;
                if (relativePos === 0) {
                  statusClass = 'focus';
                } else {
                  statusClass = 'blur';
                }
              }

              return (
                <div 
                  className={`projects-carousel__slide projects-carousel__slide--${statusClass}`} 
                  key={project.id || idx}
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                  onClick={() => handleCardClick(idx)}
                >
                  <CarouselCard project={project} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="projects-carousel__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`projects-carousel__dot ${currentIndex === idx ? 'projects-carousel__dot--active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* View All Projects CTA */}
      <motion.div className="projects-section__actions" variants={fadeUp}>
        <Link to="/projects" className="projects-section__view-all-btn">
          View All Projects
          <FiArrowUpRight className="view-all-btn-icon" />
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default ProjectsSection
