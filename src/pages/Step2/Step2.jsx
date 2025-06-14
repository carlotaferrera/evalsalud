import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Step2.module.css';
import logo from '../../assets/logos/logo.png';
import BackButton from '../../components/BackButton/BackButton';

// Base de datos con categoría explícita
const toolDatabase = {
  usabilidad: [
    { id: 'sus', name: 'SUS', description: 'Evaluación rápida de usabilidad general', complexity: 'baja', category: 'usabilidad' },
    { id: 'mauq', name: 'MAUQ', description: 'Usabilidad específica para apps de salud', complexity: 'media', category: 'usabilidad' },
    { id: 'iso9241', name: 'ISO 9241', description: 'Evaluación técnica exhaustiva', complexity: 'alta', category: 'usabilidad' }
  ],
  adherencia: [
    { id: 'mmas8', name: 'MMAS-8', description: 'Medición de adherencia a medicación', complexity: 'baja', category: 'adherencia' },
    { id: 'mems', name: 'MEMS', description: 'Registro electrónico de uso', complexity: 'alta', category: 'adherencia' },
    { id: 'bmq', name: 'BMQ', description: 'Identificación de barreras', complexity: 'media', category: 'adherencia' }
  ],
  calidadVida: [
    { id: 'sf36', name: 'SF-36', description: 'Evaluación física y emocional completa', complexity: 'media', category: 'calidadVida' },
    { id: 'eq5d', name: 'EQ-5D', description: 'Medición rápida para análisis económicos', complexity: 'baja', category: 'calidadVida' },
    { id: 'whoqol', name: 'WHOQOL-BREF', description: 'Evaluación global de bienestar', complexity: 'media', category: 'calidadVida' },
    { id: 'promis', name: 'PROMIS', description: 'Resultados estandarizados', complexity: 'alta', category: 'calidadVida' }
  ],
  seguridad: [
    { id: 'hipaa', name: 'HIPAA', description: 'Cumplimiento de privacidad en EE.UU.', complexity: 'alta', category: 'seguridad' },
    { id: 'consort', name: 'CONSORT-eHealth', description: 'Estándar para estudios clínicos', complexity: 'alta', category: 'seguridad' }
  ],
  accesibilidad: [
    { id: 'wcag', name: 'WCAG', description: 'Estándar para discapacidades', complexity: 'media', category: 'accesibilidad' },
    { id: 'iso9241-acc', name: 'ISO 9241', description: 'Normas generales de accesibilidad', complexity: 'alta', category: 'accesibilidad' }
  ]
};

// Preguntas (puedes adaptar si añades la cuarta)
const questions = [
  {
    id: 'userType',
    question: '¿Quiénes son los principales usuarios de tu aplicación?',
    options: [
      {
        text: 'Pacientes mayores o con poca experiencia tecnológica',
        recommendations: {
          usabilidad: ['mauq', 'sus'],
          adherencia: ['mmas8'],
          calidadVida: ['eq5d']
        }
      },
      {
        text: 'Pacientes adultos con cierta experiencia tecnológica',
        recommendations: {
          usabilidad: ['sus'],
          adherencia: ['mmas8', 'bmq'],
          calidadVida: ['sf36', 'eq5d']
        }
      },
      {
        text: 'Profesionales de la salud',
        recommendations: {
          usabilidad: ['iso9241'],
          seguridad: ['hipaa', 'consort'],
          accesibilidad: ['wcag']
        }
      }
    ]
  },
  {
    id: 'appComplexity',
    question: '¿Qué nivel de complejidad tiene tu aplicación?',
    options: [
      {
        text: 'Simple (información básica, recordatorios)',
        recommendations: {
          usabilidad: ['sus'],
          adherencia: ['mmas8']
        }
      },
      {
        text: 'Intermedia (seguimiento de síntomas, datos básicos)',
        recommendations: {
          usabilidad: ['mauq'],
          calidadVida: ['eq5d', 'whoqol'],
          seguridad: ['hipaa']
        }
      },
      {
        text: 'Compleja (diagnóstico, tratamiento, integración clínica)',
        recommendations: {
          usabilidad: ['iso9241'],
          calidadVida: ['promis', 'sf36'],
          seguridad: ['consort', 'hipaa'],
          accesibilidad: ['iso9241-acc']
        }
      }
    ]
  },
  {
    id: 'validationNeeds',
    question: '¿Qué aspecto necesitas validar prioritariamente?',
    options: [
      {
        text: 'Facilidad de uso y experiencia del usuario',
        recommendations: {
          usabilidad: ['sus', 'mauq'],
          accesibilidad: ['wcag']
        }
      },
      {
        text: 'Impacto clínico y resultados en salud',
        recommendations: {
          calidadVida: ['sf36', 'promis'],
          adherencia: ['mems', 'bmq']
        }
      },
      {
        text: 'Cumplimiento normativo y seguridad',
        recommendations: {
          seguridad: ['hipaa', 'consort'],
          accesibilidad: ['iso9241-acc']
        }
      }
    ]
  }
];

