import React, { useState, useEffect } from 'react';
import {  Mail, Phone, MapPin, Github, Linkedin, Code, Award, BookOpen, User, Briefcase, Star, ExternalLink, Calendar, Download } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="hero-avatar-inner">
              <div className="hero-avatar-fallback">
                <User size={80} className="hero-avatar-icon" />
              </div>
            </div>
          </div>
          
          <h1 className="hero-title">
            Ankitha H A
          </h1>
          
          <p className="hero-subtitle">
            Enthusiastic Computer Science Student & <br />
            <span className="highlight">Full Stack Developer</span>
          </p>
          
          <p className="hero-description">
            I am passionate about applying my skills in coding, problem-solving, and software development 
            to create efficient and effective solutions while continuing to grow and learn.
          </p>
          
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => window.open('mailto:hankitha4@gmail.com')}
              className="btn-secondary"
            >
              <Mail size={20} className="button-icon" />
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">
              Let's Connect
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="contact-description">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
          
          <div className="contact-links">
            <a href="mailto:hankitha4@gmail.com" className="contact-link">
              <Mail className="contact-icon" size={24} />
              <span>hankitha4@gmail.com</span>
            </a>
            <a href="tel:+918217831584" className="contact-link">
              <Phone className="contact-icon" size={24} />
              <span>+91 8217831584</span>
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Ankitha2807" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github className="social-icon" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ankitha-k-n-4a9a95267" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin className="social-icon" size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App; 