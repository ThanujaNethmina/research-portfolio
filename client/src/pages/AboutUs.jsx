import { teamMembers, supervisor } from '../data/teamMembers';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail } from 'lucide-react';
import '../styles/about.css';

export default function AboutUs() {
  const teamRef = useScrollReveal();
  const supRef = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="about-hero">
        <div className="container">
          <span className="section-label">Our Team</span>
          <h1 className="section-title">Meet the <span className="gradient-text">Researchers</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Four dedicated researchers collaborating to build an inclusive future for hearing-impaired education.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid reveal-stagger" ref={teamRef}>
            {teamMembers.map((member) => (
              <div className="glass-card team-card" key={member.id}>
                {member.image ? (
                  <img src={member.image} alt={member.name} className="team-avatar" style={{ objectFit: 'cover' }} />
                ) : (
                  <div className="team-avatar">{member.initials}</div>
                )}
                <h3 className="team-name">{member.name}</h3>
                <p className="team-id">{member.studentId}</p>
                <span className="team-role">{member.role}</span>
                <p className="team-desc">{member.description}</p>
                <a href={`mailto:${member.email}`} className="team-email">
                  <Mail size={14} /> {member.email}
                </a>
              </div>
            ))}
          </div>

          {/* Supervisor */}
          <div className="supervisor-section" ref={supRef}>
            <div className="reveal">
              <span className="section-label">Supervisor</span>
              <h2 className="section-title" style={{ marginBottom: 'var(--space-5)' }}>Project <span className="gradient-text">Supervisor</span></h2>
            </div>
            <div className="supervisor-card">
              {supervisor.image ? (
                <img src={supervisor.image} alt={supervisor.name} className="team-avatar" style={{ objectFit: 'cover' }} />
              ) : (
                <div className="team-avatar">{supervisor.initials}</div>
              )}
              <div className="supervisor-info">
                <h3>{supervisor.name}</h3>
                <span className="team-role">{supervisor.role}</span>
                <p>{supervisor.description}</p>
                <p style={{ marginTop: 'var(--space-2)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                  {supervisor.department} — {supervisor.university}
                </p>
                <a href={`mailto:${supervisor.email}`} className="team-email" style={{ marginTop: 'var(--space-3)' }}>
                  <Mail size={14} /> {supervisor.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
