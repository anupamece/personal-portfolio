import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiCompass, FiCpu, FiAward, FiHeart } from 'react-icons/fi'
import { FaCode, FaLaptopCode, FaRankingStar } from 'react-icons/fa6'
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks, SiGithub } from 'react-icons/si'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { fadeUp, staggerFast, staggerParent } from '../../utils/motion'
import './AboutMePage.css'

function AboutMePage() {
  return (
    <div className="about-me-page-wrapper">
     

      <main className="about-me-page">
        <motion.div 
          className="about-me-container"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {/* Back button */}
          <motion.div variants={fadeUp} className="about-me__back-btn-wrap">
            <Link to="/" className="about-me__back-btn">
              <FiArrowLeft className="about-me__back-icon" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.header className="about-me__header" variants={fadeUp}>
            <span className="about-me__eyebrow">// GET TO KNOW ME</span>
            <h1 className="about-me__title">About Anupam</h1>
            <p className="about-me__subtitle">
              A brief look into my background, engineering mindset, and creative drive.
            </p>
          </motion.header>

          {/* Main Content Grid */}
          <div className="about-me__grid">
            
            {/* Left Column: Bio & Story */}
            <motion.div className="about-me__left-col" variants={fadeUp}>
              <div className="about-me__card about-me__card--story">
                <h3>My Journey</h3>
                <p>
                  Hello! I am Anupam Poddar, a design-driven Full-Stack Engineer who thrives at the intersection of logical problem solving and creative interface design. Ever since I compiled my first algorithm, I’ve been fascinated by how backend databases and frontend layouts align to form a seamless digital product.
                </p>
                <p>
                  My engineering methodology is heavily backed by a solid competitive programming foundation (Pupil on Codeforces, 3-Star on CodeChef, and 450+ solved problems on LeetCode). This training sharpens my ability to write optimized logic, design efficient data structures, and architect scalable systems.
                </p>
                <p>
                  On the frontend, I focus on premium, modern user interfaces. I love playing with layout, typography, glassmorphic elements, and fluid micro-animations that make web apps feel responsive, responsive, and tactile.
                </p>
              </div>

              {/* Hobbies / Focus Areas */}
              <div className="about-me__hobbies-section">
                <h3>Interests & Passions</h3>
                <div className="about-me__hobbies-grid">
                  <div className="about-me__hobby-card">
                    <FiCpu className="hobby-icon" />
                    <h4>System Architecture</h4>
                    <p>Designing lightweight APIs, fast query schemas, and robust backend servers.</p>
                  </div>
                  <div className="about-me__hobby-card">
                    <FiCompass className="hobby-icon" />
                    <h4>Creative UI/UX</h4>
                    <p>Playing with custom CSS grids, animated borders, and modern aesthetic vibes.</p>
                  </div>
                  <div className="about-me__hobby-card">
                    <FaCode className="hobby-icon" />
                    <h4>Algorithms</h4>
                    <p>Solving complex data structures and participating in active weekly code sprints.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Profile details & Philosophy */}
            <motion.div className="about-me__right-col" variants={fadeUp}>
              
              {/* Quick Details Card */}
              <div className="about-me__card about-me__card--details">
                <h3>Quick Information</h3>
                <ul className="about-me__details-list">
                  <li>
                    <span className="detail-label">Location:</span>
                    <span className="detail-value">India</span>
                  </li>
                  <li>
                    <span className="detail-label">Primary Stack:</span>
                    <span className="detail-value">React, Node, Mongo, SQL</span>
                  </li>
                  <li>
                    <span className="detail-label">Education:</span>
                    <span className="detail-value">B.Tech in Computer Science</span>
                  </li>
                  <li>
                    <span className="detail-label">Coding Profile:</span>
                    <span className="detail-value">Pupil @ Codeforces, 3★ @ CodeChef</span>
                  </li>
                </ul>
              </div>

              {/* Core Philosophy Cards */}
              <div className="about-me__card about-me__card--values">
                <h3>Core Philosophy</h3>
                
                <div className="about-me__value-item">
                  <div className="about-me__value-header">
                    <span className="about-me__value-bullet">✦</span>
                    <h4>Aesthetics & Precision</h4>
                  </div>
                  <p>A web application must be as robust in its code structure as it is visually clean and elegant in its design.</p>
                </div>

                <div className="about-me__value-item">
                  <div className="about-me__value-header">
                    <span className="about-me__value-bullet">✦</span>
                    <h4>Performance First</h4>
                  </div>
                  <p>Favouring optimized algorithms, lightweight modules, fast response bounds, and clean query scaling.</p>
                </div>

                <div className="about-me__value-item">
                  <div className="about-me__value-header">
                    <span className="about-me__value-bullet">✦</span>
                    <h4>Lifelong Iteration</h4>
                  </div>
                  <p>Every project is a chance to refine my skills, write better tests, clean up styles, and explore new architectural paradigms.</p>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Profiles Section */}
          <motion.section className="about-me__profiles-section" variants={fadeUp}>
            <h3>My Profiles</h3>
            <div className="about-me__profiles-grid">
              {[
                { name: 'LeetCode', icon: SiLeetcode, color: '#FFB347', url: 'https://leetcode.com/u/ansec__07/' },
                { name: 'CodeChef', icon: SiCodechef, color: '#9A8678', url: 'https://www.codechef.com/users/gaggle_deer_50' },
                { name: 'Codeforces', icon: SiCodeforces, color: '#1E90FF', url: 'https://codeforces.com/profile/anupampoddar97' },
                { name: 'GeeksforGeeks', icon: SiGeeksforgeeks, color: '#2F8D46', url: 'https://www.geeksforgeeks.org/' },
                { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', url: 'https://github.com/anupampoddar97' },
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__profile-card"
                >
                  <item.icon className="profile-card__icon" style={{ color: item.color }} />
                  <div className="profile-card__info">
                    <h4>{item.name}</h4>
                    <p className="profile-card__link-text">
                      View Profile <FiArrowRight className="profile-card__arrow" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutMePage
