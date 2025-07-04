import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, MessageCircle, X } from 'lucide-react';
import { openRouterService } from '../lib/openrouter';
import { useTranslation } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'srcode';
  content: string;
  timestamp: Date;
}

interface SrCodeChatProps {
  lessonContext?: {
    id: string;
    title: string;
    objective: string;
    level: number;
  };
  isOpen: boolean;
  onToggle: () => void;
}

export default function SrCodeChat({ lessonContext, isOpen, onToggle }: SrCodeChatProps) {
  const { t, currentLanguage } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'srcode',
        content: lessonContext 
          ? t('srcode.welcomeMessage', { lessonTitle: lessonContext.title })
          : "¡Hola! 👋 Soy SrCode, tu mentor de IA. ¿En qué puedo ayudarte hoy?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }

    // Set default model
    const models = openRouterService.getAvailableModels();
    if (models.length > 0 && !selectedModel) {
      setSelectedModel(models[0]);
    }
  }, [lessonContext, messages.length, selectedModel, t]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await openRouterService.chatWithSrCode(
        inputMessage.trim(),
        lessonContext,
        currentLanguage,
        selectedModel
      );

      const srCodeMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'srcode',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, srCodeMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'srcode',
        content: t('srcode.errorMessage') || "¡Ups! Algo salió mal. ¿Puedes intentarlo de nuevo?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">SrCode</h3>
              <p className="text-xs text-gray-300">AI Mentor</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Model Selector */}
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="text-xs bg-white/10 border border-white/20 rounded px-2 py-1 text-white"
            >
              {openRouterService.getAvailableModels().map((model) => (
                <option key={model} value={model} className="bg-slate-800">
                  {model.split('/')[1]?.split(':')[0] || model}
                </option>
              ))}
            </select>

            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start space-x-3 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'srcode'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'bg-gray-600'
              }`}>
                {message.type === 'srcode' ? (
                  <Bot className="h-4 w-4 text-white" />
                ) : (
                  <User className="h-4 w-4 text-white" />
                )}
              </div>

              <div className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'srcode'
                  ? 'bg-blue-500/20 text-white'
                  : 'bg-purple-500/20 text-white'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Loader className="h-4 w-4 text-blue-400 animate-spin" />
                  <span className="text-sm text-white">{t('srcode.thinking') || 'Pensando...'}</span>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/20">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('srcode.placeholder') || 'Escribe tu mensaje...'}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}