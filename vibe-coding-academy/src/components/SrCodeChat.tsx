import React from 'react';
import SrCodePlaceholder from '../assets/images/srcode_placeholder.svg'; // Reusing the placeholder

// Dummy components for ChatMessage, TypingIndicator, and ChatInput
// These would be more fleshed out or imported from a library in a real app.

interface Message {
  sender: 'user' | 'srcode';
  content: string;
  timestamp?: Date; // Optional for now
}

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const isSrCode = message.sender === 'srcode';
  return (
    <div className={`flex ${isSrCode ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow
          ${isSrCode ? 'bg-blue-600 text-white rounded-br-none' : 'bg-purple-600 text-white rounded-bl-none'}`}
      >
        <p className="text-sm">{message.content}</p>
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
  onSend: (message: string) => void; // This will be connected later
  isTyping: boolean; // To disable input while SrCode is "typing"
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
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe tu mensaje a SrCode..."
        disabled={isTyping}
        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:border-blue-500 placeholder-gray-500 disabled:opacity-50"
      />
      <button type="submit" hidden>Send</button> {/* Hidden submit for Enter key */}
    </form>
  );
};


const SrCodeChat: React.FC = () => {
  // Dummy state for now
  const [messages, setMessages] = React.useState<Message[]>([
    { sender: 'srcode', content: "¡Hola! 👋 Soy SrCode, tu mentor IA personal. ¿En qué puedo ayudarte hoy?" },
    { sender: 'user', content: "Estoy aprendiendo sobre componentes en React." },
    { sender: 'srcode', content: "¡Genial! Los componentes son como bloques de construcción LEGO para tus interfaces. 🧱" }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const handleSend = (userMessage: string) => {
    // For UI shell, just add user message and a dummy SrCode reply
    setMessages(prev => [...prev, { sender: 'user', content: userMessage }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'srcode', content: "Hmm, déjame pensar en eso... 🤔" }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-gray-800 rounded-lg shadow-xl">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src={SrCodePlaceholder} alt="SrCode Avatar" className="w-10 h-10 rounded-full border-2 border-blue-400" />
          <div>
            <h3 className="text-white font-bold">SrCode IA</h3>
            <p className="text-gray-400 text-sm">Tu mentor personal ✨</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSend} isTyping={isTyping} />
    </div>
  );
};

export default SrCodeChat;
