import { useState } from 'react';
import { milestones } from '../data/milestones';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Calendar, Award, ChevronDown } from 'lucide-react';
import '../styles/milestones.css';

export default function Milestones() {
  const [openId, setOpenId] = useState(null);
  const headerRef = useScrollReveal();

  const toggle = (id) => setOpenId(prev => prev === id ? null : id);

  return (
    <div className="page-enter">
      <section className="milestones-hero">
        <div className="container">
          <span className="section-label">Project Timeline</span>
          <h1 className="section-title">Milestones & <span className="gradient-text">Assessments</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Track our progress through each major assessment and project milestone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline" ref={headerRef}>
            {milestones.map((ms) => (
              <div className="timeline-item" key={ms.id}>
                <div className={`timeline-dot ${ms.status}`} />
                <div className={`glass-card timeline-card ${openId === ms.id ? 'open' : ''}`} onClick={() => toggle(ms.id)}>
                  <div className="timeline-card-header">
                    <div>
                      <h3>{ms.title}</h3>
                      <div className="timeline-meta">
                        <span><Calendar size={14} /> {ms.date}</span>
                        <span><Award size={14} /> {ms.marks}</span>
                        <span className={`badge badge-${ms.status === 'completed' ? 'teal' : ms.status === 'in-progress' ? 'orange' : 'purple'}`}>
                          {ms.status === 'completed' ? '✓ Completed' : ms.status === 'in-progress' ? '● In Progress' : '○ Upcoming'}
                        </span>
                      </div>
                    </div>
                    <ChevronDown size={20} className="accordion-chevron" style={{ transform: openId === ms.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                  </div>

                  {openId === ms.id && (
                    <div className="timeline-details">
                      <p>{ms.description}</p>
                      <ul>
                        {ms.deliverables.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
