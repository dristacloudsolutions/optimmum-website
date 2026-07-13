'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const IMPACT_TIERS = [
  {
    amount: 1000,
    title: 'Nourish & Support',
    description: 'Provides critical health and maternal nutrition packs for 2 pregnant women and their newborns, preventing infant malnutrition.',
    impactText: 'Helps 2 mothers & babies get a healthy start.'
  },
  {
    amount: 2500,
    title: 'Educate a Student',
    description: 'Covers full schooling supplies, books, school bags, and learning support for an underprivileged child for an entire term.',
    impactText: 'Sponsors 1 term of school support for a child.'
  },
  {
    amount: 5000,
    title: 'Empower a Family',
    description: 'Provides professional vocational skill training courses and basic business seed funding for a woman or youth to set up a small shop.',
    impactText: 'Enables 1 family to start a sustainable micro-business.'
  },
  {
    amount: 10000,
    title: 'Community Upliftment',
    description: 'Sponsors 1 complete health checkup camp in a rural village, providing free diagnostic scans and medications for up to 50 villagers.',
    impactText: 'Provides medical care for up to 50 rural residents.'
  }
]

export default function Calculator() {
  const [selectedIdx, setSelectedIdx] = useState(1) // Default to 2500 tier
  const activeTier = IMPACT_TIERS[selectedIdx]

  return (
    <section id="calculator" className="section section-bg-light">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Transparency</span>
          <h2 className="section-title">See Your Impact</h2>
          <p className="section-desc">
            We ensure every rupee translates into real growth. Choose a donation amount to see the tangible change you will create in someone's life.
          </p>
        </div>

        <div className="calc-card glass-panel">
          <div className="calc-tabs">
            {IMPACT_TIERS.map((tier, idx) => (
              <button
                key={idx}
                className={`calc-tab-btn ${selectedIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                ₹{tier.amount.toLocaleString('en-IN')}
              </button>
            ))}
          </div>

          <motion.div 
            key={selectedIdx}
            className="calc-body"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="calc-amount-display">
              <span className="calc-currency">₹</span>
              <span className="calc-number">{activeTier.amount.toLocaleString('en-IN')}</span>
            </div>
            
            <h3 className="calc-tier-title">{activeTier.title}</h3>
            
            <p className="calc-tier-desc">{activeTier.description}</p>
            
            <div className="calc-badge">
              <Sparkles size={14} />
              <span>{activeTier.impactText}</span>
            </div>

            <div className="calc-cta-wrapper">
              <a 
                href="https://rzp.io/rzp/optimumwelfare" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-accent btn-lg calc-btn"
              >
                Contribute ₹{activeTier.amount.toLocaleString('en-IN')}
                <ArrowRight size={16} />
              </a>
              <p className="calc-tax-note">All donations qualify for 50% Tax Exemption under Section 80G.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .calc-card {
          max-width: 720px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(10, 63, 44, 0.08);
          background: white;
        }

        .calc-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background-color: hsl(var(--primary-emerald-light));
          border-bottom: 1px solid rgba(10, 63, 44, 0.08);
        }

        .calc-tab-btn {
          background: none;
          border: none;
          padding: 1.25rem 0.5rem;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          color: hsl(var(--primary-emerald));
          cursor: pointer;
          transition: all var(--transition-smooth);
        }

        .calc-tab-btn:hover {
          background-color: rgba(10, 63, 44, 0.05);
        }

        .calc-tab-btn.active {
          background-color: hsl(var(--primary-emerald));
          color: white;
        }

        .calc-body {
          padding: 2.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .calc-amount-display {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          color: hsl(var(--primary-emerald));
          margin-bottom: 1rem;
        }

        .calc-currency {
          font-size: 1.5rem;
          font-weight: 900;
          margin-top: 0.5rem;
          margin-right: 0.25rem;
        }

        .calc-number {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          font-family: var(--font-outfit), sans-serif;
          letter-spacing: -0.04em;
        }

        .calc-tier-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: hsl(var(--primary-emerald));
        }

        .calc-tier-desc {
          font-size: 0.95rem;
          color: hsl(var(--text-muted));
          max-width: 500px;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .calc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: hsl(var(--accent-amber-light));
          color: hsl(var(--accent-amber));
          padding: 0.6rem 1.25rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 2rem;
          border: 1px solid rgba(217, 119, 54, 0.1);
        }

        .calc-cta-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .calc-btn {
          width: 100%;
          max-width: 320px;
        }

        .calc-tax-note {
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--text-muted));
        }

        @media (max-width: 576px) {
          .calc-tabs {
            grid-template-columns: repeat(2, 1fr);
          }
          .calc-number {
            font-size: 3rem;
          }
          .calc-body {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}
