'use client'

import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="container footer-container">
        
        {/* Top Segment: Content Grid */}
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Heart size={20} fill="currentColor" className="logo-heart" />
              <span>Optimum Welfare</span>
            </div>
            <p className="footer-tagline">
              Working towards the overall welfare, health, and well-being of all individuals, at every stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-header">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#pillars">Our Pillars</a></li>
              <li><a href="#calculator">Donate</a></li>
              <li><a href="#trust">Compliance</a></li>
              <li><a href="https://forms.gle/soTCNQUmxV4PHv6C6" target="_blank" rel="noopener noreferrer">Volunteer Application</a></li>
            </ul>
          </div>

          {/* Direct Support Contacts */}
          <div className="footer-col">
            <h4 className="footer-header">Contact Helpline</h4>
            <div className="contact-info">
              <a href="tel:+919372000720" className="contact-link">
                <Phone size={14} />
                <span>+91 - 93 720 00 720</span>
              </a>
              <a href="mailto:admin@ouroptimum.com" className="contact-link">
                <Mail size={14} />
                <span>admin@ouroptimum.com</span>
              </a>
              <div className="contact-address">
                <MapPin size={14} className="address-icon" />
                <span>Antop Hill, Mumbai, MH - 400037</span>
              </div>
            </div>
          </div>

          {/* Corporate / Support Column */}
          <div className="footer-col partnership-col">
            <h4 className="footer-header">CSR Partnerships</h4>
            <p className="partnership-text">
              We welcome corporate partnerships for CSR projects, cause marketing, and employee volunteering. Write to us at our admin email.
            </p>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Disclaimer */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Optimum Welfare Foundation. All rights reserved.
          </p>
          <div className="footer-bottom-actions">
            <a href="https://ouroptimum.com/website-use-privacy-policy/" className="privacy-link">Privacy Policy</a>
            <a href="#home" className="back-to-top" aria-label="Scroll back to top">
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .footer-section {
          background-color: hsl(var(--primary-emerald));
          color: white;
          padding: 5rem 0 2rem 0;
          border-top: 5px solid hsl(var(--accent-amber));
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 900;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: white;
        }

        .logo-heart {
          color: hsl(var(--accent-amber));
        }

        .footer-tagline {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 280px;
        }

        .footer-header {
          font-family: var(--font-outfit), sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: hsl(var(--accent-amber));
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-header::after {
          content: '';
          position: absolute;
          width: 32px;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: hsl(var(--accent-amber));
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .footer-links a:hover {
          color: hsl(var(--accent-amber));
          padding-left: 4px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: hsl(var(--accent-amber));
        }

        .contact-address {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }

        .address-icon {
          margin-top: 0.15rem;
          color: hsl(var(--accent-amber));
          flex-shrink: 0;
        }

        .partnership-text {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .copyright-text {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .privacy-link {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .privacy-link:hover {
          color: white;
        }

        .back-to-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .back-to-top:hover {
          background-color: hsl(var(--accent-amber));
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  )
}
