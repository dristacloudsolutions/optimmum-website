'use client'

import { useState } from 'react'
import { 
  User, Mail, Phone, Calendar, Briefcase, Clock, 
  MapPin, BookOpen, Upload, CheckCircle2, Loader2 
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: 'male',
    date_of_birth: '',
    occupation: '',
    availability: '',
    skills: '',
    address: '',
    motivation: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [idFileName, setIdFileName] = useState('')
  const [photoFileName, setPhotoFileName] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'id' | 'photo') => {
    const file = e.target.files?.[0]
    if (file) {
      if (type === 'id') setIdFileName(file.name)
      if (type === 'photo') setPhotoFileName(file.name)
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.first_name.trim()) errors.first_name = 'First name is required'
    if (!formData.email.trim()) errors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email address'

    if (!formData.phone.trim()) errors.phone = 'Phone number is required'
    else if (!/^[0-9]{10,12}$/.test(formData.phone.replace(/\s/g, '').replace(/\+/g, ''))) {
      errors.phone = 'Invalid phone number'
    }

    if (!formData.motivation.trim()) {
      errors.motivation = 'Please share your motivation to volunteer'
    } else if (formData.motivation.length < 15) {
      errors.motivation = 'Please write a bit more (minimum 15 characters)'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      setError('Please resolve the errors highlighted below.')
      return
    }

    setLoading(true)

    // Simulate API submission just like on a real client dashboard
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Submitting Volunteer Application:', formData)
      setSuccess(true)
    } catch {
      setError('An error occurred during submission. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section id="volunteer-register" className="section section-bg-light">
        <div className="container">
          <div className="success-card card animate-fade-in">
            <div className="success-icon-box">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="success-title">Application Submitted!</h2>
            <p className="success-text">
              Thank you for applying to volunteer with Optimum Welfare Foundation. Our team will review your skills and availability and contact you within 2-3 business days.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setSuccess(false)
                setFormData({
                  first_name: '',
                  last_name: '',
                  email: '',
                  phone: '',
                  gender: 'male',
                  date_of_birth: '',
                  occupation: '',
                  availability: '',
                  skills: '',
                  address: '',
                  motivation: ''
                })
                setIdFileName('')
                setPhotoFileName('')
              }}
            >
              Submit Another Application
            </button>
          </div>
        </div>
        <style jsx>{`
          .success-card {
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 4rem 2rem;
            border-radius: 28px;
            background: white;
            box-shadow: var(--shadow-lg);
          }
          .success-icon-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background-color: #27c93f;
            color: white;
            margin-bottom: 2rem;
            box-shadow: 0 8px 24px rgba(39, 201, 63, 0.25);
          }
          .success-title {
            font-size: 2rem;
            font-weight: 900;
            color: hsl(var(--primary-emerald));
            margin-bottom: 1rem;
          }
          .success-text {
            font-size: 1rem;
            color: hsl(var(--text-muted));
            line-height: 1.6;
            margin-bottom: 2.5rem;
            max-width: 460px;
          }
        `}</style>
      </section>
    )
  }

  return (
    <section id="volunteer-register" className="section section-bg-light">
      <div className="container">
        
        <div className="section-header">
          <span className="section-badge">Join Us</span>
          <h2 className="section-title">Become a Volunteer</h2>
          <p className="section-desc">
            Your skills and time can change lives. Fill out the application form below, and become a part of our national support team.
          </p>
        </div>

        <motion.div 
          className="form-card card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {error && (
            <div className="error-banner">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="register-form">
            
            {/* Section: Personal Info */}
            <h3 className="form-section-title">1. Personal Information</h3>
            <div className="form-grid">
              
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={16} />
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`form-input ${validationErrors.first_name ? 'error' : ''}`}
                  />
                </div>
                {validationErrors.first_name && (
                  <span className="error-text">{validationErrors.first_name}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Last Name</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={16} />
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={16} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com"
                    className={`form-input ${validationErrors.email ? 'error' : ''}`}
                  />
                </div>
                {validationErrors.email && (
                  <span className="error-text">{validationErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <div className="input-wrapper">
                  <Phone className="input-icon" size={16} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className={`form-input ${validationErrors.phone ? 'error' : ''}`}
                  />
                </div>
                {validationErrors.phone && (
                  <span className="error-text">{validationErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <div className="input-wrapper">
                  <Calendar className="input-icon" size={16} />
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

            </div>

            {/* Section: Skills & Context */}
            <h3 className="form-section-title pt-section">2. Profile & Availability</h3>
            <div className="form-grid">
              
              <div className="form-group">
                <label className="form-label">Occupation</label>
                <div className="input-wrapper">
                  <Briefcase className="input-icon" size={16} />
                  <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select Occupation</option>
                    <option value="student">Student</option>
                    <option value="professional">Working Professional</option>
                    <option value="business">Self-Employed</option>
                    <option value="homemaker">Homemaker</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Availability</label>
                <div className="input-wrapper">
                  <Clock className="input-icon" size={16} />
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select Availability</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="flexible">Flexible / Hours as needed</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Skills & Hobbies (Comma separated)</label>
                <div className="input-wrapper">
                  <BookOpen className="input-icon" size={16} />
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g. Teaching, Design, Event Management, Driving"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Current Address</label>
                <div className="input-wrapper">
                  <MapPin className="input-icon" size={16} />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Locality, City, State"
                    className="form-input"
                  />
                </div>
              </div>

            </div>

            {/* Section: Uploads */}
            <h3 className="form-section-title pt-section">3. Supporting Documents</h3>
            <div className="upload-grid">
              
              <div className="upload-box">
                <span className="upload-label">Government ID Proof *</span>
                <label className="upload-dropzone">
                  <Upload size={20} className="upload-icon" />
                  <span className="upload-text">{idFileName || 'Upload Aadhaar / PAN / Voter ID'}</span>
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => handleFileChange(e, 'id')}
                    className="hidden-file-input"
                  />
                </label>
              </div>

              <div className="upload-box">
                <span className="upload-label">Passport Size Photo *</span>
                <label className="upload-dropzone">
                  <Upload size={20} className="upload-icon" />
                  <span className="upload-text">{photoFileName || 'Upload Passport Size Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'photo')}
                    className="hidden-file-input"
                  />
                </label>
              </div>

            </div>

            {/* Section: Motivation */}
            <h3 className="form-section-title pt-section">4. Statement of Intent</h3>
            <div className="form-group full-width">
              <label className="form-label">Why do you want to join Optimum Welfare Foundation? *</label>
              <textarea
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Share briefly why you want to support our mission..."
                className={`form-textarea ${validationErrors.motivation ? 'error' : ''}`}
              />
              {validationErrors.motivation && (
                <span className="error-text">{validationErrors.motivation}</span>
              )}
            </div>

            <div className="form-submit-wrapper">
              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary btn-lg submit-btn"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting application...
                  </>
                ) : 'Submit Volunteer Application'}
              </button>
            </div>

          </form>
        </motion.div>

      </div>

      <style jsx>{`
        .form-card {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 28px;
          padding: 2.25rem 1.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(10, 63, 44, 0.06);
        }

        .error-banner {
          background-color: #fef2f2;
          border: 1px solid #fee2e2;
          color: #dc2626;
          padding: 1rem 1.5rem;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .form-section-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: hsl(var(--primary-emerald));
          margin-bottom: 1.25rem;
          border-left: 3px solid hsl(var(--accent-amber));
          padding-left: 0.75rem;
        }

        .pt-section {
          margin-top: 1.75rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .full-width {
            grid-column: span 2;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: hsl(var(--text-dark));
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: hsl(var(--text-muted));
          pointer-events: none;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.5rem;
          background-color: hsl(var(--bg-soft));
          border: 2px solid transparent;
          border-radius: 14px;
          font-size: 0.9rem;
          font-family: inherit;
          color: hsl(var(--text-dark));
          font-weight: 500;
          transition: all var(--transition-smooth);
          outline: none;
        }

        .form-select {
          padding-left: 1rem;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
        }

        .form-textarea {
          padding: 1rem;
          resize: vertical;
          min-height: 100px;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: hsl(var(--primary-emerald));
          background-color: white;
          box-shadow: 0 4px 12px rgba(10, 63, 44, 0.04);
        }

        .form-input.error, .form-textarea.error {
          border-color: #f87171;
          background-color: #fff5f5;
        }

        .error-text {
          font-size: 0.75rem;
          font-weight: 700;
          color: #dc2626;
          margin-left: 0.25rem;
        }

        /* Upload zone styles */
        .upload-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .upload-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .upload-box {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .upload-label {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: hsl(var(--text-dark));
        }

        .upload-dropzone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          height: 110px;
          border: 2px dashed rgba(10, 63, 44, 0.15);
          border-radius: 16px;
          cursor: pointer;
          background-color: hsl(var(--bg-soft));
          transition: all var(--transition-smooth);
          padding: 1rem;
          text-align: center;
        }

        .upload-dropzone:hover {
          border-color: hsl(var(--primary-emerald));
          background-color: hsl(var(--primary-emerald-light));
        }

        .upload-icon {
          color: hsl(var(--primary-emerald));
        }

        .upload-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: hsl(var(--text-muted));
          word-break: break-all;
        }

        .hidden-file-input {
          display: none;
        }

        .form-submit-wrapper {
          margin-top: 1.75rem;
          display: flex;
          justify-content: center;
        }

        .submit-btn {
          width: 100%;
          max-width: 360px;
        }
      `}</style>
    </section>
  )
}
