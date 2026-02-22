import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './ContactWithTeam.module.css';

const ContactWithTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dentist: '',
    message: '',
    terms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        dentist: '',
        message: '',
        terms: false
      });
    }, 3000);
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. G. Vishwa Teja Rao',
      role: 'MDS, Pediatric Dentist',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    {
      id: 2,
      name: 'Dr. Nishitha',
      role: 'MEM, Emergency Medicine',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    {
      id: 3,
      name: 'Dr. Pooja Shanker',
      role: 'MDS Pediatric Dentist',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    {
      id: 4,
      name: 'Dr. B. Yamini Chandra',
      role: 'MDS Endodontist',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    }
  ];

  return (
    <section className={styles.contactWithTeam} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.contentWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Side - Contact Form */}
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>Start Your Smile Journey</h2>
            <p className={styles.formDescription}>
              Book your consultation today and take the first step toward a healthier, more confident smile.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="dentist" className={styles.label}>Select Dentist *</label>
                  <select
                    id="dentist"
                    name="dentist"
                    value={formData.dentist}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Choose a dentist</option>
                    <option value="dr-vishwa">Dr. G. Vishwa Teja Rao</option>
                    <option value="dr-nishitha">Dr. Nishitha</option>
                    <option value="dr-pooja">Dr. Pooja Shanker</option>
                    <option value="dr-yamini">Dr. B. Yamini Chandra</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="4"
                  placeholder="Tell us about your dental needs..."
                ></textarea>
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms">
                  I agree to all Terms and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M16.67 5L7.5 14.17L3.33 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Book Appointment
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Team Member Cards */}
          <div className={styles.teamSection}>
            <h2 className={styles.teamTitle}>Meet Our Professional Team</h2>
            <p className={styles.teamDescription}>
              Our dedicated team of dental professionals is committed to providing exceptional care.
            </p>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className={styles.teamCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={styles.teamCardImage}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.teamMemberImage}
                    />
                  </div>
                  <div className={styles.teamCardInfo}>
                    <h3 className={styles.teamMemberName}>{member.name}</h3>
                    <p className={styles.teamMemberRole}>{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactWithTeam;
