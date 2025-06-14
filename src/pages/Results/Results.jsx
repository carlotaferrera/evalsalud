import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Results.module.css';
import BackButton from '../../components/BackButton/BackButton';
import logo from '../../assets/logos/logo.png';

const frameworkInfo = {
  ICHOM: {
    color: '#4fb4c6',
    description: 'Centrado en resultados reportados por pacientes (PROMs)',
    links: [
      { text: '📘 Guía ICHOM', url: 'https://www.ichom.org' },
      { text: '📊 Plantilla de evaluación', url: 'https://example.com/proms' }
    ]
  },
  NICE: {
    color: '#4fb4c6',
    description: 'Enfoque en evaluación de riesgo y beneficio clínico',
    links: [
      { text: '🏥 Estándares NICE', url: 'https://www.nice.org.uk' },
      { text: '📱 Marco ESF', url: 'https://example.com/dht' }
    ]
  },
  IMDRF: {
    color: '#4fb4c6',
    description: 'Marco regulatorio para dispositivos médicos software',
    links: [
      { text: '🛡️ Guía IMDRF', url: 'https://www.imdrf.org' },
      { text: '💻 Checklist FDA', url: 'https://example.com/samd' }
    ]
  }
};

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { framework, tools } = state || {};
  const frameworkData = frameworkInfo[framework] || frameworkInfo.ICHOM;

  // Agrupar herramientas por tipo y mostrar máximo 2 por tipo
  const getTopTools = (toolsList) => {
    const grouped = {};
    toolsList.forEach(tool => {
      if (!grouped[tool.category]) grouped[tool.category] = [];
      grouped[tool.category].push(tool);
    });

    return Object.values(grouped).flatMap(categoryTools =>
      categoryTools.slice(0, 2)
    );
  };

  const refinedTools = tools ? getTopTools(tools) : [];

  const handleGoHome = () => navigate('/');

  return (
    <div className={styles.stepContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} onClick={handleGoHome} style={{ cursor: 'pointer' }} />
        </div>
        <nav className={styles.nav}>
          <button className={styles.navLink} onClick={() => navigate('/aboutus')}>SOBRE NOSOTROS</button>
          <button className={styles.navLink} onClick={() => navigate('/mejoras')}>MEJORAS</button>
          <button className={styles.navLink} onClick={() => navigate('/contacto')}>CONTACTO</button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.progressIndicator}>
          <div className={styles.stepDots}>
            <div className={`${styles.dot} ${styles.active}`} />
            <div className={`${styles.dot} ${styles.active}`} />
            <div className={`${styles.dot} ${styles.active}`} />
          </div>
          <span className={styles.stepText}>Paso 3 de 3</span>
        </div>

        <h1 className={styles.title}>Resultados de tu Evaluación</h1>
        <p className={styles.subtitle}>Te mostramos el marco y las herramientas más adecuadas según tus respuestas.</p>

        <section className={styles.resultSection}>
          <h2 className={styles.sectionTitle}>Marco Recomendado</h2>
          <div className={styles.marcoCard} style={{ borderColor: frameworkData.color }}>
            <h3 style={{ color: frameworkData.color }}>{framework}</h3>
            <p>{frameworkData.description}</p>
            <div className={styles.resourceLinks}>
              {frameworkData.links.map(link => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: frameworkData.color }}>
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.resultSection}>
          <h2 className={styles.sectionTitle}>Herramientas Recomendadas</h2>
          <div className={styles.toolsGrid}>
            {refinedTools.length > 0 ? refinedTools.map(tool => (
              <div key={tool.id} className={styles.toolCard}>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span className={`${styles.complexityBadge} ${styles[tool.complexity]}`}>
                  {tool.complexity === 'alta' ? 'Avanzado' : tool.complexity === 'media' ? 'Intermedio' : 'Básico'}
                </span>
              </div>
            )) : (
              <p>No se han identificado herramientas para este caso.</p>
            )}
          </div>
        </section>

        <section className={styles.resultSection}>
          <h2 className={styles.sectionTitle}>¡Gracias!</h2>
          <p>Esperamos que estas recomendaciones te sean útiles. Puedes volver a empezar si deseas hacer otra evaluación.</p>
        </section>
        <div className={styles.actionsContainer}>
          <button className={styles.secondaryOutlineButton}>
            Descargar resumen (PDF)
          </button>
          <button 
            onClick={handleGoHome}
            className={styles.primaryButton}
          >
            Ir al inicio
          </button>
        </div>
        <BackButton />
      </main>
    </div>
  );
};

export default Results;
