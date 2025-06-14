export const recomendarMarcoSimplificado = (inputs) => {
  // 1. Regla prioritaria: Si es dispositivo médico o alto riesgo diagnóstico
  if (inputs.risk === "Alto (apoya decisiones clínicas o diagnósticas críticas)" || 
      inputs.context === "Apoyo al diagnóstico clínico") {
    return "IMDRF";
  }

  // 2. Si se enfoca en resultados de salud reportados por pacientes
  if (inputs.domains.includes("Calidad de vida relacionada con la salud") || 
      inputs.domains.includes("Efectividad clínica")) {
    return "ICHOM";
  }

  // 3. Default para apps de bajo-medio riesgo
  return "NICE";
};

export const recomendarHerramientaPrincipal = (dominio) => {
  const herramientasPriorizadas = {
    "Usabilidad": "SUS",
    "Adherencia al tratamiento": "MMAS-8",
    "Calidad de vida relacionada con la salud": "SF-36",
    "Seguridad y privacidad": "HIPAA Compliance Checklist",
    "Efectividad clínica": "PROMIS",
    "Satisfacción del usuario": "MAUQ"
  };

  return herramientasPriorizadas[dominio] || "No hay herramienta priorizada para este dominio";
};