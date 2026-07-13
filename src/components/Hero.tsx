'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container grid-2">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Welcome to Optimum Welfare Foundation</span>
          </div>
          
          <h1 className="hero-title">
            Supporting Life <br />
            <span className="text-highlight">at Every Stage</span>
          </h1>
          
          <p className="hero-desc">
            We are a registered NGO working towards the overall health, well-being, and welfare of individuals across India—from pregnancy and birth to higher education, employment generation, and dignified end-of-life care.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://rzp.io/rzp/optimumwelfare" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Donate Now
              <ArrowRight size={16} />
            </a>
            <a href="#volunteer-register" className="btn btn-secondary">
              Join as Volunteer
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero-visual">
            <div className="circle-bg circle-1"></div>
            <div className="circle-bg circle-2"></div>
            <div className="circle-bg circle-3"></div>
            
            <motion.div 
              className="visual-card-main glass-panel"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            >
              <div className="visual-card-header">
                <span className="card-dot dot-red"></span>
                <span className="card-dot dot-yellow"></span>
                <span className="card-dot dot-green"></span>
              </div>
              <div className="visual-card-body">
                <h3>Optimum Impact</h3>
                <div className="impact-metric-row">
                  <div className="metric-box">
                    <span className="metric-val">100%</span>
                    <span className="metric-lbl">Direct Care</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-val">80G</span>
                    <span className="metric-lbl">Tax Exempt</span>
                  </div>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-label">
                    <span>Active Support Programs</span>
                    <span>94%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill"></div>
                  </div>
                </div>
                <div className="visual-tagline">
                  Empowering Lives, Restoring Dignity.
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 6.5rem 0 4.5rem 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, hsl(var(--bg-soft)) 0%, #f3f6f4 100%);
          position: relative;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: hsl(var(--primary-emerald-light));
          color: hsl(var(--primary-emerald));
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          border: 1px solid rgba(10, 63, 44, 0.1);
        }
        
        .badge-icon {
          color: hsl(var(--accent-amber));
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .text-highlight {
          color: hsl(var(--accent-amber));
          position: relative;
          display: inline-block;
        }
        
        .text-highlight::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 8px;
          bottom: 6px;
          left: 0;
          background-color: rgba(217, 119, 54, 0.15);
          z-index: -1;
          border-radius: 4px;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: hsl(var(--text-muted));
          margin-bottom: 1.75rem;
          max-width: 540px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-visual-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .circle-bg {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          z-index: 1;
        }
        
        .circle-1 {
          width: 250px;
          height: 250px;
          background-color: rgba(10, 63, 44, 0.12);
          top: 10%;
          left: 10%;
        }
        
        .circle-2 {
          width: 200px;
          height: 200px;
          background-color: rgba(217, 119, 54, 0.08);
          bottom: 10%;
          right: 10%;
        }
        
        .circle-3 {
          width: 180px;
          height: 180px;
          background-color: rgba(10, 63, 44, 0.05);
          top: 40%;
          right: 30%;
        }
        
        .visual-card-main {
          width: 100%;
          border-radius: 24px;
          padding: 2rem;
          z-index: 10;
          box-shadow: 0 20px 40px -10px rgba(10, 63, 44, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.6);
          position: relative;
        }
        
        .visual-card-header {
          display: flex;
          gap: 0.375rem;
          margin-bottom: 1.5rem;
        }
        
        .card-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .dot-red { background-color: #ff5f56; }
        .dot-yellow { background-color: #ffbd2e; }
        .dot-green { background-color: #27c93f; }
        
        .visual-card-body h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
          color: hsl(var(--primary-emerald));
        }
        
        .impact-metric-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .metric-box {
          flex: 1;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(10, 63, 44, 0.05);
          padding: 1rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .metric-val {
          font-size: 1.75rem;
          font-weight: 900;
          color: hsl(var(--primary-emerald));
          font-family: var(--font-outfit), sans-serif;
        }
        
        .metric-lbl {
          font-size: 0.75rem;
          color: hsl(var(--text-muted));
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 0.25rem;
        }
        
        .progress-bar-container {
          margin-bottom: 1.5rem;
        }
        
        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 800;
          color: hsl(var(--text-dark));
          margin-bottom: 0.5rem;
        }
        
        .progress-bar-track {
          width: 100%;
          height: 8px;
          background: rgba(10, 63, 44, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-bar-fill {
          width: 94%;
          height: 100%;
          background: linear-gradient(90deg, hsl(var(--primary-emerald)) 0%, hsl(var(--accent-amber)) 100%);
          border-radius: 4px;
        }
        
        .visual-tagline {
          font-size: 0.8rem;
          font-weight: 700;
          text-align: center;
          color: hsl(var(--primary-emerald));
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-top: 1rem;
        }

        @media (min-width: 576px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        @media (min-width: 992px) {
          .hero-section {
            padding: 9rem 0 7rem 0;
          }
        }
      `}</style>
    </section>
  )
}
