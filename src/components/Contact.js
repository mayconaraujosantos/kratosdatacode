import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaPaperPlane 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'E-mail',
      info: 'contato@kratosdatacode.com',
      link: 'mailto:contato@kratosdatacode.com'
    },
    {
      icon: <FaPhone />,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      info: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/kratosdatacode'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/kratosdatacode'
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e vamos discutir como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos conversar</h3>
            <p>
              Estamos aqui para ajudar você a encontrar a melhor solução tecnológica 
              para seu negócio. Entre em contato através de qualquer um dos canais abaixo.
            </p>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-method">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <span>{item.info}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Nos siga nas redes sociais</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Tipo de Serviço</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="mobile">Aplicativo Mobile</option>
                    <option value="cloud">Soluções em Nuvem</option>
                    <option value="database">Banco de Dados</option>
                    <option value="integration">Integração de Sistemas</option>
                    <option value="consulting">Consultoria Técnica</option>
                    <option value="other">Outros</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Conte-nos mais sobre seu projeto..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;