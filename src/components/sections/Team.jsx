import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styles from './Team.module.css';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const teamMembers = [
    {
      id: 1,
      name: 'Dr. G. Vishwa Teja Rao',
      role: 'MDS, Pediatric Dentist',
      description: 'Our administrative team is the backbone of our dental clinic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        dribbble: 'https://dribbble.com'
      }
    },
    {
      id: 2,
      name: 'Dr. Nishitha',
      role: 'MEM, Masters in Emergency Medicine',
      description: 'Our administrative team is the backbone of our dental clinic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        dribbble: 'https://dribbble.com'
      }
    },
    {
      id: 3,
      name: 'Dr. Pooja Shanker',
      role: 'MDS Pediatric Dentist',
      description: 'Our administrative team is the backbone of our dental clinic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        dribbble: 'https://dribbble.com'
      }
    },
    {
      id: 4,
      name: 'Dr. B. Yamini Chandra',
      role: 'MDS Endodontist',
      description: 'Our administrative team is the backbone of our dental clinic.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        dribbble: 'https://dribbble.com'
      }
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={styles.team} ref={ref} aria-labelledby="team-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="team-heading" className={styles.sectionTitle}>
              Meet our professional team
            </h2>
            <p className={styles.sectionDescription}>
              Our dedicated team of dental professionals is committed to providing exceptional 
              care and creating positive experiences for our patients.
            </p>
          </div>
          <div className={styles.headerButtons}>
            <Link to="/about-us" className={styles.outlineButton}>
              About Us
            </Link>
            <Link to="/career" className={styles.outlineButton}>
              Open Positions
            </Link>
          </div>
        </div>

        <motion.div
          className={styles.teamGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member) => (
            <motion.article
              key={member.id}
              className={styles.teamCard}
              variants={itemVariants}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className={styles.memberImage}
                  loading="lazy"
                />
                <div className={styles.socialOverlay}>
                  <div className={styles.socialLinks}>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M13.33 6.67C14.66 6.67 15.93 7.2 16.87 8.13C17.8 9.07 18.33 10.34 18.33 11.67V17.5H15V11.67C15 11.11 14.78 10.57 14.39 10.18C14 9.78 13.46 9.57 12.9 9.57C12.34 9.57 11.8 9.78 11.41 10.18C11.02 10.57 10.8 11.11 10.8 11.67V17.5H7.5V11.67C7.5 10.34 8.03 9.07 8.96 8.13C9.9 7.2 11.16 6.67 13.33 6.67Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.17 7.5H0.83V17.5H4.17V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="2.5" cy="3.33" r="1.67" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M19.17 3.75C18.5 4.08 17.78 4.31 17.03 4.42C17.8 3.94 18.39 3.19 18.67 2.31C17.94 2.75 17.14 3.06 16.31 3.22C15.62 2.47 14.64 2 13.58 2C11.53 2 9.87 3.66 9.87 5.71C9.87 6.03 9.91 6.34 9.98 6.64C7.13 6.49 4.61 5.03 2.92 2.81C2.57 3.39 2.37 4.08 2.37 4.81C2.37 6.19 3.07 7.42 4.13 8.14C3.49 8.12 2.89 7.94 2.36 7.64V7.69C2.36 9.49 3.63 11 5.31 11.36C4.97 11.46 4.61 11.51 4.24 11.51C3.98 11.51 3.72 11.48 3.47 11.43C3.99 12.92 5.36 14 6.98 14.03C5.72 15.04 4.14 15.64 2.42 15.64C2.09 15.64 1.77 15.62 1.45 15.58C3.09 16.65 5.05 17.27 7.17 17.27C13.58 17.27 17.09 11.58 17.09 6.17C17.09 6 17.08 5.83 17.07 5.67C17.81 5.12 18.45 4.44 18.95 3.67L19.17 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Dribbble profile`}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.5 10C2.5 10 5 9 10 13C15 17 17.5 10 17.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
