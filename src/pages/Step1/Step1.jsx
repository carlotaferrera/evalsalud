import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import styles from './Step1.module.css';
import BackButton from '../../components/BackButton/BackButton';

const Step1 = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  
  
  // Definir las preguntas y las opciones
  const questions = [
    {
      id: 1,
      question: '¿Qué tipo de aplicación estás evaluando?',
      options: [
        { id: 'A', text: 'Enfermedades crónicas', description: 'Ej. diabetes, hipertensión, etc.' },
        { id: 'B', text: 'Salud mental', description: 'Ej. ansiedad, depresión, etc.' },
        { id: 'C', text: 'Diagnóstico y monitoreo', description: 'Ej. apps que diagnostican o monitorean enfermedades' },
        { id: 'D', text: 'Salud preventiva', description: 'Ej. apps para prevención de enfermedades' },
        { id: 'E', text: 'Rehabilitación', description: 'Ej. apps para rehabilitación física o mental' },
        { id: 'F', text: 'Salud infantil', description: 'Ej. apps centradas en la salud de niños' },
        { id: 'G', text: 'Otra', description: 'Cualquier otro tipo de app' }
      ]
    },
    {
      id: 2,
      question: '¿Cuál es el nivel de riesgo de la aplicación?',
      options: [
        { id: 'A', text: 'Bajo (no afecta decisiones médicas)' },
        { id: 'B', text: 'Medio (influye en comportamiento del usuario)' },
        { id: 'C', text: 'Alto (apoya decisiones clínicas o diagnósticas críticas)' }
      ]
    },
    {
      id: 3,
      question: '¿Qué tipo de validación necesitas?',
      options: [
        { id: 'A', text: 'Validación clínica (eficacia, resultados)' },
        { id: 'B', text: 'Validación técnica (usabilidad, funcionamiento)' },
        { id: 'C', text: 'Validación regulatoria (cumplimiento normativo)' },
        { id: 'D', text: 'Validación experiencial (aceptación, satisfacción)' },
        { id: 'E', text: 'Validación integral (todo lo anterior)' }
      ]
    }
  ];

  const handleOptionSelect = (questionId, optionId) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Lógica para determinar el marco recomendado basado en las respuestas
      const marco = recomendarMarco(newAnswers);
      navigate('/intermediate', { state: { marco } });
    }
  };

  // Función para determinar el marco basado en las respuestas
 const recomendarMarco = (answers) => {
  const tipoApp = answers[1];  // Tipo de aplicación
  const nivelRiesgo = answers[2];  // Nivel de riesgo
  const validacion = answers[3];  // Tipo de validación

  // IMDRF: riesgo alto, diagnóstico, o validación regulatoria
  if (nivelRiesgo === 'C' || tipoApp === 'C' || validacion === 'C') {
    return 'IMDRF';
  }

  // ICHOM: enfermedades crónicas o salud mental + validación clínica o integral
  if (
    (tipoApp === 'A' || tipoApp === 'B') &&
    (validacion === 'A' || validacion === 'E')
  ) {
    return 'ICHOM';
  }

  // NICE: casos restantes, especialmente prevención, rehabilitación, infantil
  return 'NICE';
};

  return (
      <div className={styles.fullPageContainer}>
      <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img 
          src={logo} 
          alt="EVALSALUD Logo" 
          className={styles.logo}
          onClick={() => navigate('/')} // Logo lleva al home
          style={{cursor: 'pointer'}}
        />
      </div>
      
      <nav className={styles.nav}>
        <button 
          onClick={() => navigate('/aboutus')} 
          className={styles.navLink}
        >
          SOBRE NOSOTROS
        </button>
        
        <button 
          onClick={() => navigate('/mejoras')}
          className={styles.navLink}
        >
          MEJORAS
        </button>
        
        <button 
          onClick={() => navigate('/contacto')}
          className={styles.navLink}
        >
          CONTACTO
        </button>
      </nav>
    
    </header>

      <main className={styles.mainContent}>
        <div className={styles.progressIndicator}>
          <div className={styles.stepDots}>
            {questions.map((_, i) => (
              <div key={i} className={`${styles.dot} ${i <= currentQuestion ? styles.active : styles.inactive}`} />
            ))}
          </div>
          <span className={styles.stepText}>Paso {currentQuestion + 1} de 3</span>
        </div>

        <h1 className={styles.title}>{questions[currentQuestion].question}</h1>
        <p className={styles.subtitle}>Selecciona la opción más adecuada</p>

        <div className={styles.gridContainer}>
          {questions[currentQuestion].options.map(option => (
            <div 
              key={option.id}
              className={`${styles.categoryCard} ${answers[questions[currentQuestion].id] === option.id ? styles.selected : ''}`}
              onClick={() => handleOptionSelect(questions[currentQuestion].id, option.id)}
            >
              <h3 className={styles.categoryName}>{option.text}</h3>
              <p className={styles.categoryDescription}>{option.description}</p>
            </div>
          ))}
        </div>
      </main>
      <BackButton />
    </div>
  );
};

export default Step1;
