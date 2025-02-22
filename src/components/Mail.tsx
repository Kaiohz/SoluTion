import React, { useState } from 'react';

interface Mail {
  sender: string;
  subject: string;
  body: string;
  aiAnswer: string;
}

const Mail: React.FC = () => {
  const [mails, setMails] = useState<Mail[]>([
    {
      sender: 'Recruiter 1',
      subject: 'Job Opportunity',
      body: 'We have an exciting opportunity for you...',
      aiAnswer: 'This sounds like a great opportunity! Would you like to apply?',
    },
    {
      sender: 'Recruiter 2',
      subject: 'Interview Invitation',
      body: 'We would like to invite you for an interview...',
      aiAnswer: 'This interview invitation looks promising. Would you like to accept?',
    },
  ]);

  const handleAnswer = (index: number) => {
    // Handle answer logic
    console.log('Answer', index);
  };

  const handleEdit = (index: number) => {
    // Handle edit logic
    console.log('Edit', index);
  };

  const handleDiscard = (index: number) => {
    // Handle discard logic
    console.log('Discard', index);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Manage Mail</h2>
        <p className="mt-4 text-lg text-gray-500">Fill in the details to manage mail from LinkedIn</p>
      </div>
      <div className="mt-12 space-y-6">
        {mails.map((mail, index) => (
          <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{mail.subject}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{mail.body}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <h4 className="text-lg leading-6 font-medium text-gray-900">AI Answer</h4>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{mail.aiAnswer}</p>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end space-x-3">
              <button
                onClick={() => handleAnswer(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Answer
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDiscard(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Discard
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mail;
