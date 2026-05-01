import { Link } from 'react-router-dom';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>HEAR<span>ME</span></h3>
            <p>An AI-powered inclusive e-learning platform empowering hearing-impaired students in Sri Lanka through innovative technology and accessible education.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/domain">Domain</Link>
            <Link to="/milestones">Milestones</Link>
            <Link to="/documents">Documents</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link to="/presentations">Presentations</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Research</h4>
            <Link to="/domain">Literature Review</Link>
            <Link to="/domain">Methodology</Link>
            <Link to="/domain">Technologies</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 HEARME Research Project. Sri Lanka Institute of Information Technology.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
