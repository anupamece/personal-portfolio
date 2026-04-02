import './HeroAnimation.css'

function HeroAnimation() {
  return (
    <div className="hero-animation" aria-hidden="true">
      <div className="hero-animation__gradient hero-animation__gradient--first" />
      <div className="hero-animation__gradient hero-animation__gradient--second" />
      <div className="hero-animation__gradient hero-animation__gradient--third" />
      <div className="hero-animation__gradient hero-animation__gradient--fourth" />
      <div className="hero-animation__gradient hero-animation__gradient--fifth" />
      <div className="hero-animation__noise" />
    </div>
  )
}

export default HeroAnimation
