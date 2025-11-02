import React from 'react';
import { 
  FaLaptopCode, 
  FaMobile, 
  FaCloud, 
  FaDatabase, 
  FaCog, 
  FaUsers,
  FaRocket,
  FaShieldAlt 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas e responsivas utilizando as melhores tecnologias do mercado.',
      features: ['React.js', 'Node.js', 'APIs RESTful', 'Progressive Web Apps']
    },
    {
      icon: <FaMobile />,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de apps nativos e híbridos para iOS e Android com foco na experiência do usuário.',
      features: ['React Native', 'Flutter', 'iOS Native', 'Android Native']
    },
    {
      icon: <FaCloud />,
      title: 'Soluções em Nuvem',
      description: 'Migração e implementação de sistemas na nuvem com alta disponibilidade e escalabilidade.',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      icon: <FaDatabase />,
      title: 'Banco de Dados',
      description: 'Modelagem, otimização e gestão de bancos de dados para máxima performance.',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'Data Analytics']
    },
    {
      icon: <FaCog />,
      title: 'Integração de Sistemas',
      description: 'Conectamos seus sistemas existentes criando fluxos eficientes de informação.',
      features: ['APIs', 'Webhooks', 'ETL', 'Microserviços']
    },
    {
      icon: <FaUsers />,
      title: 'Consultoria Técnica',
      description: 'Orientação estratégica para tomada de decisões tecnológicas assertivas.',
      features: ['Arquitetura', 'Code Review', 'Mentoria', 'Planejamento']
    },
    {
      icon: <FaRocket />,
      title: 'MVP & Protótipos',
      description: 'Desenvolvemos MVPs rapidamente para validar suas ideias no mercado.',
      features: ['Prototipagem', 'Validação', 'Iteração', 'Feedback']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Segurança & Compliance',
      description: 'Implementamos as melhores práticas de segurança e conformidade.',
      features: ['LGPD', 'Criptografia', 'Auditoria', 'Testes de Segurança']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em tecnologia, desde o planejamento até a implementação 
            e manutenção dos seus projetos digitais.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Precisa de um serviço personalizado?</h3>
          <p>Entre em contato conosco para discutir suas necessidades específicas</p>
          <a href="#contact" className="btn btn-primary">Falar com Especialista</a>
        </div>
      </div>
    </section>
  );
};

export default Services;