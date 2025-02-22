import React from 'react';

const Home: React.FC = () => {
  const billsGenerated = 0;
  const totalAmount = 0;
  const answersGenerated = 0;
  const newsSummariesGenerated = 0;
  const postsGenerated = 0;

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Metrics</h2>
        <p className="mt-4 text-lg text-black">Overview of generated content</p>
      </div>
      <div className="mt-12 space-y-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-black">Bills Generated</h3>
            <p className="mt-1 max-w-2xl text-sm text-black">{billsGenerated}</p>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-black">Total Amount</h3>
            <p className="mt-1 max-w-2xl text-sm text-black">${totalAmount}</p>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-black">Answers Generated</h3>
            <p className="mt-1 max-w-2xl text-sm text-black">{answersGenerated}</p>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-black">News Summaries Generated</h3>
            <p className="mt-1 max-w-2xl text-sm text-black">{newsSummariesGenerated}</p>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-black">Posts Generated</h3>
            <p className="mt-1 max-w-2xl text-sm text-black">{postsGenerated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
