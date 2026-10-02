import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { getBotResponse } from './answerEngine';
import { profile } from './cvData';

const SUGGESTED_QUESTIONS = [
  "What is Adnan expert in?",
  "Tell me about his experience",
  "What projects has he built?",
  "How can I contact him?",
];

// Matches URLs and emails inside a line so they can be rendered as real links.
const LINK_PATTERN = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

// Turns a single line of text into React nodes, linkifying URLs/emails
// and bolding "Label:" style prefixes (e.g. "Tech Stack: React, Node").
function renderLineContent(line) {
  const parts = line.split(LINK_PATTERN);
  return parts.map((part, i) => {
    if (!part) return null;
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300 underline underline-offset-2 hover:text-sky-200 break-all"
        >
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className="text-sky-300 underline underline-offset-2 hover:text-sky-200 break-all">
          {part}
        </a>
      );
    }

    // Bold a leading "Label:" segment within the remaining plain text.
    const labelMatch = part.match(/^([A-Z][\w\s&]{2,30}:)(\s*)/);
    if (labelMatch) {
      const [, label, space] = labelMatch;
      return (
        <React.Fragment key={i}>
          <span className="font-semibold text-slate-100">{label}</span>
          {space}
          {part.slice(labelMatch[0].length)}
        </React.Fragment>
      );
    }

    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Renders a bot/user message with basic structure: paragraphs, and
// "• item" lines grouped into a proper spaced bullet list.
function MessageText({ text }) {
  const lines = text.split('\n');
  const blocks = [];
  let currentList = null;

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith('•');

    if (isBullet) {
      if (!currentList) {
        currentList = { type: 'list', items: [] };
        blocks.push(currentList);
      }
      currentList.items.push(trimmed.replace(/^•\s*/, ''));
    } else {
      currentList = null;
      if (trimmed.length === 0) {
        blocks.push({ type: 'space', key: idx });
      } else {
        blocks.push({ type: 'text', content: line, key: idx });
      }
    }
  });

  return (
    <div className="space-y-1.5">
      {blocks.map((block, i) => {
        if (block.type === 'space') return <div key={i} className="h-1.5" />;
        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-1 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-sky-400 mt-0.5">•</span>
                  <span>{renderLineContent(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderLineContent(block.content)}</p>;
      })}
    </div>
  );
}

const Chatbot = ({ onOpenChange, pageReady = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const updateOpen = (next) => {
    setIsOpen(next);
    onOpenChange?.(next);
    if (next) setShowGreeting(false);
  };

  // Pop a quick greeting bubble shortly after the loader finishes, then auto-hide it.
  useEffect(() => {
    if (!pageReady) return;

    const showTimer = setTimeout(() => setShowGreeting(true), 600);
    const hideTimer = setTimeout(() => setShowGreeting(false), 600 + 4000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pageReady]);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hi! I'm Adnan's Assistant 🤖 Ask me anything about his skills, experience, or projects.`,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const sendMessage = (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text) return;

    const userMessage = { sender: 'user', text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate a brief "thinking" delay for a more natural chat feel.
    setTimeout(() => {
      const reply = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 500 + Math.random() * 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed right-4 sm:right-6 bottom-24 top-24 sm:top-auto sm:h-[32rem] z-[95] w-[90vw] max-w-sm flex flex-col rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/60 shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-sky-600 to-blue-700 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <FaRobot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">Ask about {profile.name.split(' ')[0]}</p>
                  <p className="text-sky-100 text-[11px] leading-tight">Assistant</p>
                </div>
              </div>
              <button
                onClick={() => updateOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-br-sm'
                        : 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-bl-sm'
                    }`}
                  >
                    <MessageText text={msg.text} />
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-slate-800/80 border border-slate-700/50 flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-sky-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions - only show at the start */}
              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-sky-300 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="shrink-0 flex items-center gap-2 p-3 border-t border-slate-700/50 bg-slate-900/80">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50 text-white text-sm placeholder-slate-500 focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/25 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sky-500/40 transition-all duration-300"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting bubble - pops in shortly after page load, auto-hides after 4s */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => updateOpen(true)}
            className="fixed bottom-6 right-24 sm:right-24 z-[91] max-w-[13rem] cursor-pointer"
          >
            <div className="relative px-4 py-3 rounded-2xl rounded-br-sm bg-slate-800/95 backdrop-blur-xl border border-slate-700/60 shadow-xl shadow-black/30">
              <p className="text-sm text-slate-100 leading-snug">
                👋 Hi! How may I help you? I'm Adnan's assistant.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - sits directly above the FloatingActions "+" button */}
      <motion.button
        onClick={() => updateOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <FaTimes className="w-5 h-5 text-white" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <FaRobot className="w-6 h-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-sky-500/30 pointer-events-none"
          />
        )}
      </motion.button>
    </>
  );
};

export default Chatbot;
