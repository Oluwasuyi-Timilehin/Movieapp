import React from 'react'

const Blogpost = ({ title, author, date, content }) => {
    return (
      <>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600">
              By {author} on {date}
            </p>
          </div>
          <div className="prose">{content}</div>
        </div>
      </>
    );
};

export default Blogpost