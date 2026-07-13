'use client'

import { useState, useEffect } from 'react'
import { Heart, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header glass-panel ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/logo.png" alt="Optimum Welfare Foundation Logo" className="logo-img" />
          <span className="logo-text">Optimum Welfare</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#mission" className="nav-link">Our Mission</a></li>
            <li><a href="#pillars" className="nav-link">Our Pillars</a></li>
            <li><a href="#calculator" className="nav-link">Calculate Impact</a></li>
            <li><a href="#trust" className="nav-link">Trust & Compliance</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a 
            href="https://rzp.io/rzp/optimumwelfare" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm donate-btn"
          >
            Donate Now
          </a>
          <button 
            className="nav-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer glass-panel ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#mission" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Our Mission</a></li>
          <li><a href="#pillars" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Our Pillars</a></li>
          <li><a href="#calculator" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Calculate Impact</a></li>
          <li><a href="#trust" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Trust & Compliance</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li className="mobile-nav-cta">
            <a 
              href="https://rzp.io/rzp/optimumwelfare" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          background: rgba(249, 249, 247, 0.8);
          border-bottom: 1px solid rgba(10, 63, 44, 0.05);
        }
        .header-scrolled {
          height: 70px;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 4px 20px -4px rgba(10, 63, 44, 0.06);
          border-bottom-color: rgba(10, 63, 44, 0.1);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          text-decoration: none;
          color: hsl(var(--primary-emerald));
          transition: transform 0.2s ease;
        }
        .logo:hover {
          transform: scale(1.02);
        }
        .logo-img {
          height: 52px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .header-scrolled .logo-img {
          height: 44px;
        }
        .logo-text {
          font-family: var(--font-outfit), sans-serif;
          font-weight: 900;
          font-size: 1.15rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: hsl(var(--primary-emerald));
        }
        .desktop-nav {
          display: none;
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 1.75rem;
        }
        .nav-link {
          text-decoration: none;
          color: hsl(var(--text-dark));
          font-family: var(--font-outfit), sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: hsl(var(--accent-amber));
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }
        .nav-link:hover {
          color: hsl(var(--primary-emerald));
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .donate-btn {
          padding: 0.6rem 1.5rem;
          font-size: 0.75rem;
        }
        .nav-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: hsl(var(--primary-emerald));
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid rgba(10, 63, 44, 0.1);
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid rgba(10, 63, 44, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px -10px rgba(10, 63, 44, 0.08);
        }
        .open {
          max-height: 400px;
          top: 70px;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 2rem 1.5rem;
          gap: 1.25rem;
        }
        .mobile-nav-link {
          text-decoration: none;
          color: hsl(var(--text-dark));
          font-family: var(--font-outfit), sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(10, 63, 44, 0.05);
        }
        .mobile-nav-link:hover {
          color: hsl(var(--accent-amber));
        }
        .mobile-nav-cta {
          margin-top: 1rem;
        }
        
        @media (min-width: 992px) {
          .desktop-nav {
            display: block;
          }
          .nav-menu-btn {
            display: none;
          }
          .mobile-nav-drawer {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
