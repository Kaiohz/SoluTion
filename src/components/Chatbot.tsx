import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, `User: ${input}`]);
      setInput('');
      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, `Bot: ${input}`]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Chatbot</h2>
        <p className="mt-4 text-lg text-gray-500">Have a discussion with the chatbot</p>
      </div>
      <div className="mt-12">
        {messages.map((message, index) => (
          <p key={index} className="mb-2">{message}</p>
        ))}
      </div>
      <div className="mt-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