const Step2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toolScores, setToolScores] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionSelect = (recommendations) => {
    const updatedScores = { ...toolScores };
    for (const category in recommendations) {
      recommendations[category].forEach(toolId => {
        updatedScores[toolId] = (updatedScores[toolId] || 0) + 1;
      });
    }
    setToolScores(updatedScores);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const getToolDetails = (toolId) => {
    for (const category in toolDatabase) {
      const tool = toolDatabase[category].find(t => t.id === toolId);
      if (tool) return { ...tool, score: toolScores[toolId] || 0 };
    }
    return null;
  };

  const handleFinish = () => {
const groupedTools = {};

  Object.keys(toolScores).forEach(toolId => {
    const tool = getToolDetails(toolId);
    if (tool) {
      if (!groupedTools[tool.category]) groupedTools[tool.category] = [];
      groupedTools[tool.category].push(tool);
    }
  });

  const selected = Object.values(groupedTools)
    .map(tools => tools.sort((a, b) => b.score - a.score).slice(0, 1)) // máximo 1 por categoría
    .flat();


    navigate('/results', {
      state: {
        tools: selected,
        framework: state?.marco || 'ICHOM'
      }
    });
  };

  return (
    <div className={styles.stepContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} onClick={() => navigate('/')} />
        </div>
        <nav className={styles.nav}>
          <button className={styles.navLink} onClick={() => navigate('/aboutus')}>SOBRE NOSOTROS</button>
          <button className={styles.navLink} onClick={() => navigate('/mejoras')}>MEJORAS</button>
          <button className={styles.navLink} onClick={() => navigate('/contacto')}>CONTACTO</button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        {!isComplete ? (
          <>
            <div className={styles.progressIndicator}>
              <div className={styles.stepDots}>
                {questions.map((_, i) => (
                  <div key={i} className={`${styles.dot} ${i <= currentQuestion ? styles.active : styles.inactive}`} />
                ))}
              </div>
              <span className={styles.stepText}>Paso {currentQuestion + 1} de {questions.length}</span>
            </div>

            <h1 className={styles.title}>{questions[currentQuestion].question}</h1>
            <p className={styles.subtitle}>Selecciona la opción que mejor describa tu aplicación</p>

            <div className={styles.optionsGrid}>
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={styles.optionCard}
                  onClick={() => handleOptionSelect(option.recommendations)}
                >
                  <h3 className={styles.optionText}>{option.text}</h3>
                  <div className={styles.recommendationBadge}>
                    {Object.values(option.recommendations).flat().length} herramientas recomendadas
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.summaryContainer}>
            <h1 className={styles.title}>¡Recomendación completada!</h1>
            <p className={styles.subtitle}>Estas son las herramientas mejor puntuadas</p>
            <div className={styles.toolsGrid}>
              {Object.keys(toolScores).length === 0 ? (
                <p>No se identificaron herramientas.</p>
              ) : (
                Object.entries(toolScores)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 6)
                  .map(([id]) => {
                    const tool = getToolDetails(id);
                    return tool ? (
                      <div key={id} className={styles.toolCard}>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                        <span className={`${styles.complexityBadge} ${styles[tool.complexity]}`}>
                          {tool.complexity === 'alta' ? 'Avanzado' : tool.complexity === 'media' ? 'Intermedio' : 'Básico'}
                        </span>
                      </div>
                    ) : null;
                  })
              )}
            </div>
            <button className={styles.finishButton} onClick={handleFinish}>Ver detalles completos</button>
          </div>
        )}
      </main>

      <BackButton />
    </div>
  );
};

export default Step2;
