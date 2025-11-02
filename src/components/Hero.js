import React from 'react';
import { FaRocket, FaCode, FaUsers } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transformamos Ideias em 
              <span className="highlight"> Soluções Digitais</span>
            </h1>
            <p className="hero-subtitle">
              A Kratos Data Code é sua parceira estratégica em desenvolvimento de sistemas, 
              oferecendo consultoria especializada e serviços PJ para impulsionar seu negócio 
              no mundo digital.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Iniciar Projeto
              </a>
              <a href="#services" className="btn btn-outline">
                Nossos Serviços
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-icon">
                <FaRocket />
              </div>
              <h3>50+</h3>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <FaCode />
              </div>
              <h3>5+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <h3>30+</h3>
              <p>Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <a href="#services">
          <div className="scroll-indicator"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;