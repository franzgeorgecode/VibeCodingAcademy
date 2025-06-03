import { create } from 'zustand';

export type SrCodeMood = 'happy' | 'sarcastic' | 'thinking' | 'celebrating';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'srcode';
  content: string;
  timestamp: Date;
  context?: {
    lessonId?: string;
    achievementId?: string;
    errorType?: string;
  };
}

interface SrCodeState {
  mood: SrCodeMood;
  isTyping: boolean;
  conversationHistory: ChatMessage[];
  lastInteraction: Date | null;
  
  // Actions
  setMood: (mood: SrCodeMood) => void;
  setTyping: (isTyping: boolean) => void;
  addUserMessage: (content: string, context?: ChatMessage['context']) => void;
  addSrCodeMessage: (content: string, mood?: SrCodeMood) => void;
  clearConversation: () => void;
}

export const useSrCodeStore = create<SrCodeState>((set, get) => ({
  mood: 'happy',
  isTyping: false,
  conversationHistory: [],
  lastInteraction: null,
  
  setMood: (mood) => set({ mood }),
  
  setTyping: (isTyping) => set({ isTyping }),
  
  addUserMessage: (content, context) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content,
      timestamp: new Date(),
      context
    };
    
    set((state) => ({
      conversationHistory: [...state.conversationHistory, message],
      lastInteraction: new Date()
    }));
  },
  
  addSrCodeMessage: (content, mood) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'srcode',
      content,
      timestamp: new Date()
    };
    
    if (mood) {
      set({ mood });
    }
    
    set((state) => ({
      conversationHistory: [...state.conversationHistory, message],
      isTyping: false,
      lastInteraction: new Date()
    }));
  },
  
  clearConversation: () => set({ 
    conversationHistory: [],
    lastInteraction: null
  })
}));