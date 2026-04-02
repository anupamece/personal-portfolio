import './ScrollIndicator.css'

function ScrollIndicator({ targetId }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId)

    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="scroll-indicator">
      <button
        className="scroll-indicator__button"
        type="button"
        aria-label="Scroll to next section"
        onClick={handleScroll}
      >
        <span className="scroll-indicator__label">Scroll</span>
        <span className="scroll-indicator__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9.5L12 15.5L18 9.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}

export default ScrollIndicator
