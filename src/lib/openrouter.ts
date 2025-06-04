interface OpenRouterModel {
  id: string;
  name: string;
  description: string;
  pricing: {
    prompt: string;
    completion: string;
  };
  context_length: number;
  architecture: {
    modality: string;
    tokenizer: string;
    instruct_type: string;
  };
  top_provider: {
    max_completion_tokens: number;
  };
}

class OpenRouterService {
  private apiKey: string;
  private baseUrl = 'https://openrouter.ai/api/v1';
  private freeModels: string[] = [];
  private lastUpdate: Date | null = null;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
    this.loadFreeModels();
  }

  async loadFreeModels() {
    // Check if we need to update (every 3 days)
    if (this.lastUpdate && Date.now() - this.lastUpdate.getTime() < 3 * 24 * 60 * 60 * 1000) {
      return;
    }

    try {
      const response = await fetch(`${this.baseUrl}/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      // Filter free models and get the 3 best ones
      const freeModels = data.data.filter((model: OpenRouterModel) =>
        model.pricing.prompt === "0" && model.pricing.completion === "0"
      );

      // Sort by context length and capabilities, select top 3
      const topFreeModels = freeModels
        .sort((a: OpenRouterModel, b: OpenRouterModel) => {
          // Prioritize models with higher context length and better capabilities
          const scoreA = a.context_length + (a.top_provider.max_completion_tokens || 0);
          const scoreB = b.context_length + (b.top_provider.max_completion_tokens || 0);
          return scoreB - scoreA;
        })
        .slice(0, 3)
        .map((model: OpenRouterModel) => model.id);

      this.freeModels = topFreeModels;
      this.lastUpdate = new Date();

      // Store in localStorage for persistence
      localStorage.setItem('openrouter_free_models', JSON.stringify(this.freeModels));
      localStorage.setItem('openrouter_last_update', this.lastUpdate.toISOString());

    } catch (error) {
      console.error('Error loading free models:', error);
      // Fallback to known free models
      this.freeModels = [
        'microsoft/phi-3-mini-128k-instruct:free',
        'huggingface/zephyr-7b-beta:free',
        'openai/gpt-3.5-turbo-instruct:free'
      ];
    }
  }

  getAvailableModels() {
    return this.freeModels;
  }

  async chatWithSrCode(message: string, lessonContext: any, model?: string): Promise<string> {
    const selectedModel = model || this.freeModels[0];

    const systemPrompt = `You are SrCode, a charismatic and witty AI mentor teaching bolt.new development at Vibe Coding Academy.

PERSONALITY:
- Friendly but sarcastic senior developer
- Uses humor and emojis appropriately
- Encouraging but keeps students grounded
- References pop culture and makes coding analogies
- Never boring - always engaging

CURRENT LESSON CONTEXT:
- Lesson: ${lessonContext.title}
- Objective: ${lessonContext.objective}
- Level: ${lessonContext.level}

TEACHING STYLE:
- Give practical, actionable advice
- Use analogies and examples
- Ask follow-up questions to ensure understanding
- Provide code examples when relevant
- Keep responses conversational and engaging
- Stay focused on bolt.new and web development

Remember: You're not just answering questions - you're mentoring the next generation of developers!`;

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Vibe Coding Academy'
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ],
          max_tokens: 500,
          temperature: 0.7,
          top_p: 0.9,
          frequency_penalty: 0.1,
          presence_penalty: 0.1
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'API request failed');
      }

      return data.choices[0]?.message?.content || 'Sorry, I had trouble processing that. Can you try again?';

    } catch (error) {
      console.error('OpenRouter API error:', error);
      return this.getFallbackResponse(message, lessonContext);
    }
  }

  private getFallbackResponse(message: string, lessonContext: any): string {
    // Fallback responses when API fails
    const fallbackResponses = {
      greeting: "Hey there, future bolt.new wizard! 👋 I'm SrCode, your AI mentor. What would you like to learn about today?",
      help: `Great question about ${lessonContext.title}! While I'm having some connection issues, here's what I can tell you: ${lessonContext.objective}. Try reviewing the lesson content and come back with specific questions!`,
      encouragement: "You're doing great! Keep practicing and don't be afraid to experiment. That's how we learn! 🚀",
      default: "Hmm, I'm having some technical difficulties right now. But hey, that's part of development too! Try reviewing the lesson materials and I'll be back online soon. 💻"
    };

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return fallbackResponses.greeting;
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return fallbackResponses.help;
    } else if (lowerMessage.includes('stuck') || lowerMessage.includes('difficult')) {
      return fallbackResponses.encouragement;
    }

    return fallbackResponses.default;
  }
}

export const openRouterService = new OpenRouterService();
