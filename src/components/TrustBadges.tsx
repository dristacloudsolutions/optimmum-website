'use client'

import { ShieldCheck, FileCheck, Landmark, Receipt } from 'lucide-react'
import { motion } from 'framer-motion'

const BADGES = [
  {
    icon: Landmark,
    title: 'Registered Society',
    sub: 'MH/MUM/849/2025/GBBSD',
    desc: 'Registered under the Societies Registration Act, 1860.'
  },
  {
    icon: ShieldCheck,
    title: 'Public Trust',
    sub: 'F-81990 (Mumbai)',
    desc: 'Registered under the Bombay Public Trusts Act, 1950.'
  },
  {
    icon: Receipt,
    title: 'Tax Benefits 80G',
    sub: 'AACAO9350QE20251',
    desc: 'Donors receive tax deductions under Section 80G of Income Tax.'
  },
  {
    icon: FileCheck,
    title: 'CSR-1 Approved',
    sub: 'CSR00104417',
    desc: 'Certified by Ministry of Corporate Affairs for CSR initiatives.'
  }
]

export default function TrustBadges() {
  return (
    <section id="trust" className="section section-bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Transparency & Trust</span>
          <h2 className="section-title">Government Accreditations</h2>
          <p className="section-desc">
            Optimum Welfare Foundation is a fully compliant NGO. We maintain strict audit checks and absolute financial transparency.
          </p>
        </div>

        <motion.div 
          className="grid-2 sm-grid-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {BADGES.map((badge, idx) => {
            const IconComp = badge.icon
            return (
              <motion.div 
                key={idx} 
                className="card trust-card"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
              >
                <div className="trust-icon-wrapper">
                  <IconComp size={24} />
                </div>
                <h3 className="trust-title">{badge.title}</h3>
                <span className="trust-id">{badge.sub}</span>
                <p className="trust-desc">{badge.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .sm-grid-4 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .trust-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1.25rem;
          gap: 0.75rem;
        }

        .trust-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: hsl(var(--primary-emerald-light));
          color: hsl(var(--primary-emerald));
          margin-bottom: 0.5rem;
        }

        .trust-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: hsl(var(--primary-emerald));
        }

        .trust-id {
          font-family: monospace;
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--accent-amber));
          background-color: hsl(var(--accent-amber-light));
          padding: 0.25rem 0.625rem;
          border-radius: 6px;
          border: 1px solid rgba(217, 119, 54, 0.1);
        }

        .trust-desc {
          font-size: 0.8rem;
          color: hsl(var(--text-muted));
          line-height: 1.5;
        }

        @media (min-width: 576px) {
          .sm-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .sm-grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  )
}
