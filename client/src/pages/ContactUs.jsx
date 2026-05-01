import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, GraduationCap, User } from 'lucide-react';
import { teamMembers, supervisor } from '../data/teamMembers';
import '../styles/contact.css';

export default function ContactUs() {
  const headerRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const supervisorRef = useScrollReveal();
  const infoRef = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">Contact <span className="gradient-text">Us</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have questions about our research? Reach out to any of our team members.
          </p>
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="section">
        <div className="container">
          <div className="contact-section-header" ref={supervisorRef}>
            <GraduationCap size={20} />
            <h2>Supervisor</h2>
          </div>
          <div className="supervisor-card glass-card">
            <div className="supervisor-card-inner">
              <div className="member-avatar-wrapper supervisor-avatar">
                {supervisor.image ? (
                  <img src={supervisor.image} alt={supervisor.name} className="member-avatar-img" />
                ) : (
                  <div className="member-avatar-fallback">{supervisor.initials}</div>
                )}
              </div>
              <div className="supervisor-info">
                <h3>{supervisor.name}</h3>
                <p className="supervisor-role">{supervisor.role}</p>
                <p className="supervisor-dept">{supervisor.department}</p>
                <p className="supervisor-uni">{supervisor.university}</p>
                <div className="member-contact-row">
                  <a href={`mailto:${supervisor.email}`} className="member-contact-link">
                    <Mail size={15} />
                    <span>{supervisor.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-section-header" ref={teamRef}>
            <User size={20} />
            <h2>Team Members</h2>
          </div>
          <div className="contact-members-grid">
            {teamMembers.map((member, i) => (
              <div className="member-contact-card glass-card" key={member.id} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="member-card-top">
                  <div className="member-avatar-wrapper">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="member-avatar-img" />
                    ) : (
                      <div className="member-avatar-fallback">{member.initials}</div>
                    )}
                  </div>
                  <div className="member-card-identity">
                    <h3>{member.name}</h3>
                    <span className="member-sid">{member.studentId}</span>
                    <span className="member-role-badge">{member.role}</span>
                  </div>
                </div>
                <p className="member-card-desc">{member.component}</p>
                <div className="member-contact-details">
                  <a href={`mailto:${member.email}`} className="member-contact-link">
                    <Mail size={15} />
                    <span>{member.email}</span>
                  </a>
                  {member.phone && (
                    <a href={`tel:${member.phone}`} className="member-contact-link">
                      <Phone size={15} />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Info */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-section-header" ref={infoRef}>
            <MapPin size={20} />
            <h2>Location</h2>
          </div>
          <div className="location-card glass-card">
            <div className="location-card-inner">
              <div className="contact-info-icon"><MapPin size={22} /></div>
              <div>
                <h4>Sri Lanka Institute of Information Technology</h4>
                <p>New Kandy Road, Malabe, Sri Lanka</p>
                <p className="location-sub">Faculty of Computing — Department of Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
