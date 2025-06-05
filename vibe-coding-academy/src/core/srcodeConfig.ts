// src/core/srcodeConfig.ts

export const OPENROUTER_CONFIG = {
  baseURL: 'https://openrouter.ai/api/v1',
  models: {
    primary: 'meta-llama/llama-3.1-8b-instruct:free',
    fallback: 'microsoft/phi-3-mini-128k-instruct:free',
    creative: 'google/gemma-2-9b-it:free',
    analytical: 'mistralai/mistral-7b-instruct:free'
  }
};

export const SrCodePersonality = {
  role: "Eres SrCode, un mentor de programación carismático con poderes de IA. Tu personalidad es amigable, motivadora y ligeramente juguetona. Siempre usas emojis relevantes y haces referencias a conceptos de programación como metáforas de la vida real. Tu misión es hacer que aprender programación sea adictivo y divertido.",
  powers: [
    "🔍 Análisis de código instantáneo",
    "🎯 Detección de errores con precisión láser",
    "💡 Generación de ejercicios personalizados",
    "🚀 Optimización de código automática",
    "🎭 Explicaciones con analogías creativas",
    "⚡ Debugging asistido en tiempo real"
  ],
  responses: {
    greeting: "¡Hola! 👋 Soy SrCode, tu mentor IA personal. Mis poderes de inteligencia artificial están aquí para hacer que domines la programación como un verdadero mago del código ✨",
    encouragement: [
      "¡Excelente trabajo! 🎉 Tus habilidades de código están evolucionando rápidamente",
      "¡Increíble! 🔥 Ese bug no tenía oportunidad contra tu lógica",
      "¡Fantástico! 🌟 Estás programando como un verdadero ninja del código"
    ],
    helpOffer: "🤖 Mis poderes de IA detectan que podrías necesitar ayuda. ¿Qué tal si analizamos este código juntos?"
  }
};

// NEW: XP System Configuration
export const XP_SYSTEM_SRCODE = {
  completedLesson: 50,    // Example value, adjust as needed
  perfectScore: 100,      // Example value
  helpFromSrCode: 25,     // Example value (maybe for using a specific help command)
  independentSolve: 150,  // Example value
  dailyStreak: 25,        // Example value
  weeklyChallenge: 200,   // Example value
  srCodeApproval: 75,     // Example value (e.g., SrCode "likes" your solution)
  codeOptimization: 100,  // XP for using the optimizer tool (if different from basic analysis)
  bugHunting: 125,        // Example value (e.g., finding a bug in a challenge)
  projectCompletion: 500, // Example value
  interactionWithSrCode: 5, // Added this earlier for basic chat interaction
  codeAnalysis: 25,       // XP for using the Code Analysis feature (set in previous step, ensure consistency or adjust)
};

// NEW: SrCode Themed Levels
export const SRCODE_LEVELS: {
  [key: number]: { xp: number; title: string; badge: string; power: string }
} = {
  1: { xp: 0, title: "Aprendiz de SrCode", badge: "🌱", power: "Sintaxis Básica" },
  5: { xp: 1000, title: "Discípulo del Código", badge: "⚡", power: "Debug Vision" },
  10: { xp: 3000, title: "Guerrero Digital", badge: "⚔️", power: "Logic Master" },
  15: { xp: 6000, title: "Mago del Algoritmo", badge: "🔮", power: "Pattern Recognition" },
  20: { xp: 10000, title: "Señor del Framework", badge: "👑", power: "Architecture Sight" },
  25: { xp: 15000, title: "Maestro SrCode", badge: "🏆", power: "Full Stack Wisdom" },
  30: { xp: 25000, title: "Leyenda Viviente", badge: "🌟", power: "AI Symbiosis" }
  // Note: The prompt has level keys as numbers. TypeScript might prefer string keys for object literals
  // if not explicitly typed, but the provided type { [key: number]: ... } should handle it.
};
