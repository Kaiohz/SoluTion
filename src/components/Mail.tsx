import React, { useState } from 'react';

const Mail: React.FC = () => {
  const [mail, setMail] = useState({
    sender: '',
    subject: '',
    body: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMail({
      ...mail,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle mail submission
    console.log(mail);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Manage Mail</h2>
        <p className="mt-4 text-lg text-gray-500">Fill in the details to manage mail from LinkedIn</p>
      </div>
      <form className="mt-12" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label htmlFor="sender" className="block text-sm font-medium text-gray-700">Sender</label>
            <div className="mt-1">
              <input
                type="text"
                name="sender"
                id="sender"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={mail.sender}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={mail.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
            <div className="mt-1">
              <textarea
                name="body"
                id="body"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={mail.body}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Mail
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mail;
