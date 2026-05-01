import { useScrollReveal } from '../hooks/useScrollReveal';
import { technologies } from '../data/technologies.jsx';
import { BookOpen, AlertTriangle, Target, Lightbulb, Cog } from 'lucide-react';
import '../styles/domain.css';

export default function Domain() {
  const litRef = useScrollReveal();
  const gapRef = useScrollReveal();
  const objRef = useScrollReveal();
  const methRef = useScrollReveal();
  const techRef = useScrollReveal();

  const litReviewItems = [
    { num: '01', title: 'Sign Language Recognition', text: 'Existing SLR systems focus on ASL/BSL with limited support for South Asian sign languages. Sri Lankan Sign Language (SSL) remains under-researched with no standardized digital learning platforms.' },
    { num: '02', title: 'Lip-Reading & Speech Visualization', text: 'Current lip-reading models primarily support English. Sinhala lip-reading lacks sufficient datasets and AI models. 3D avatar-based feedback for pronunciation is a novel approach.' },
    { num: '03', title: 'Emotion-Aware Learning Systems', text: 'Adaptive learning research shows improved outcomes but few systems target hearing-impaired students. Combining facial emotion recognition with content adaptation for this demographic is unexplored.' },
    { num: '04', title: 'Multi-Sensory Music Access', text: 'Music accessibility research typically focuses on captions. Converting music to visual and haptic feedback for hearing-impaired users represents a significant gap in inclusive technology.' },
    { num: '05', title: 'E-Learning Accessibility', text: 'Most e-learning platforms lack comprehensive accessibility features for hearing-impaired users. An integrated platform addressing multiple aspects of learning is needed.' },
    { num: '06', title: 'AI in Inclusive Education', text: 'While AI has transformed general education, its application in specialized inclusive education — particularly for the hearing-impaired community in developing countries — remains limited.' },
  ];

  const objectives = [
    'Develop a real-time SSL gesture recognition and evaluation system using computer vision and deep learning.',
    'Build an AI-powered Sinhala lip-reading model with 3D avatar visualization for pronunciation guidance.',
    'Create an emotion-adaptive learning module that adjusts content delivery based on student engagement.',
    'Design a multi-sensory music experience platform that converts audio into visual and haptic representations.',
    'Integrate all four modules into a unified, accessible e-learning platform tailored for hearing-impaired students in Sri Lanka.',
  ];

  const methodSteps = [
    { num: 'Phase 1', title: 'Research', desc: 'Literature review & gap analysis' },
    { num: 'Phase 2', title: 'Design', desc: 'System architecture & UI/UX' },
    { num: 'Phase 3', title: 'Develop', desc: 'Module implementation' },
    { num: 'Phase 4', title: 'Evaluate', desc: 'Testing & user studies' },
    { num: 'Phase 5', title: 'Integrate', desc: 'Platform unification' },
    { num: 'Phase 6', title: 'Deploy', desc: 'Final delivery & docs' },
  ];

  const techCategories = [...new Set(technologies.map(t => t.category))];

  return (
    <div className="page-enter">
      <section className="domain-hero">
        <div className="container">
          <span className="section-label">Research Domain</span>
          <h1 className="section-title">AI-Powered <span className="gradient-text">Inclusive Education</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Exploring how artificial intelligence can bridge communication barriers
            and create equitable learning experiences for hearing-impaired students.
          </p>
        </div>
      </section>

      {/* Literature Review */}
      <section className="section">
        <div className="container">
          <div ref={litRef} className="reveal">
            <span className="section-label">Literature Survey</span>
            <h2 className="section-title">Research <span className="gradient-text">Background</span></h2>
            <p className="section-subtitle">Key areas explored during our comprehensive literature review.</p>
          </div>
          <div className="lit-review-grid reveal-stagger" ref={useScrollReveal()}>
            {litReviewItems.map((item, i) => (
              <div className="glass-card lit-card" key={i}>
                <div className="lit-card-number">{item.num}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Gap & Problem */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div ref={gapRef} className="reveal">
            <div className="domain-two-col">
              <div className="research-highlight">
                <h3><AlertTriangle size={20} color="var(--accent-orange)" /> Research Gap</h3>
                <p>
                  There is a significant lack of integrated, AI-powered e-learning platforms that address the
                  multifaceted communication needs of hearing-impaired students in Sri Lanka. Existing solutions
                  are fragmented — sign language tools exist in isolation, lip-reading systems don't support
                  Sinhala, emotion-adaptive learning ignores accessibility needs, and music remains largely
                  inaccessible. No unified platform combines these critical components.
                </p>
              </div>
              <div className="research-highlight">
                <h3><Target size={20} color="var(--accent-teal)" /> Research Problem</h3>
                <p>
                  How can an AI-powered e-learning platform be designed to provide an inclusive, multi-modal
                  learning experience for hearing-impaired students in Sri Lanka — integrating sign language
                  self-learning, Sinhala lip-reading with visual feedback, emotion-responsive teaching, and
                  multi-sensory music access — within a single, accessible, and scalable system?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section">
        <div className="container">
          <div ref={objRef} className="reveal">
            <span className="section-label">Research Objectives</span>
            <h2 className="section-title">What We Aim to <span className="gradient-text">Achieve</span></h2>
          </div>
          <div className="objectives-list reveal-stagger" ref={useScrollReveal()}>
            {objectives.map((obj, i) => (
              <div className="objective-item" key={i}>
                <div className="objective-number">{i + 1}</div>
                <div className="objective-text">{obj}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div ref={methRef} className="reveal">
            <span className="section-label">Methodology</span>
            <h2 className="section-title">Our <span className="gradient-text">Approach</span></h2>
            <p className="section-subtitle">A structured, iterative methodology combining agile development with academic rigor.</p>
          </div>
          <div className="methodology-flow reveal-stagger" ref={useScrollReveal()}>
            {methodSteps.map((step, i) => (
              <div className="method-step" key={i}>
                <div className="method-step-num">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container">
          <div ref={techRef} className="reveal">
            <span className="section-label">Tech Stack</span>
            <h2 className="section-title">Technologies <span className="gradient-text">Used</span></h2>
          </div>
          {techCategories.map(cat => (
            <div key={cat} style={{ marginTop: 'var(--space-5)' }}>
              <h3 style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>{cat}</h3>
              <div className="tech-grid">
                {technologies.filter(t => t.category === cat).map((t, i) => (
                  <div className="tech-badge" key={i}>
                    <div className="tech-badge-icon">{t.icon}</div>
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
