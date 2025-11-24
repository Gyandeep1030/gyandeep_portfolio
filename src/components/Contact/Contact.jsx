import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Linkedin, Github } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const respBody = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const msg = respBody && respBody.message ? respBody.message : 'Failed to send email';
        console.error('Send email failed:', respBody);
        setErrorMessage(msg);
        throw new Error(msg);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      if (!errorMessage) setErrorMessage(error && error.message ? error.message : 'Unknown error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Get In Touch</h2>
          <div className={styles.underline} />
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.subHeading}>Let's Talk</h3>
            <p className={styles.text}>
              I'm open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.infoList}>
              <a href="mailto:Gyandeep1030@gmail.com" className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <span>Gyandeep1030@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/gyandeep1030/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <div className={styles.iconBox}>
                  <Linkedin size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a 
                href="https://github.com/Gyandeep1030" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <div className={styles.iconBox}>
                  <Github size={20} />
                </div>
                <span>GitHub Profile</span>
              </a>

              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <span>New Delhi, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.formCard}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your Name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your Email"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Your Message"
                  rows={5}
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : status === 'error' ? (
                  'Failed to Send'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
              {status === 'error' && errorMessage && (
                <p className={styles.errorText} aria-live="polite">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
