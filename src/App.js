import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <nav className="portfolio-nav">
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Projets</a></li>
            <li><a href="#">Compétences</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="portfolio-section">
        <h1>Bienvenue sur mon portfolio</h1>
        <button className="cta-button">Découvrir mes projets</button>
      </section>

      <section className="portfolio-section about-section">
        <div className="about-content">
          <img src="profile-image.jpg" alt="Photo de profil" />
          <div>
            <h2>À propos de moi</h2>
            <p>Bonjour, je suis un développeur web passionné par les nouvelles technologies. J'ai une solide expérience dans la création de sites web et d'applications web performantes et innovantes.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-section projects-section">
        <h2>Mes projets récents</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="project-image-1.jpg" alt="Projet 1" />
            <h3>Projet 1</h3>
            <p>Description du projet 1</p>
            <a href="#" className="project-link">En savoir plus</a>
          </div>
          <div className="project-card">
            <img src="project-image-2.jpg" alt="Projet 2" />
            <h3>Projet 2</h3>
            <p>Description du projet 2</p>
            <a href="#" className="project-link">En savoir plus</a>
          </div>
          <div className="project-card">
            <img src="project-image-3.jpg" alt="Projet 3" />
            <h3>Projet 3</h3>
            <p>Description du projet 3</p>
            <a href="#" className="project-link">En savoir plus</a>
          </div>
        </div>
      </section>

      <section className="portfolio-section skills-section">
        <h2>Mes compétences</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fas fa-code"></i>
            <h4>Développement web</h4>
          </div>
          <div className="skill-item">
            <i className="fas fa-mobile-alt"></i>
            <h4>Développement mobile</h4>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <h4>Gestion de bases de données</h4>
          </div>
          <div className="skill-item">
            <i className="fas fa-chart-bar"></i>
            <h4>Analyse de données</h4>
          </div>
        </div>
      </section>

      <section className="portfolio-section contact-section">
        <h2>Me contacter</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Votre message"></textarea>
          <button type="submit" className="cta-button">Envoyer</button>
        </form>
      </section>

      <footer className="portfolio-footer">
        <p>&copy; 2023 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
