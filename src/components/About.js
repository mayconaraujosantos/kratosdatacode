import React from 'react';
import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Inovação',
      description: 'Sempre buscamos as tecnologias mais atuais e soluções criativas para cada desafio.'
    },
    {
      icon: <FaUsers />,
      title: 'Colaboração',
      description: 'Trabalhamos como uma extensão da sua equipe, focados no sucesso mútuo.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Qualidade',
      description: 'Entregamos código limpo, documentado e testado seguindo as melhores práticas.'
    },
    {
      icon: <FaHandshake />,
      title: 'Transparência',
      description: 'Mantemos comunicação clara e honesta em todas as etapas do projeto.'
    }
  ];

  const benefits = [
    'Equipe especializada e experiente',
    'Metodologias ágeis de desenvolvimento',
    'Suporte técnico contínuo',
    'Soluções escaláveis e modernas',
    'Foco na experiência do usuário',
    'Entrega dentro do prazo acordado'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre a Kratos Data Code</h2>
            <div className="about-description">
              <p>
                Somos uma consultoria especializada em desenvolvimento de sistemas e prestação 
                de serviços PJ, com foco em transformar ideias em soluções digitais robustas 
                e inovadoras.
              </p>
              <p>
                Nossa missão é ser o parceiro estratégico ideal para empresas que buscam 
                excelência tecnológica, oferecendo desde consultoria especializada até o 
                desenvolvimento completo de sistemas personalizados.
              </p>
              <p>
                Com anos de experiência no mercado, combinamos expertise técnica com 
                visão de negócio para entregar resultados que realmente impactam 
                positivamente nossos clientes.
              </p>
            </div>

            <div className="about-benefits">
              <h3>Por que escolher a Kratos Data Code?</h3>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-values">
            <h3>Nossos Valores</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projetos Concluídos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Clientes Atendidos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Taxa de Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;