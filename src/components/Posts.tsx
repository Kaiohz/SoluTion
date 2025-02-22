import React, { useState } from 'react';

interface Post {
  title: string;
  content: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Post 1',
      content: 'This is the content of the first post...',
    },
    {
      title: 'Post 2',
      content: 'This is the content of the second post...',
    },
  ]);

  const handleEdit = (index: number) => {
    // Handle edit logic
    console.log('Edit', index);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Manage Posts</h2>
        <p className="mt-4 text-lg text-gray-500">Fill in the details to manage posts</p>
      </div>
      <div className="mt-12 space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{post.title}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{post.content}</p>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end space-x-3">
              <button
                onClick={() => handleEdit(index)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
