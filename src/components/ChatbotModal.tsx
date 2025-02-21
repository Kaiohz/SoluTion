import React, { useEffect } from 'react';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClickOutside = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default ChatbotModal;
