import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import '../styles/contact.css';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal();

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-enter">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">Contact <span className="gradient-text">Us</span></h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have questions about our research? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid" ref={formRef}>
            <div className="reveal">
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={32} style={{ margin: '0 auto var(--space-3)' }} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="What is this regarding?" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us more about your inquiry..." value={form.message} onChange={handleChange} required rows={6} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="reveal" style={{ animationDelay: '200ms' }}>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Mail size={22} /></div>
                  <div>
                    <h4>Email</h4>
                    <p>hearme.research@university.lk</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Phone size={22} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+94 11 XXX XXXX</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><MapPin size={22} /></div>
                  <div>
                    <h4>Address</h4>
                    <p>Sri Lanka Institute of Information Technology, Malabe, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
