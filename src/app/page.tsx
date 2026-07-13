'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Calculator from '@/components/Calculator'
import TrustBadges from '@/components/TrustBadges'
import VolunteerForm from '@/components/VolunteerForm'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Mission Section (Quick overview before programs) */}
        <section id="mission" className="section section-bg-light">
          <div className="container">
            <div className="grid-2">
              <motion.div 
                className="mission-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="section-badge font-bold">Our Core Mandate</span>
                <h2 className="section-title" style={{ fontSize: '2.5rem' }}>A Complete Lifecycle of Compassionate Support</h2>
                <p className="section-desc" style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  At Optimum Welfare Foundation, we recognize that true welfare cannot be short-term. We support people through every major stage of life with care, dignity, and access to sustainable opportunities.
                </p>
                <p className="section-desc" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  From safeguarding the early weeks of a newborn’s life to creating pathways for higher education, career skills, job creation, rural development, and dignified final rites, our interventions build a continuous shield of social security.
                </p>
              </motion.div>
              <motion.div 
                className="mission-highlight-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="card mission-card">
                  <h3 className="card-heading">National Vision, Local Care</h3>
                  <p className="card-text">
                    Headquartered in Mumbai, Maharashtra, and registered with the Charity Commissioner, we coordinate a network of zonal committees that execute local implementation projects with high transparency.
                  </p>
                  <div className="mission-stat">
                    <span className="stat-num">50%</span>
                    <span className="stat-lbl">Income Tax Rebate (Section 80G)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <style jsx>{`
            .mission-text {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .mission-highlight-card {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .mission-card {
              background: linear-gradient(135deg, hsl(var(--primary-emerald)) 0%, #062b1e 100%);
              color: white;
              border: none;
              padding: 2rem;
              border-radius: 24px;
            }
            .card-heading {
              color: hsl(var(--accent-amber));
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }
            .card-text {
              font-size: 0.95rem;
              color: rgba(255, 255, 255, 0.85);
              line-height: 1.6;
              margin-bottom: 2rem;
            }
            .mission-stat {
              border-top: 1px solid rgba(255, 255, 255, 0.15);
              padding-top: 1.5rem;
              display: flex;
              flex-direction: column;
              gap: 0.25rem;
            }
            .stat-num {
              font-size: 2.25rem;
              font-weight: 900;
              font-family: var(--font-outfit), sans-serif;
              color: white;
            }
            .stat-lbl {
              font-size: 0.75rem;
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.5px;
              color: hsl(var(--accent-amber));
            }
          `}</style>
        </section>

        <Pillars />
        <Calculator />
        <TrustBadges />
        <VolunteerForm />
      </main>
      <Footer />
    </>
  )
}
