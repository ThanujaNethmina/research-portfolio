import { useState } from 'react';
import { Search, Download, FileText, ChevronDown, FolderOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/documents.css';

const categories = ['All', 'Proposals', 'Checklists', 'TAF', 'Final Thesis'];

const staticDocs = [
  {
    name: 'TAF Document.pdf',
    originalName: 'TAF Document',
    type: 'PDF',
    size: 6880787,
    category: 'TAF',
    uploadDate: '2026-02-15',
    description: 'Topic Assessment Form document for the HEARME research project',
    downloadUrl: '/files/documents/TAF Document.pdf'
  },
  {
    name: 'Praposal - IT22143754.pdf',
    originalName: 'Proposal - IT22143754',
    type: 'PDF',
    size: 2620196,
    category: 'Proposals',
    uploadDate: '2025-09-10',
    description: 'Individual research proposal document by IT22143754',
    downloadUrl: '/files/documents/Praposal - IT22143754.pdf'
  },
  {
    name: 'Proposal - IT22255488.pdf',
    originalName: 'Proposal - IT22255488',
    type: 'PDF',
    size: 1096163,
    category: 'Proposals',
    uploadDate: '2025-09-10',
    description: 'Individual research proposal document by IT22255488',
    downloadUrl: '/files/documents/Proposal - IT22255488.pdf'
  },
  {
    name: 'Proposal - IT22546852.pdf',
    originalName: 'Proposal - IT22546852',
    type: 'PDF',
    size: 1010414,
    category: 'Proposals',
    uploadDate: '2025-09-10',
    description: 'Individual research proposal document by IT22546852',
    downloadUrl: '/files/documents/Proposal - IT22546852.pdf'
  },
  {
    name: 'Proposal - IT22561466.pdf',
    originalName: 'Proposal - IT22561466',
    type: 'PDF',
    size: 982337,
    category: 'Proposals',
    uploadDate: '2025-09-10',
    description: 'Individual research proposal document by IT22561466',
    downloadUrl: '/files/documents/Proposal - IT22561466.pdf'
  },
  {
    name: 'Checklist 1 - Master sheet of research paper.xlsx',
    originalName: 'Checklist 1 - Master Sheet of Research Paper',
    type: 'XLSX',
    size: 31289,
    category: 'Checklists',
    uploadDate: '2025-10-15',
    description: 'Master checklist spreadsheet for tracking research paper progress',
    downloadUrl: '/files/documents/Checklist 1 - Master sheet of research paper.xlsx'
  },
  {
    name: 'Checklist 2 - Data Analysis Report.pdf',
    originalName: 'Checklist 2 - Data Analysis Report',
    type: 'PDF',
    size: 329887,
    category: 'Checklists',
    uploadDate: '2025-11-20',
    description: 'Data analysis report checklist documenting analytical methodologies and findings',
    downloadUrl: '/files/documents/Checklist 2 - Data Analysis Report.pdf'
  },
  {
    name: 'Checklist 3 - Ethical Analysis Report.pdf',
    originalName: 'Checklist 3 - Ethical Analysis Report',
    type: 'PDF',
    size: 399995,
    category: 'Checklists',
    uploadDate: '2025-12-05',
    description: 'Ethical analysis report covering research ethics and compliance review',
    downloadUrl: '/files/documents/Checklist 3 - Ethical Analysis Report.pdf'
  },
  {
    name: 'Checklist 4 - MLOps Report.pdf',
    originalName: 'Checklist 4 - MLOps Report',
    type: 'PDF',
    size: 353372,
    category: 'Checklists',
    uploadDate: '2026-01-10',
    description: 'MLOps report checklist covering machine learning operations and deployment pipeline',
    downloadUrl: '/files/documents/Checklist 4 - MLOps Report.pdf'
  },
  {
    name: 'Thesis final.pdf',
    originalName: 'Final Thesis',
    type: 'PDF',
    size: 537101,
    category: 'Final Thesis',
    uploadDate: '2026-04-20',
    description: 'Complete final thesis document with all research findings, evaluation results, and conclusions',
    downloadUrl: '/files/documents/Thesis final.pdf'
  },
];

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}

function getBadgeColor(category) {
  switch (category) {
    case 'Proposals': return 'blue';
    case 'Checklists': return 'teal';
    case 'TAF': return 'orange';
    case 'Final Thesis': return 'purple';
    default: return 'teal';
  }
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
                    <p>{doc.description} • {formatSize(doc.size)}</p>
                  </div>
                  <div className="doc-card-actions">
                    <span className={`badge badge-${getBadgeColor(doc.category)}`}>{doc.category}</span>
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
