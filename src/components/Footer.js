import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaArrowUp 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    'Desenvolvimento Web',
    'Aplicativos Mobile',
    'Soluções em Nuvem',
    'Banco de Dados',
    'Integração de Sistemas',
    'Consultoria Técnica'
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-container">
                <img src="/assets/img/logo.png" alt="Kratos Data Code" className="footer-logo-img" />
                <h2>RATOS<span> DATA CODE</span></h2>
              </div>
              <p>
                Transformamos ideias em soluções digitais inovadoras. 
                Sua parceira estratégica em desenvolvimento de sistemas.
              </p>
            </div>
            
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope />
                <span>contato@kratosdatacode.com</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Nossos Serviços</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Siga-nos</h3>
            <div className="social-links">
              <a
                href="https://linkedin.com/company/kratosdatacode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kratosdatacode"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="newsletter">
              <h4>Newsletter</h4>
              <p>Receba nossas últimas novidades</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                />
                <button type="submit" className="btn btn-primary">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Kratos Data Code. Todos os direitos reservados.</p>
            <div className="footer-legal">
              <a href="#privacy">Política de Privacidade</a>
              <a href="#terms">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} title="Voltar ao topo">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;