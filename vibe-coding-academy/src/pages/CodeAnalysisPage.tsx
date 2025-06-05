// src/pages/CodeAnalysisPage.tsx
import React, { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { callOpenRouterChatCompletion } from '../services/aiService';
import { updateUserXP } from '../services/progressService';
import { XP_SYSTEM_SRCODE, SrCodePersonality } from '../core/srcodeConfig'; // Anticipating XP_SYSTEM_SRCODE

const CodeAnalysisPage: React.FC = () => {
  const { user } = useUserStore();
  const [codeToAnalyze, setCodeToAnalyze] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript'); // Default language
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAnalyzeCode = async () => {
    if (!codeToAnalyze.trim()) {
      setError("Por favor, ingresa algo de código para analizar.");
      return;
    }
    setIsLoading(true);
    setError('');
    setAnalysisResult('');

    const prompt = \`
    Como SrCode, analiza este código en lenguaje \${language} y proporciona:
    1. ✅ Aspectos positivos (si los hay, sé específico)
    2. 🐛 Errores o mejoras posibles (si los hay, explica por qué y sugiere correcciones)
    3. 🚀 Optimizaciones sugeridas (si aplica)
    4. 📚 Conceptos clave relacionados para estudiar y entender mejor este código.

    Código a analizar:
    \`\`\`\${language}
    \${codeToAnalyze}
    \`\`\`

    Responde con tu personalidad característica de SrCode, usando emojis y analogías.
    Mantén la respuesta estructurada con los puntos 1, 2, 3, 4.
    Si el código es muy simple o perfecto, enfócate en los conceptos (punto 4) y elogia el buen trabajo.
    Si hay errores, sé claro y amable al explicarlos.
    \`;

    const { content, error: apiError } = await callOpenRouterChatCompletion(
      prompt,
      'analytical', // Use the 'analytical' model for this task
      SrCodePersonality.role // SrCode's personality as system prompt
    );

    setIsLoading(false);

    if (apiError) {
      setError(apiError);
    } else if (content) {
      setAnalysisResult(content);
      // Award XP
      if (user?.id) {
        const xpToAward = (XP_SYSTEM_SRCODE && typeof XP_SYSTEM_SRCODE.codeAnalysis === 'number')
                          ? XP_SYSTEM_SRCODE.codeAnalysis
                          : 25; // Default XP
        updateUserXP(user.id, xpToAward)
          .then(update => {
            if (update?.data) console.log(\`Awarded \${xpToAward} XP for code analysis. New total: \${update.data.total_xp}\`);
            // TODO: Update global user progress state for immediate UI reflection
          })
          .catch(err => console.error("Error updating XP for code analysis:", err));
      }
    } else {
      setError("No se recibió contenido del análisis.");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-full text-white">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">Análisis de Código con SrCode 🔬</h1>
      <p className="text-gray-300 mb-4">
        ¿Tienes un fragmento de código que te intriga o te da problemas? ¡Pégalo aquí y deja que los poderes de IA de SrCode lo examinen!
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">Lenguaje del Código:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full md:w-1/3 px-3 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="typescript">TypeScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        <textarea
          value={codeToAnalyze}
          onChange={(e) => setCodeToAnalyze(e.target.value)}
          placeholder={\`// Pega tu código \${language} aquí...\`}
          className="w-full h-64 p-4 rounded-md bg-gray-900 text-sm font-mono border border-gray-700 focus:outline-none focus:border-blue-500 mb-4"
        />
        <button
          onClick={handleAnalyzeCode}
          disabled={isLoading}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:scale-100"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analizando...
            </span>
          ) : (
            "🚀 Analizar con SrCode"
          )}
        </button>

        {error && <p className="mt-4 text-red-400 bg-red-900 p-3 rounded-md">{error}</p>}

        {analysisResult && (
          <div className="mt-6 bg-gray-850 p-6 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Análisis de SrCode:</h2>
            <div className="prose prose-invert max-w-none whitespace-pre-wrap text-gray-200">
              {analysisResult}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeAnalysisPage;
