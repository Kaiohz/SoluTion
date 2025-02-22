import React, { useState } from 'react';

interface NewsItem {
  title: string;
  content: string;
  audioUrl: string;
}

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      title: 'Breaking News 1',
      content: 'This is the content of the first breaking news...',
      audioUrl: 'path/to/audio1.mp3',
    },
    {
      title: 'Breaking News 2',
      content: 'This is the content of the second breaking news...',
      audioUrl: 'path/to/audio2.mp3',
    },
  ]);

  const handlePlayAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">News</h2>
        <p className="mt-4 text-lg text-gray-500">Latest news updates</p>
      </div>
      <div className="mt-12 space-y-6">
        {newsItems.map((newsItem, index) => (
          <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{newsItem.title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{newsItem.content}</p>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end space-x-3">
              <button
                onClick={() => handlePlayAudio(newsItem.audioUrl)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Play Audio
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
