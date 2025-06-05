// vibe-coding-academy/src/components/SrCodeChat.tsx
import React, { useState, useEffect, useRef } from 'react';
import SrCodePlaceholder from '../assets/images/srcode_placeholder.svg';
import { OPENROUTER_CONFIG, SrCodePersonality } from '../core/srcodeConfig';
import { useUserStore } from '../store/userStore';
import { saveConversation, getLatestConversation, ChatMessage as ServiceChatMessage } from '../services/chatService';
import { updateUserXP } from '../services/progressService';
import { XP_SYSTEM_SRCODE } from '../core/srcodeConfig'; // Will be created in step 9

// Interface for messages in this component's state
interface Message extends ServiceChatMessage {
  // No local-specific fields needed for now
}

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isSrCode = message.sender === 'srcode';
  return (
    <div className={`flex ${isSrCode ? 'justify-start' : 'justify-end'} mb-2.5`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl shadow
          ${isSrCode ? 'bg-blue-600 text-white rounded-br-none' : 'bg-purple-600 text-white rounded-bl-none'}`}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

const TypingIndicator: React.FC = () => (
  <div className="flex justify-start items-center space-x-1 p-2">
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-225"></div>
    <p className="text-xs text-gray-400 ml-2">SrCode está escribiendo...</p>
  </div>
);

interface ChatInputProps {
  onSend: (message: string) => void;
  isTyping: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, isTyping }) => {
  const [inputValue, setInputValue] = React.useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSend(inputValue.trim());
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe tu mensaje a SrCode..."
        disabled={isTyping}
        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500 placeholder-gray-400 disabled:opacity-50"
      />
      <button type="submit" hidden>Send</button>
    </form>
  );
};
// --- End Helper Components ---

const SrCodeChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<null | HTMLDivElement>(null);
  const { user } = useUserStore();

  const openRouterKey = process.env.REACT_APP_OPENROUTER_API_KEY;

  useEffect(() => {
    if (!openRouterKey) {
      console.warn("REACT_APP_OPENROUTER_API_KEY is not defined. SrCode chat will not function properly for API calls.");
    }
  }, [openRouterKey]);

  useEffect(() => {
    const loadHistory = async () => {
      if (user?.id) {
        setIsTyping(true);
        const { data: loadedMessages, error } = await getLatestConversation(user.id);

        if (error) {
          console.error("Failed to load chat history:", error);
          setMessages([{ sender: 'srcode', content: SrCodePersonality.responses.greeting, timestamp: new Date() }]);
        } else if (loadedMessages && loadedMessages.length > 0) {
          setMessages(loadedMessages);
        } else {
          setMessages([{ sender: 'srcode', content: SrCodePersonality.responses.greeting, timestamp: new Date() }]);
        }
        setIsTyping(false);
      } else {
        setMessages([{ sender: 'srcode', content: SrCodePersonality.responses.greeting, timestamp: new Date() }]);
      }
    };
    loadHistory();
  }, [user]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSrCodeMessageAddition = (messageContent: string, isErrorOrInfo: boolean = false) => {
    const srCodeMessageForState: Message = { sender: 'srcode', content: messageContent, timestamp: new Date() };

    // `messages` at this point already includes the latest user message
    // So, `newCompleteHistory` will be `[...existingMessagesIncludingUser, srCodeMessageForState]`
    setMessages(prevMsgs => {
        const newCompleteHistory = [...prevMsgs, srCodeMessageForState];
        if (user) {
            saveConversation(newCompleteHistory)
                .then(saveResult => {
                    if (!saveResult.error && !isErrorOrInfo) {
                        const xpToAward = (XP_SYSTEM_SRCODE && typeof XP_SYSTEM_SRCODE.interactionWithSrCode === 'number')
                                          ? XP_SYSTEM_SRCODE.interactionWithSrCode
                                          : 5; // Default XP
                        return updateUserXP(user.id, xpToAward);
                    }
                    return Promise.resolve(null); // No XP update if error or info message
                })
                .then(xpUpdateResult => {
                    if (xpUpdateResult?.data) {
                        console.log(\`Awarded XP. User: \${user.id}, New total XP: \${xpUpdateResult.data.total_xp}\`);
                        // TODO: Trigger UI refresh for XP in DashboardLayout more directly
                        // For now, user might need to refresh or navigate to see XP update in header.
                    } else if (xpUpdateResult?.error) {
                        console.error("Failed to update XP:", xpUpdateResult.error);
                    }
                })
                .catch(e => console.error("Supabase save or XP update failed:", e));
        }
        return newCompleteHistory;
    });
  };

  const sendToSrCodeAPI = async (userMessageContent: string) => {
    const userMessageForState: Message = { sender: 'user', content: userMessageContent, timestamp: new Date() };
    setMessages(prevMessages => [...prevMessages, userMessageForState]); // Add user message to UI first

    if (!openRouterKey) {
      handleSrCodeMessageAddition("Lo siento, no puedo conectarme en este momento. Mi API key no está configurada. 🔑😅", true);
      // setIsTyping(false) will be called in handleSrCodeMessageAddition's finally if it were structured with one,
      // but here it's better to ensure it's set if we return early.
      // However, handleSrCodeMessageAddition doesn't control isTyping. So, set it here.
      setIsTyping(false); // Should be managed carefully, perhaps in finally block of overall logic
      return;
    }

    setIsTyping(true);

    // Construct messages for API - use 'messages' state which now includes the user's latest message
    // Need to use the callback version of setMessages to ensure 'messages' is up-to-date for apiMessages
    let currentMessagesForAPI: Message[] = [];
    setMessages(prev => { currentMessagesForAPI = prev; return prev; }); // Hacky way to get current state, better to pass messages to API construction

    const apiMessages = [
      { role: 'system', content: SrCodePersonality.role },
      ...currentMessagesForAPI.slice(-10).map(msg => ({ // Pass the latest including the new user message
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
    ];

    try {
      const response = await fetch(OPENROUTER_CONFIG.baseURL + '/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${openRouterKey}\`,
          'Content-Type': 'application/json',
          'X-Title': 'Vibe Coding Academy - SrCode'
        },
        body: JSON.stringify({
          model: OPENROUTER_CONFIG.models.primary,
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        console.error('OpenRouter API Error:', errorData);
        let userFriendlyError = "Hmm, parece que mis circuitos están un poco revueltos. 😵‍💫 ¿Podrías intentarlo de nuevo?";
        if (response.status === 401) userFriendlyError = "¡Oh no! Parece que mi llave de acceso (API Key) no es válida. 🔑 Avísale a los desarrolladores.";
        if (response.status === 429) userFriendlyError = "¡Whoa! Demasiadas peticiones. Mis servidores necesitan un respiro. ☕ Intenta en un momento.";
        handleSrCodeMessageAddition(userFriendlyError, true);
      } else {
        const data = await response.json();
        const srCodeResponseContent = data.choices[0]?.message?.content;
        if (srCodeResponseContent) {
          handleSrCodeMessageAddition(srCodeResponseContent.trim(), false);
        } else {
          console.error('Invalid response structure from OpenRouter:', data);
          handleSrCodeMessageAddition("Recibí una respuesta un poco extraña... 🤔 ¿Probamos otra vez?", true);
        }
      }
    } catch (error) {
      console.error('Error sending message to SrCode:', error);
      handleSrCodeMessageAddition("¡Rayos! 🌩️ Algo salió mal al intentar conectar con mis poderes de IA. Revisa la consola para más detalles.", true);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-800 rounded-lg shadow-xl">
      <div className="p-4 border-b border-gray-700 bg-gray-850 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <img src={SrCodePlaceholder} alt="SrCode Avatar" className="w-10 h-10 rounded-full border-2 border-blue-400" />
          <div>
            <h3 className="text-white font-bold">SrCode IA</h3>
            <p className="text-gray-400 text-sm">Tu mentor personal ✨</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1 bg-gray-900">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={chatEndRef} />
      </div>

      <ChatInput onSend={sendToSrCodeAPI} isTyping={isTyping} />
    </div>
  );
};

export default SrCodeChat;
