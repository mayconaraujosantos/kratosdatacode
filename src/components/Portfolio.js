import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de e-commerce com painel administrativo, gestão de produtos, pagamentos e relatórios.',
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-commerce+Platform',
      technologies: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' }
      ],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'App de Gestão Financeira',
      description: 'Aplicativo mobile para controle de finanças pessoais com sincronização em nuvem e relatórios detalhados.',
      image: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Finance+App',
      technologies: [
        { icon: <FaMobile />, name: 'React Native' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiMongodb />, name: 'MongoDB' }
      ],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados e métricas de negócio em tempo real.',
      image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Analytics+Dashboard',
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaDatabase />, name: 'API REST' }
      ],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Sistema de CRM',
      description: 'Sistema completo de gestão de relacionamento com clientes, incluindo funil de vendas e automações.',
      image: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=CRM+System',
      technologies: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' }
      ],
      category: 'system',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'App de Delivery',
      description: 'Aplicativo de delivery com geolocalização, pagamentos integrados e sistema de avaliações.',
      image: 'https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Delivery+App',
      technologies: [
        { icon: <FaMobile />, name: 'React Native' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiMongodb />, name: 'MongoDB' }
      ],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Portal Corporativo',
      description: 'Portal interno para empresas com gestão de documentos, comunicação interna e workflows.',
      image: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Corporate+Portal',
      technologies: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' }
      ],
      category: 'system',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'system', label: 'Sistemas' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Nosso Portfólio</h2>
          <p className="section-subtitle">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes, 
            demonstrando nossa expertise em diferentes tecnologias e segmentos.
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" title="Ver projeto">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubUrl} className="project-link" title="Ver código">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="tech-item" title={tech.name}>
                      {tech.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>Gostou do que viu?</h3>
          <p>Vamos criar algo incrível juntos! Entre em contato para discutir seu projeto.</p>
          <a href="#contact" className="btn btn-primary">Iniciar Projeto</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;