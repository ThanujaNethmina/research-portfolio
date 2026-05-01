import { useState, useEffect, useRef } from 'react';
import { Download, Upload, Presentation, ChevronDown, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/presentations.css';

const placeholderSlides = [
  {
    title: 'Proposal Presentation',
    date: 'May 2025',
    description: 'Initial project proposal covering research background, problem definition, objectives, and proposed methodology.',
    category: 'proposal',
    type: 'PDF',
    downloadUrl: '/files/presentations/Proposal Presentation.pdf'
  },
  {
    title: 'Progress Presentation 1',
    date: 'October 2025',
    description: 'First progress presentation demonstrating 50% completion including literature review, system design, and initial prototypes.',
    category: 'pp1',
    type: 'PDF',
    downloadUrl: '/files/presentations/Progress Presentation 1.pdf'
  },
  {
    title: 'Progress Presentation 2',
    date: 'January 2026',
    description: 'Second progress presentation showcasing 90% implementation, testing results, and integration progress.',
    category: 'pp2',
    type: 'PDF',
  },
  {
    title: 'Final Presentation',
    date: 'May 2026',
    description: 'Final project defense presentation with complete system demonstration, evaluation results, and research contributions.',
    category: 'final',
    type: 'PDF',
  },
];

export default function Presentations() {
  const [slides, setSlides] = useState(placeholderSlides);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <div className="page-enter">
      <section className="slides-hero">
        <div className="container">
          <span className="section-label">Presentation Slides</span>
          <h1 className="section-title">Project <span className="gradient-text">Presentations</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Download presentation slides from each project milestone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="slides-grid reveal-stagger" ref={gridRef}>
            {slides.map((slide, i) => (
              <div className="glass-card slide-card" key={i}>
                <div className={`slide-card-preview ${slide.category}`}>
                  <Presentation size={48} strokeWidth={1} style={{ opacity: 0.5 }} />
                </div>
                <div className="slide-card-body">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <div className="slide-card-footer">
                    <span className="badge badge-blue">{slide.date}</span>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        if (slide.downloadUrl) {
                          window.open(slide.downloadUrl, '_blank');
                        } else {
                          alert('This presentation file has not been uploaded yet.');
                        }
                      }}
                    >
                      <Download size={14} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  );
}
