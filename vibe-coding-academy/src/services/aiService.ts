// src/services/aiService.ts
import { OPENROUTER_CONFIG, SrCodePersonality } from '../core/srcodeConfig';

const openRouterKey = process.env.REACT_APP_OPENROUTER_API_KEY;

interface AIResponse {
  content: string | null;
  error?: string;
}

// Generic function to call OpenRouter chat completions
export const callOpenRouterChatCompletion = async (
  promptContent: string, // The main user/task prompt
  modelIdentifier: 'primary' | 'fallback' | 'creative' | 'analytical',
  systemPrompt: string = SrCodePersonality.role, // Default system prompt
  maxTokens: number = 500,
  temperature: number = 0.7
): Promise<AIResponse> => {
  if (!openRouterKey) {
    console.warn("REACT_APP_OPENROUTER_API_KEY is not defined.");
    return { content: null, error: "API Key no configurada." };
  }

  const model = OPENROUTER_CONFIG.models[modelIdentifier];
  if (!model) {
    console.error(\`Model identifier '\${modelIdentifier}' not found in OPENROUTER_CONFIG.\`);
    return { content: null, error: \`Modelo AI '\${modelIdentifier}' no encontrado.\` };
  }

  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: promptContent }
  ];

  try {
    const response = await fetch(OPENROUTER_CONFIG.baseURL + '/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${openRouterKey}\`,
        'Content-Type': 'application/json',
        'X-Title': 'Vibe Coding Academy - AI Service'
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: temperature,
        max_tokens: maxTokens
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }));
      console.error('OpenRouter API Error (aiService):', errorData);
      let userFriendlyError = "Error de IA: No se pudo obtener respuesta.";
      if (response.status === 401) userFriendlyError = "Error de IA: API Key inválida.";
      if (response.status === 429) userFriendlyError = "Error de IA: Límite de peticiones alcanzado.";
      return { content: null, error: userFriendlyError };
    }

    const data = await response.json();
    const aiResponseContent = data.choices[0]?.message?.content;

    if (aiResponseContent) {
      return { content: aiResponseContent.trim(), error: null };
    } else {
      console.error('Invalid response structure from OpenRouter (aiService):', data);
      return { content: null, error: "Respuesta de IA inválida." };
    }

  } catch (error) {
    console.error('Error calling OpenRouter (aiService):', error);
    return { content: null, error: "Error de conexión con el servicio de IA." };
  }
};
