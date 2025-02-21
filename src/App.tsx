import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Billing from './components/Billing';
import Mail from './components/Mail';
import Chatbot from './components/Chatbot';
import FloatingButton from './components/FloatingButton';
import ChatbotModal from './components/ChatbotModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<div className="min-h-screen bg-gray-100 flex items-center justify-center"><p>Welcome to SoluTion!</p></div>} />
      </Routes>
      <FloatingButton onClick={openModal} />
      <ChatbotModal isOpen={isModalOpen} onClose={closeModal}>
        <Chatbot />
      </ChatbotModal>
    </Router>
  );
};

export default App;
