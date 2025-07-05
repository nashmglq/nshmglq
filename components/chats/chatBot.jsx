"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, Sparkles, MessageCircle } from "lucide-react";
import { createPortal } from "react-dom";
import { chatState } from "../../store/state";

const formatMessage = (text) => {
  if (!text) return text;

  const lines = text.split("\n");

  return lines.map((line, index) => {
    if (line.trim().match(/^[-•*]\s/)) {
      const content = line.replace(/^[-•*]\s/, "").trim();
      return (
        <div key={index} className="flex items-start space-x-2 my-1">
          <span className="text-purple-300 mt-1">•</span>
          <span>{formatInlineText(content)}</span>
        </div>
      );
    }

    if (line.trim().match(/^\d+\.\s/)) {
      const match = line.trim().match(/^(\d+)\.\s(.+)/);
      if (match) {
        const [, number, content] = match;
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-purple-300 mt-1 font-medium">{number}.</span>
            <span>{formatInlineText(content)}</span>
          </div>
        );
      }
    }

    if (line.trim()) {
      return (
        <div key={index} className="my-1">
          {formatInlineText(line)}
        </div>
      );
    }

    return <div key={index} className="h-2" />;
  });
};

const formatInlineText = (text) => {
  text = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="font-semibold">$1</strong>'
  );

  text = text.replace(
    /(?<!\*)\*([^*]+?)\*(?!\*)/g,
    '<em class="italic">$1</em>'
  );

  return <span dangerouslySetInnerHTML={{ __html: text }} />;
};

export const ChatBot = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const { loading, success, error, message, chat } = chatState();
  const scrollRef = useRef(null);

  const sendChat = async () => {
    if (!userMessage.trim()) {
      setListMessage((prev) => [
        ...prev,
        { from: "ai", text: "❗ Please enter a message." },
      ]);
      return;
    }

    setListMessage((prev) => [...prev, { from: "user", text: userMessage }]);
    setUserMessage("");
    await chat({ userMessage, listMessage });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendChat();
    }
  };

  useEffect(() => {
    if (message && success) {
      setListMessage((prev) => [...prev, { from: "ai", text: message }]);
    }

    if (error && !success && message) {
      setListMessage((prev) => [
        ...prev,
        { from: "ai", text: `❗ ${message}` },
      ]);
    }
  }, [message, error, success]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [listMessage, loading]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <>
      <div className="fixed right-6 bottom-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300"
        >
          <div className="relative flex items-center justify-center">
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </div>
          {!open && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>

      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 transition-all duration-500 z-40 ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    AI Assistant
                  </h3>
                  <p className="text-white/70 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/90">
            {listMessage.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {msg.from === "ai" ? formatMessage(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-white/70 text-xs">
                      AI is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          <div className="p-4 bg-slate-800/90 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <textarea
                  placeholder="Type your message..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm resize-none outline-none placeholder-white/50 focus:border-purple-400 focus:bg-white/10 transition-all"
                />
              </div>
              <button
                onClick={sendChat}
                disabled={!userMessage.trim() || loading}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white p-3 rounded-xl transition-all transform hover:scale-105 disabled:scale-100"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};
