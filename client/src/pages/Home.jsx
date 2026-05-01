import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Presentation, Users, BookOpen, Heart, Sparkles, Hand, MessageSquare, Smile, Music } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/home.css';

const modules = [
  {
    image: '/images/module_ssl.png',
    lucideIcon: <Hand size={20} />,
    color: 'teal',
    title: 'Interactive SSL Self-Learning',
    description: 'A real-time Sri Lankan Sign Language learning module using MediaPipe hand tracking and gesture evaluation. Students can learn, practice, and receive instant feedback on their signing accuracy.',
    owner: 'J.A.N.Y Jayasinghe'
  },
  {
    image: '/images/module_lip.png',
    lucideIcon: <MessageSquare size={20} />,
    color: 'purple',
    title: 'AI Sinhala Lip-Reading Assistant',
    description: 'An AI-powered lip-reading assistant that generates 3D avatar videos demonstrating accurate Sinhala pronunciation, providing visual speech cues for hearing-impaired learners.',
    owner: 'T.N Samaraweera'
  },
  {
    image: '/images/module_emotion.png',
    lucideIcon: <Smile size={20} />,
    color: 'orange',
    title: 'Emotion-Adaptive Engagement',
    description: 'Real-time facial emotion recognition that adapts learning content based on student engagement levels, ensuring an optimal and responsive teaching experience.',
    owner: 'D.S.W Hettiarachchi'
  },
  {
    image: '/images/module_music.png',
    lucideIcon: <Music size={20} />,
    color: 'pink',
    title: 'Resonance — Music Experience',
    description: 'A multi-sensory music platform that converts audio into visual animations and haptic vibration patterns, making music accessible and experiential for hearing-impaired students.',
    owner: 'W.R.A.V Viduranga'
  }
];

export default function Home() {
  const modulesRef = useScrollReveal();
  const impactRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-effects">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse-dot" />
              Final Year Research Project 2025
            </div>

            <h1 className="hero-title">
              Empowering Inclusive
              <span className="highlight">Education Through AI</span>
            </h1>

            <p className="hero-description">
              HEARME is an AI-powered e-learning platform designed to break communication barriers
              for hearing-impaired students in Sri Lanka — integrating sign language learning,
              lip-reading, emotion-adaptive teaching, and multi-sensory music experiences.
            </p>

            <div className="hero-buttons">
              <Link to="/documents" className="btn btn-primary btn-lg">
                <FileText size={18} />
                Explore Research
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Meet the Team
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">4</div>
                <div className="hero-stat-label">AI Modules</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">4</div>
                <div className="hero-stat-label">Researchers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">1</div>
                <div className="hero-stat-label">Platform</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">∞</div>
                <div className="hero-stat-label">Impact</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-glow-backdrop"></div>
              <img src="/images/hero-3d.png" alt="AI Holographic Learning" className="hero-3d-image" />
              
              <div className="floating-stat float-top-right">
                <div className="stat-icon-wrapper teal">
                  <Sparkles size={18} color="var(--accent-teal)" />
                </div>
                <div className="stat-text">
                  <strong>AI Powered</strong>
                  <span>Smart Learning</span>
                </div>
              </div>

              <div className="floating-stat float-bottom-left">
                <div className="stat-icon-wrapper purple">
                  <div className="pulse-dot"></div>
                </div>
                <div className="stat-text">
                  <strong>100% Inclusive</strong>
                  <span>Accessible to All</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z" fill="var(--bg-primary)" />
          </svg>
        </div>
      </section>

      {/* Modules */}
      <section className="section modules-section">
        <div className="container">
          <div ref={modulesRef} className="reveal">
            <span className="section-label">Research Components</span>
            <h2 className="section-title">Four Integrated <span className="gradient-text">AI Modules</span></h2>
            <p className="section-subtitle">
              Each module addresses a unique challenge in inclusive education, working together to create a comprehensive learning experience.
            </p>
          </div>
          <div className="modules-grid reveal-stagger" ref={useScrollReveal()}>
            {modules.map((m, i) => (
              <div
                className={`glass-card module-card ${m.color}`}
                key={i}
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(10, 14, 26, 0.95), rgba(10, 14, 26, 0.7)), url(${m.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <h3>{m.title}</h3>
                <p>{m.description}</p>
                <div className="module-owner">
                  <span className="owner-dot" />
                  {m.owner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section impact-section">
        <div className="container">
          <div ref={impactRef} className="reveal">
            <div className="impact-card">
              <Heart size={32} style={{ color: 'var(--accent-pink)', margin: '0 auto var(--space-4)' }} />
              <h3>Research Impact & Contribution</h3>
              <p>
                HEARME contributes to the growing field of assistive educational technology by addressing the
                specific needs of hearing-impaired students in Sri Lanka. By combining sign language recognition,
                lip-reading AI, emotion-aware teaching, and multi-sensory music, this project demonstrates how
                artificial intelligence can be leveraged to create truly inclusive learning environments —
                bridging the gap between hearing and hearing-impaired communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div ref={ctaRef} className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">Explore More</span>
            <h2 className="section-title">Dive Into Our <span className="gradient-text">Research</span></h2>
          </div>
          <div className="cta-grid reveal-stagger" ref={useScrollReveal()}>
            <Link to="/documents" className="glass-card cta-card">
              <div className="cta-card-icon" style={{ background: 'rgba(0,212,170,0.1)' }}>
                <FileText size={28} color="var(--accent-teal)" />
              </div>
              <h3>Documents</h3>
              <p>Access all research documents, proposals, reports, and the final thesis.</p>
              <span className="btn btn-primary btn-sm">View Documents <ArrowRight size={14} /></span>
            </Link>

            <Link to="/presentations" className="glass-card cta-card">
              <div className="cta-card-icon" style={{ background: 'rgba(124,92,252,0.1)' }}>
                <Presentation size={28} color="var(--accent-purple)" />
              </div>
              <h3>Presentations</h3>
              <p>Download presentation slides from all project milestones.</p>
              <span className="btn btn-primary btn-sm">View Slides <ArrowRight size={14} /></span>
            </Link>

            <Link to="/about" className="glass-card cta-card">
              <div className="cta-card-icon" style={{ background: 'rgba(255,107,53,0.1)' }}>
                <Users size={28} color="var(--accent-orange)" />
              </div>
              <h3>About Us</h3>
              <p>Meet the team behind HEARME and learn about each member's contribution.</p>
              <span className="btn btn-primary btn-sm">Meet Team <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
