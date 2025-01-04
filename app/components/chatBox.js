"use client";
import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const userMessage = { text: inputMessage, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInputMessage("");
      setIsLoading(true);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputMessage }),
        });

        if (!response.ok) {
          throw Error(`Network response was not ok ${response.status} : ${response.statusText}` );
        }

        const data = await response.json();
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-[#1a1b26] p-4 overflow-y-auto shadow-lg rounded-xl m-4 flex flex-col h-[calc(100vh-2rem)]">
      <h2 className="text-lg font-bold mb-3 text-[#a9b1d6]">
        Chat Assistant
      </h2>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto mb-4 p-2 bg-[#24283b] rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg text-[#c0caf5] ${
              message.sender === 'user'
                ? 'bg-[#565f89] ml-auto'
                : 'bg-[#414868] mr-auto'
            }`}
          >
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="p-2 my-2 rounded-lg text-[#c0caf5] bg-[#414868] mr-auto">
            Typing...
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md border border-[#414868] bg-[#24283b] text-[#c0caf5] outline-none focus:ring-2 focus:ring-[#7aa2f7] transition-all"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-[#7aa2f7] text-[#1a1b26] font-bold hover:bg-[#6989dd] transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;