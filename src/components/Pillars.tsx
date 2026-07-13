'use client'

import { 
  Baby, GraduationCap, Briefcase, Sprout, HeartPulse, Sunrise 
} from 'lucide-react'
import { motion } from 'framer-motion'

const TIMELINE_STAGES = [
  {
    ageGroup: 'Mothers & Newborns',
    title: 'Healthy Start Program',
    icon: Baby,
    actionPoints: [
      'Maternal nutrition packages for pregnant women in low-income neighborhoods.',
      'Newborn survival kits containing clean clothing, diapers, and basic hygiene items.',
      'Immunization counseling and pediatrician monitoring camps.'
    ],
    metric: '150+ families supported monthly'
  },
  {
    ageGroup: '6 - 18 Years',
    title: 'Education Sponsorships',
    icon: GraduationCap,
    actionPoints: [
      'Direct payment of school fees for children facing drop-out risks.',
      'Distribution of study kits (backpacks, textbooks, and math instruments).',
      'Free evening tutoring classes in community centers.'
    ],
    metric: '400+ students sponsored annually'
  },
  {
    ageGroup: '19 - 35 Years',
    title: 'Job Skills & Livelihood',
    icon: Briefcase,
    actionPoints: [
      'Vocational training courses in IT, tailoring, and electrical works.',
      'Interest-free micro-grants for women seeking to launch home businesses.',
      'Job-matching registry linking local employers with certified candidates.'
    ],
    metric: '80+ micro-businesses funded'
  },
  {
    ageGroup: 'Rural Families',
    title: 'Farming & Rural Growth',
    icon: Sprout,
    actionPoints: [
      'Providing seeds, organic fertilizer, and modern drip irrigation kits to small farmers.',
      'Veterinary camps and livestock health management training.',
      'Drinking water storage structures for water-scarce hamlets.'
    ],
    metric: '5 rural zones actively managed'
  },
  {
    ageGroup: 'Elderly & Low-Income',
    title: 'Healthcare & Nutrition Security',
    icon: HeartPulse,
    actionPoints: [
      'Weekly food distribution drives serving warm, nutritious meals.',
      'Free blood pressure and diabetes diagnostic clinics with free medicine.',
      'Blankets and shelter assistance during monsoon and winter seasons.'
    ],
    metric: '12,000+ meals served annually'
  },
  {
    ageGroup: 'Dignified Exit',
    title: 'Dignity in Farewell',
    icon: Sunrise,
    actionPoints: [
      'Complete cost coverage for final rites and funerals for destitute families.',
      'Grief counseling and logistical assistance for bereaved members.',
      'Ensuring every citizen leaves this world with respect and honor.'
    ],
    metric: '100% free respectful final rites'
  }
]

export default function Pillars() {
  return (
    <section id="pillars" className="section section-bg-white">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Our Roadmap</span>
          <h2 className="section-title">Timeline of Care</h2>
          <p className="section-desc">
            We don’t believe in one-off relief. Optimum Welfare Foundation builds a continuous shield of support from infancy through education, job creation, healthcare, and final rites.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {TIMELINE_STAGES.map((stage, idx) => {
            const IconComp = stage.icon
            return (
              <motion.div 
                key={idx} 
                className="timeline-item"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (idx % 2) * 0.05 }}
              >
                
                {/* Stage Context Tag (Left Column on Desktop) */}
                <div className="timeline-tag-wrapper">
                  <span className="timeline-age-tag">{stage.ageGroup}</span>
                </div>

                {/* Timeline Dot with Icon */}
                <div className="timeline-marker">
                  <div className="marker-icon-wrapper">
                    <IconComp size={16} />
                  </div>
                </div>

                {/* Main Content Box (Right Column on Desktop) */}
                <div className="timeline-content-box card">
                  <div className="box-header">
                    <h3 className="stage-title">{stage.title}</h3>
                    <span className="stage-metric">{stage.metric}</span>
                  </div>
                  
                  <ul className="action-list">
                    {stage.actionPoints.map((point, pIdx) => (
                      <li key={pIdx} className="action-item">
                        <span className="action-bullet"></span>
                        <p className="action-text">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>

      <style jsx>{`
        .timeline-container {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          padding: 1.5rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 3px;
          background: linear-gradient(
            to bottom, 
            hsl(var(--primary-emerald)) 0%, 
            hsl(var(--accent-amber)) 80%, 
            rgba(217, 119, 54, 0.05) 100%
          );
          border-radius: 4px;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 50px;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: 4px;
          top: 0;
          z-index: 10;
        }

        .marker-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: hsl(var(--primary-emerald));
          color: white;
          border: 3px solid white;
          box-shadow: 0 4px 10px rgba(10, 63, 44, 0.15);
          transition: all var(--transition-smooth);
        }

        .timeline-item:hover .marker-icon-wrapper {
          background-color: hsl(var(--accent-amber));
          transform: scale(1.1);
        }

        .timeline-tag-wrapper {
          margin-bottom: 0.75rem;
        }

        .timeline-age-tag {
          display: inline-block;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: hsl(var(--accent-amber));
          background-color: hsl(var(--accent-amber-light));
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(217, 119, 54, 0.12);
        }

        .timeline-content-box {
          border-radius: 24px;
          background: white;
          border: 1px solid hsl(var(--border-light));
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          transition: all var(--transition-smooth);
        }

        .timeline-item:hover .timeline-content-box {
          box-shadow: var(--shadow-md);
          border-color: rgba(10, 63, 44, 0.08);
        }

        .box-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid rgba(10, 63, 44, 0.06);
          padding-bottom: 0.75rem;
        }

        .stage-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: hsl(var(--primary-emerald));
        }

        .stage-metric {
          font-family: var(--font-outfit), sans-serif;
          font-weight: 800;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: hsl(var(--primary-emerald));
          background: hsl(var(--primary-emerald-light));
          padding: 0.2rem 0.5rem;
          border-radius: 5px;
        }

        .action-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .action-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .action-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: hsl(var(--accent-amber));
          margin-top: 0.55rem;
          flex-shrink: 0;
        }

        .action-text {
          font-size: 0.875rem;
          color: hsl(var(--text-dark));
          line-height: 1.55;
        }

        @media (min-width: 768px) {
          .timeline-line {
            left: 200px;
          }

          .timeline-item {
            flex-direction: row;
            padding-left: 0;
            margin-bottom: 2.5rem;
            align-items: flex-start;
          }

          .timeline-tag-wrapper {
            width: 170px;
            text-align: right;
            padding-right: 30px;
            margin-bottom: 0;
            flex-shrink: 0;
            margin-top: 6px;
          }

          .timeline-marker {
            left: 200px;
            transform: translateX(-50%);
            top: 6px;
          }

          .timeline-content-box {
            flex: 1;
            margin-left: 30px;
          }

          .box-header {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}
