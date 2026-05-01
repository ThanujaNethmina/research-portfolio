import { useState } from 'react';
import { Search, Download, FileText, ChevronDown, FolderOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/documents.css';

const categories = ['All', 'Project Charter', 'Proposals', 'Checklists', 'Progress Reports', 'Final Thesis', 'Module Documents'];

const staticDocs = [
  { name: 'project-charter.pdf', originalName: 'Project Charter', type: 'PDF', size: 245000, category: 'Project Charter', uploadDate: '2025-01-15', description: 'Initial project charter document outlining scope and objectives' },
  { name: 'proposal-document.pdf', originalName: 'Research Proposal', type: 'PDF', size: 1200000, category: 'Proposals', description: 'Complete research proposal with methodology and timeline', uploadDate: '2025-02-10' },
  { name: 'checklist-proposal.pdf', originalName: 'Proposal Checklist', type: 'PDF', size: 89000, category: 'Checklists', description: 'Checklist for proposal presentation submission', uploadDate: '2025-02-08' },
  { name: 'progress-report-1.pdf', originalName: 'Progress Report 1', type: 'PDF', size: 520000, category: 'Progress Reports', description: 'First progress report covering initial development phase', uploadDate: '2025-05-20' },
  { name: 'progress-report-2.pdf', originalName: 'Progress Report 2', type: 'PDF', size: 780000, category: 'Progress Reports', description: 'Second progress report with evaluation results', uploadDate: '2025-09-15' },
  { name: 'final-thesis.pdf', originalName: 'Final Thesis Document', type: 'PDF', size: 5400000, category: 'Final Thesis', description: 'Complete final thesis with all research findings and conclusions', uploadDate: '2025-10-30', downloadUrl: '/files/documents/Final_Thesis-1777623511680-896511865.pdf' },
  { name: 'ssl-module-doc.pdf', originalName: 'SSL Module Documentation', type: 'PDF', size: 340000, category: 'Module Documents', description: 'Technical documentation for the Sign Language module', uploadDate: '2025-09-01' },
  { name: 'lip-reading-doc.pdf', originalName: 'Lip-Reading Module Doc', type: 'PDF', size: 410000, category: 'Module Documents', description: 'Technical documentation for the lip-reading assistant module', uploadDate: '2025-09-01' },
];

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

export default function Documents() {
  const [docs, setDocs] = useState(staticDocs);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useScrollReveal();

  const filtered = docs.filter(d => {
    const matchCat = activeCategory === 'All' || d.category === activeCategory;
    const matchSearch = d.originalName.toLowerCase().includes(search.toLowerCase()) ||
                        (d.description && d.description.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="page-enter">
      <section className="docs-hero">
        <div className="container">
          <span className="section-label">Research Documents</span>
          <h1 className="section-title">Document <span className="gradient-text">Library</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Access, download, and explore all research documents produced during the HEARME project.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Toolbar */}
          <div className="docs-toolbar" ref={headerRef}>
            <div className="search-input-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search documents..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Document List */}
          <div className="docs-list">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon"><FolderOpen size={48} /></div>
                <p>No documents found matching your criteria.</p>
              </div>
            ) : (
              filtered.map((doc, i) => (
                <div className="doc-card" key={i}>
                  <div className={`doc-card-icon ${doc.type?.toLowerCase() || 'pdf'}`}>
                    {doc.type || 'PDF'}
                  </div>
                  <div className="doc-card-info">
                    <h4>{doc.originalName}</h4>
                    <p>{doc.description} • {formatSize(doc.size)} • {doc.uploadDate || 'N/A'}</p>
                  </div>
                  <div className="doc-card-actions">
                    <span className={`badge badge-${doc.category === 'Final Thesis' ? 'purple' : 'teal'}`}>{doc.category}</span>
                    <button
                      className="btn btn-sm btn-secondary"
                      onClick={() => {
                        if (doc.downloadUrl) {
                          window.open(doc.downloadUrl, '_blank');
                        } else {
                          alert('This document file has not been added to the project yet.');
                        }
                      }}
                    >
                      <Download size={14} /> Download
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>


        </div>
      </section>
    </div>
  );
}
