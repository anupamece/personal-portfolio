import './ContactVisual.css'

function ContactVisual() {
  return (
    <div className="contact-visual" aria-hidden="true">
      <div className="contact-visual__orb contact-visual__orb--one" />
      <div className="contact-visual__orb contact-visual__orb--two" />
      <div className="contact-visual__orb contact-visual__orb--three" />

      <div className="contact-visual__window">
        <div className="contact-visual__window-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="contact-visual__window-body">
          <div className="contact-visual__tag">&lt;/&gt;</div>
          <div className="contact-visual__line contact-visual__line--wide" />
          <div className="contact-visual__line contact-visual__line--accent" />
          <div className="contact-visual__line contact-visual__line--mid" />

          <div className="contact-visual__cards">
            <div className="contact-visual__mini-card">
              <div className="contact-visual__mini-icon" />
              <div className="contact-visual__mini-line" />
              <div className="contact-visual__mini-line contact-visual__mini-line--tiny" />
            </div>
            <div className="contact-visual__mini-card">
              <div className="contact-visual__mini-icon contact-visual__mini-icon--accent" />
              <div className="contact-visual__mini-line contact-visual__mini-line--short" />
              <div className="contact-visual__mini-line contact-visual__mini-line--tiny" />
            </div>
          </div>

          <div className="contact-visual__snippet-stack">
            <div className="contact-visual__snippet">
              <span className="contact-visual__snippet-dot" />
              <span className="contact-visual__snippet-code">const idea = {'{'} ui: "clean", ux: "fast" {'}'}</span>
            </div>
            <div className="contact-visual__snippet">
              <span className="contact-visual__snippet-dot contact-visual__snippet-dot--accent" />
              <span className="contact-visual__snippet-code">deploy(experience).then(growth)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-visual__float-card contact-visual__float-card--top">
        <span className="contact-visual__float-label">web</span>
        <span className="contact-visual__float-code">interface.map(idea =&gt; experience)</span>
      </div>

      <div className="contact-visual__float-card contact-visual__float-card--mid">
        <span className="contact-visual__float-label">css</span>
        <span className="contact-visual__float-code">glass + gradient + motion</span>
      </div>

      <div className="contact-visual__float-card contact-visual__float-card--bottom">
        <span className="contact-visual__float-label">ui</span>
        <span className="contact-visual__float-code">build clean, interactive, fast</span>
      </div>
    </div>
  )
}

export default ContactVisual
